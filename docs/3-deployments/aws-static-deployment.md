# AWS Static Website Deployment Guide

## Overview
Step-by-step guide to deploy Medal Foundation website to AWS as a static site.

## Prerequisites
- AWS CLI configured
- Domain name (optional)
- Production build ready

## Deployment Steps

### Step 1: Create S3 Bucket
```bash
# Create bucket for static website
aws s3 mb s3://medalfoundation-website --region us-east-1

# Enable static website hosting
aws s3 website s3://medalfoundation-website \
  --index-document index.html \
  --error-document index.html
```

### Step 2: Configure Bucket Policy
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::medalfoundation-website/*"
    }
  ]
}
```

### Step 3: Build and Upload
```bash
# Build production bundle
npm run build

# Upload to S3
aws s3 sync dist/ s3://medalfoundation-website --delete

# Verify upload
aws s3 ls s3://medalfoundation-website
```

### Step 4: Create CloudFront Distribution
```bash
# Create distribution (via AWS Console or CLI)
aws cloudfront create-distribution \
  --distribution-config file://cloudfront-config.json
```

### Step 5: Configure Custom Domain (Optional)
```bash
# Create SSL certificate
aws acm request-certificate \
  --domain-name medalfoundation.org \
  --subject-alternative-names www.medalfoundation.org \
  --validation-method DNS

# Update Route 53 records
aws route53 change-resource-record-sets \
  --hosted-zone-id YOUR_ZONE_ID \
  --change-batch file://dns-changes.json
```

## Automation Scripts

### Deploy Script
```bash
#!/bin/bash
# deployment/production/deploy.sh

echo "Building production bundle..."
npm run build

echo "Uploading to S3..."
aws s3 sync dist/ s3://medalfoundation-website --delete

echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"

echo "Deployment complete!"
```

### Environment Variables
```bash
# .env.production
VITE_APP_ENV=production
VITE_API_URL=https://api.medalfoundation.org
```

## Cost Estimation

### Monthly Costs (Typical Traffic)
- **S3 Storage**: $0.50 (20GB)
- **S3 Requests**: $0.10 (100K requests)
- **CloudFront**: $1.00 (100GB transfer)
- **Route 53**: $0.50 (hosted zone)
- **Certificate**: $0.00 (free)

**Total**: ~$2.10/month

### High Traffic Scaling
- CloudFront handles millions of requests
- S3 scales automatically
- Pay-per-use pricing model
- No server maintenance

## Security Configuration

### S3 Bucket Security
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Deny",
      "Principal": "*",
      "Action": "s3:*",
      "Resource": [
        "arn:aws:s3:::medalfoundation-website",
        "arn:aws:s3:::medalfoundation-website/*"
      ],
      "Condition": {
        "Bool": {
          "aws:SecureTransport": "false"
        }
      }
    }
  ]
}
```

### CloudFront Security Headers
```javascript
// Lambda@Edge function for security headers
exports.handler = (event, context, callback) => {
  const response = event.Records[0].cf.response;
  const headers = response.headers;

  headers['strict-transport-security'] = [{
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubdomains; preload'
  }];

  headers['x-content-type-options'] = [{
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }];

  headers['x-frame-options'] = [{
    key: 'X-Frame-Options',
    value: 'DENY'
  }];

  callback(null, response);
};
```

## Monitoring and Analytics

### CloudWatch Metrics
- S3 bucket metrics
- CloudFront performance
- Error rates and status codes
- Geographic distribution

### Google Analytics (Optional)
```html
<!-- Add to index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Troubleshooting

### Common Issues
1. **404 Errors**: Ensure error document is set to index.html
2. **Cache Issues**: Invalidate CloudFront distribution
3. **SSL Problems**: Verify certificate validation
4. **DNS Issues**: Check Route 53 configuration

### Useful Commands
```bash
# Check S3 website endpoint
aws s3api get-bucket-website --bucket medalfoundation-website

# List CloudFront distributions
aws cloudfront list-distributions

# Check certificate status
aws acm list-certificates --region us-east-1
```

---

*Last Updated: December 11, 2025*  
*Status: Ready for AWS deployment*
