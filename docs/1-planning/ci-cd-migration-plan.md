# Medal Foundation CI/CD Migration Plan

## Executive Summary

Migrate Medal Foundation website from expensive EC2 hosting to cost-effective S3 + CloudFront static hosting with automated CI/CD pipeline, following AWS best practices and the proven Far Too Young project architecture.

## Current State Analysis

### Existing Infrastructure
- **Hosting**: EC2 instance at IP 3.95.215.216 (expensive ~$20-50/month)
- **Application**: React frontend application
- **Repository**: Single main branch
- **Deployment**: Manual process
- **Domain**: medalfoundation.org + www.medalfoundation.org (Route 53 hosted zone: Z08444142AKVOKSV9RJW9)
- **DNS**: Currently A records pointing to EC2 IP (TTL: 300 seconds)

### Pain Points
- High hosting costs for static content
- Manual deployment process
- No staging environment for testing
- EC2 overkill for static React app

## Target Architecture

### Recommended Approach: Production-Only Setup
**Rationale**: Static React apps don't need staging AWS resources when local testing + git staging branch provides adequate testing.

### AWS Resources
```
├── S3 Bucket: medalfoundation-frontend-production
├── CloudFront Distribution: Production CDN
├── ACM Certificate: SSL certificate for *.medalfoundation.org
├── CodePipeline: Automated CI/CD
├── CodeBuild: React build process
├── IAM Roles: Pipeline permissions
└── Route 53: DNS management (existing)
```

### Git Strategy
```
├── main branch → Production deployment (AWS)
├── staging branch → Testing/review (local only)
└── feature branches → Development (local only)
```

## Implementation Phases

### Phase 1: Repository Preparation
**Duration**: 15 minutes
**Tasks**:
- [ ] Create staging branch from main
- [ ] Add build scripts (copy from Far Too Young)
- [ ] Test local build process

### Phase 2: AWS Infrastructure Setup
**Duration**: 30 minutes
**Tasks**:
- [ ] Create S3 bucket: `medalfoundation-frontend-production`
- [ ] Configure S3 static website hosting
- [ ] Create ACM SSL Certificate (5 min DNS validation)
- [ ] Set up CloudFront distribution (copy Far Too Young config)
- [ ] Configure custom domains

## Deployment Strategy

### **Manual First Deployment Approach**
**Rationale**: Validate infrastructure before automating. Faster initial setup and troubleshooting.

**Flow**:
1. **Manual deployment** → Test infrastructure
2. **Add CI/CD pipeline** → Automate after validation
3. **Production cutover** → DNS migration

### Phase 3: Manual Deployment & Testing
**Duration**: 20 minutes
**Tasks**:
- [ ] Build React app locally: `npm run build`
- [ ] Manual S3 upload: `aws s3 sync dist/ s3://medalfoundation-frontend-production --delete`
- [ ] CloudFront invalidation: `aws cloudfront create-invalidation --distribution-id EXXXXX --paths "/*"`
- [ ] Configure CloudFront with **staging.medalfoundation.org**
- [ ] Create Route 53 A record: staging.medalfoundation.org → CloudFront
- [ ] Test at **https://staging.medalfoundation.org**

### Phase 4: CI/CD Pipeline Setup
**Duration**: 20 minutes
**Tasks**:
- [ ] **Inspect** Far Too Young pipeline configuration (READ-ONLY, no modifications)
- [ ] **Create NEW** CodePipeline for Medal Foundation (separate from Far Too Young)
- [ ] **Configure NEW** CodeBuild project with buildspec.yml
- [ ] **Set up NEW** GitHub integration for Medal Foundation repository
- [ ] **Test automated** pipeline deployment

**⚠️ IMPORTANT**: Far Too Young production resources will NOT be touched, modified, or cloned. Only used as read-only reference for configuration patterns.

### Phase 5: Production Cutover
**Duration**: 1 day
**Tasks**:
- [ ] Create ACM SSL certificate for medalfoundation.org + www.medalfoundation.org
- [ ] Update CloudFront distribution with custom domains
- [ ] Change Route 53 A records from EC2 IP (3.95.215.216) to CloudFront ALIAS
- [ ] Monitor traffic and performance (TTL is 300 seconds = 5 min propagation)
- [ ] Validate all functionality in production
- [ ] Keep EC2 running for 24-48 hours as safety net
- [ ] Decommission EC2 instance after validation

## Technical Specifications

### S3 Configuration
```json
{
  "BucketName": "medalfoundation-frontend-production",
  "WebsiteConfiguration": {
    "IndexDocument": "index.html",
    "ErrorDocument": "index.html"
  },
  "PublicAccessBlock": {
    "BlockPublicAcls": false,
    "IgnorePublicAcls": false,
    "BlockPublicPolicy": false,
    "RestrictPublicBuckets": false
  },
  "Versioning": "Enabled"
}
```

