# Medal Foundation - Official Website

A minimal, modern static website for Medal Foundation built with React and Tailwind CSS.

## Features

- **Minimal Design**: Clean, modern interface inspired by industry leaders
- **Responsive**: Mobile-first approach with Tailwind CSS
- **Performance**: Optimized static site with Vite
- **Neutral Theme**: Professional color palette with subtle animations

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS with Inter font
- **Deployment**: AWS S3 + CloudFront (planned)

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Project Structure

```
medalfoundation/
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Hero.jsx         # Hero section
│   │   ├── About.jsx        # About/mission section
│   │   └── Footer.jsx       # Site footer
│   ├── App.jsx              # Main app component
│   └── index.css            # Tailwind styles
├── docs/
│   ├── 1-planning/          # Project planning documents
│   ├── 2-system-design/     # Architecture documentation
│   ├── 3-deployments/       # Deployment guides
│   └── 4-testing/           # Testing documentation
├── deployment/
│   ├── staging/             # Staging deployment scripts
│   └── production/          # Production deployment scripts
└── README.md
```

## Design Philosophy

- **Minimal**: Clean, uncluttered interface
- **Modern**: Contemporary design patterns
- **Neutral**: Professional color palette
- **Accessible**: WCAG compliant design
- **Fast**: Optimized for performance

## Future Deployment

This project is designed to be deployed as a static site on AWS:
- **S3**: Static website hosting
- **CloudFront**: Global CDN distribution
- **Route 53**: Custom domain management
- **Certificate Manager**: SSL/TLS certificates

## Development

The site uses a component-based architecture with:
- Reusable UI components
- Tailwind CSS for styling
- Inter font for typography
- Subtle animations and transitions

## CI/CD

Automated deployment via AWS CodePipeline:
- Push to `main` → Auto-deploy to production
- Manual staging deployment for testing
- CodePipeline: `medalfoundation-production-pipeline`
- CodeBuild: `medalfoundation-frontend-production`
- GitHub webhook configured ✅

## License

This project is licensed under the MIT License.
