# Medal Foundation - Official Website

A minimal, modern static website for Medal Foundation built with React and Tailwind CSS. Live at [www.medalfoundation.org](https://www.medalfoundation.org).

## Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, React Router
- **Hosting**: AWS S3 + CloudFront CDN
- **DNS**: Route 53
- **SSL**: ACM Certificate
- **CI/CD**: CodePipeline V2 (instant webhook, path-based triggers)

## Features

- Minimal, modern design with neutral color palette
- Mobile-responsive with Tailwind CSS
- Multi-page with React Router (Home, About, Programs, Contact, etc.)
- Optimized static site with Vite

## Project Structure

```
medalfoundation/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── assets/         # Images and static assets
│   ├── App.jsx         # Main app with routing
│   └── index.css       # Tailwind styles
├── public/             # Static public assets
├── deployment/
│   └── prod-frontend-pipeline.yml  # V2 pipeline template
├── docs/               # Documentation
└── README.md
```

## Quick Start

```bash
npm install
npm run dev
```

## Deployment

- **Production**: Auto-deploys via V2 pipeline on push to `main` branch
- **Path-based triggers**: Only deploys when `src/`, `public/`, `package.json`, `vite.config.js`, or `index.html` change
- **Instant**: CodeStar webhook triggers immediately (no polling)

Changes to `docs/`, `deployment/`, or `README.md` do **not** trigger a deploy.

> ⚠️ Pushing to `main` immediately deploys to the live site.

### Manual Deploy (Emergency)

```bash
npm run build
aws s3 sync dist/ s3://medalfoundation-frontend-production --delete
aws cloudfront create-invalidation --distribution-id E3QDO1V24F450J --paths "/*"
```

## AWS Resources

| Resource | Value |
|----------|-------|
| S3 Bucket | `medalfoundation-frontend-production` |
| CloudFront | `E3QDO1V24F450J` |
| Pipeline | `medalfoundation-prod-frontend` |
| CodeBuild | `medalfoundation-prod-frontend-build` |
| Domain | `www.medalfoundation.org` + `medalfoundation.org` |

## License

This project is licensed under the MIT License.