### SSL Certificate Configuration (ACM)
```json
{
  "DomainName": "medalfoundation.org",
  "SubjectAlternativeNames": [
    "medalfoundation.org",
    "*.medalfoundation.org"
  ],
  "ValidationMethod": "DNS",
  "KeyAlgorithm": "RSA-2048",
  "Type": "AMAZON_ISSUED"
}
```
**Note**: Wildcard certificate (*.medalfoundation.org) covers www, staging, and any future subdomains, following Far Too Young pattern.

### CloudFront Configuration
```json
{
  "Aliases": [
    "medalfoundation.org",
    "www.medalfoundation.org"
  ],
  "ViewerCertificate": {
    "ACMCertificateArn": "arn:aws:acm:us-east-1:ACCOUNT:certificate/CERT-ID",
    "SSLSupportMethod": "sni-only",
    "MinimumProtocolVersion": "TLSv1.2_2021"
  },
  "Origins": [{
    "DomainName": "medalfoundation-frontend-production.s3-website-us-east-1.amazonaws.com",
    "OriginPath": "",
    "CustomOriginConfig": {
      "HTTPPort": 80,
      "OriginProtocolPolicy": "http-only"
    }
  }],
  "DefaultCacheBehavior": {
    "ViewerProtocolPolicy": "redirect-to-https",
    "Compress": true,
    "DefaultTTL": 86400
  },
  "CustomErrorResponses": [
    {
      "ErrorCode": 403,
      "ResponseCode": 200,
      "ResponsePagePath": "/index.html"
    },
    {
      "ErrorCode": 404,
      "ResponseCode": 200,
      "ResponsePagePath": "/index.html"
    }
  ]
}
```

### CodePipeline Stages
```yaml
Stages:
  1. Source:
     - Provider: GitHub
     - Repository: medalfoundation
     - Branch: main
     - Trigger: Push to main

  2. Build:
     - Provider: CodeBuild
     - BuildSpec: |
       version: 0.2
       phases:
         install:
           runtime-versions:
             nodejs: 18
         pre_build:
           commands:
             - npm install
         build:
           commands:
             - npm run build
       artifacts:
         files:
           - '**/*'
         base-directory: dist

  3. Deploy:
     - Provider: S3
     - Bucket: medalfoundation-frontend-production
     - Extract: true
     - Post-Deploy: CloudFront invalidation
```

## Cost Analysis

### Current Costs (EC2)
- EC2 Instance: $20-50/month
- EBS Storage: $5-10/month
- **Total**: $25-60/month

### Projected Costs (S3 + CloudFront)
- S3 Storage (1GB): $0.023/month
- S3 Requests (10K): $0.004/month
- CloudFront Transfer (10GB): $0.85/month
- CodePipeline: $1/month
- **Total**: ~$2-5/month

### **Cost Savings**: 80-90% reduction

## Risk Assessment & Mitigation

### **Production Safety**
**⚠️ CRITICAL**: Far Too Young production resources are OFF-LIMITS
- **No modifications** to existing Far Too Young infrastructure
- **No cloning** of Far Too Young pipelines or resources  
- **Read-only inspection** only for configuration reference
- **Completely separate** Medal Foundation resources will be created

### Risks
1. **DNS Cutover Downtime**
   - *Mitigation*: Test thoroughly with CloudFront URL first
   - *Rollback*: Keep EC2 running during initial cutover

2. **React Routing Issues**
   - *Mitigation*: Configure proper error pages in CloudFront
   - *Testing*: Validate all routes work with direct URLs

3. **Performance Degradation**
   - *Mitigation*: CloudFront should improve performance
   - *Monitoring*: Set up CloudWatch alarms

4. **Build Pipeline Failures**
   - *Mitigation*: Test pipeline thoroughly before cutover
   - *Rollback*: Manual deployment capability as backup

## Success Metrics

### Performance
- [ ] Page load time < 2 seconds (improved from EC2)
- [ ] 99.9% uptime via CloudFront
- [ ] Global CDN performance

### Cost
- [ ] 80%+ cost reduction achieved
- [ ] Monthly costs under $5

### Operational
- [ ] Automated deployments working
- [ ] Zero-downtime deployments
- [ ] Easy rollback capability

## Timeline

**Total Duration**: 1.5-2 hours

```
Session 1 (1.5-2 hours):
├── Phase 1: Repository setup (15 mins)
├── Phase 2: AWS infrastructure (30 mins) 
├── Phase 3: Manual deployment & testing (20 mins)
├── Phase 4: CI/CD pipeline setup (20 mins)
└── Phase 5: DNS cutover (10 mins)

Follow-up (24-48 hours later):
└── Phase 6: Decommission EC2 (10 mins)
```

**Why Manual First?**
- Validate infrastructure before automating
- Faster troubleshooting without pipeline complexity
- Test staging.medalfoundation.org immediately
- Add CI/CD after infrastructure is proven

## Decision Points for Discussion

