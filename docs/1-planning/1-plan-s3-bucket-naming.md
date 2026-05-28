# Plan: S3 Bucket Naming Standardization

## Priority: Low
## Status: Backlog
## Estimated Effort: 30 min

---

## Why

Current S3 bucket names use inconsistent naming:
- Buckets: `medalfoundation-frontend-staging` (project-purpose-env)
- Pipelines: `medalfoundation-stg-frontend` (project-env-purpose)

Standardizing to `{project}-{env}-{purpose}` makes it easier to find and group resources.

---

## Current → Target

| Current Name | Target Name |
|-------------|-------------|
| `medalfoundation-frontend-staging` | `medalfoundation-stg-frontend` |
| `medalfoundation-frontend-production` | `medalfoundation-prod-frontend` |
| `medalfoundation-stg-frontend-artifacts` | ✅ Already correct |
| `medalfoundation-prod-frontend-artifacts` | ✅ Already correct |

---

## Steps (per bucket)

1. Create new bucket with target name
2. Copy all content from old → new (`aws s3 sync`)
3. Update references:
   - CloudFront origin
   - Pipeline template (buildspec S3 sync target)
   - Manual deploy scripts
4. Verify site still works
5. Delete old bucket

---

## Risk

- Low — frontend-only project, simpler than fartooyoung
- Do one bucket at a time, verify between each

---

## When to Do This

- Same session as fartooyoung bucket rename
- Not urgent — everything works, this is cosmetic consistency

---

*Created: May 27, 2026*