### 1. Staging Environment
**Question**: Do we need AWS staging resources or is local + git staging sufficient?
**Recommendation**: Git staging only (cost-effective for static sites)

### 2. Custom Domain
**Question**: Keep medalfoundation.org or use CloudFront domain?
**Recommendation**: Keep custom domain for branding

### 3. Deployment Trigger
**Question**: Deploy on every main commit or manual trigger?
**Recommendation**: Automatic on main branch (following Far Too Young pattern)

### 4. Rollback Strategy
**Question**: How to handle rollbacks?
**Recommendation**: S3 versioning + CloudFront cache invalidation

## Legacy Infrastructure Decommissioning

### Current Medal Foundation AWS Resources (To Be Decommissioned)

#### **EC2 Instance**: `i-0328c246493e1e32c`
- **Name**: MedalFoundation-Org-Prod
- **Type**: t2.micro (1 vCPU, 1GB RAM)
- **AMI**: ami-001e8cf5d26683279 (Bitnami WordPress)
- **Launch Date**: May 31, 2024
- **Public IP**: 3.95.215.216
- **Status**: Running

#### **EBS Volume**: `vol-08ca28bedff7c5020`
- **Name**: MedalFoundation-Prod-Vol
- **Size**: 20GB gp2
- **Encrypted**: No
- **Delete on Termination**: Yes (will auto-delete with EC2)

#### **Security Groups**:
1. **sg-03e14486cf6fd09d1** - `allow-public-internet-access-sg`
   - HTTP (80) from 0.0.0.0/0
   - HTTPS (443) from 0.0.0.0/0
   
2. **sg-094a371b644804395** - `allow-ssh-sg`
   - SSH (22) from 0.0.0.0/0

#### **Key Pair**: `MedalFoundation-Org-KeyPem`
- **Type**: RSA
- **Created**: April 22, 2024

#### **Network Resources**:
- **VPC**: vpc-0d23a40322852525d (Default VPC)
- **Subnet**: subnet-02364d9372446bf5b
- **ENI**: eni-031cd8fc7736929cb

### Decommissioning Checklist

#### **Phase 6: Legacy Infrastructure Cleanup**
**Duration**: 1 day (after successful migration validation)
**Prerequisites**: New S3+CloudFront setup validated and running for 48+ hours

**Tasks**:
- [ ] **Backup Verification**: Ensure all website data is successfully migrated to new React app
- [ ] **DNS Confirmation**: Verify medalfoundation.org is pointing to CloudFront and working
- [ ] **Performance Validation**: Confirm new site performance meets requirements
- [ ] **Stop EC2 Instance**: `i-0328c246493e1e32c` (reversible step)
- [ ] **Monitor for 24 hours**: Ensure no issues with stopped instance
- [ ] **Terminate EC2 Instance**: Permanent deletion (EBS volume auto-deletes)
- [ ] **Delete Security Groups**: 
  - `sg-03e14486cf6fd09d1` (allow-public-internet-access-sg)
  - `sg-094a371b644804395` (allow-ssh-sg)
- [ ] **Delete Key Pair**: `MedalFoundation-Org-KeyPem` (if not used elsewhere)
- [ ] **Update Documentation**: Record decommissioning completion

#### **Cost Savings Calculation**:
```
Legacy Infrastructure Monthly Costs:
├── EC2 t2.micro: ~$8.50/month
├── EBS 20GB gp2: ~$2.00/month  
├── Data Transfer: ~$1-5/month
└── Total: ~$11.50-15.50/month

New Infrastructure Monthly Costs:
├── S3 Storage (1GB): ~$0.02/month
├── S3 Requests: ~$0.01/month
├── CloudFront: ~$0.50-2.00/month
├── CodePipeline: $1.00/month
└── Total: ~$1.53-3.03/month

Monthly Savings: $8-12/month (80-85% reduction)
Annual Savings: $96-144/year
```

#### **Rollback Plan** (Emergency Only):
If critical issues arise with new infrastructure:
1. **Immediate**: Update Route 53 A records back to 3.95.215.216
2. **Start EC2**: If stopped (not terminated)
3. **Restore from backup**: If terminated (would need new instance + data restore)

#### **Security Considerations**:
- Security groups are Medal Foundation specific - safe to delete
- Key pair should be deleted unless used for other instances
- No shared resources with other projects identified

### Resources That Will Remain
- **Route 53 Hosted Zone**: Z08444142AKVOKSV9RJW9 (medalfoundation.org) - **KEEP**
- **S3 Bucket**: medalfoundation-org (current legacy bucket) - **EVALUATE FOR DELETION**

## Next Steps

1. **Review and approve this plan**
2. **Decide on staging environment approach**
3. **Begin Phase 1: Repository preparation**
4. **Set up AWS infrastructure in parallel**

---

**Document Version**: 1.0  
**Last Updated**: December 14, 2025  
**Author**: CI/CD Migration Team  
**Status**: Draft - Pending Review
