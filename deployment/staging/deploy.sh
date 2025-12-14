#!/bin/bash

# Medal Foundation - Staging Deployment Script
echo "🚀 Starting Medal Foundation deployment to staging..."

# Build the project
echo "📦 Building production bundle..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build completed successfully!"

# Check if dist directory exists
if [ ! -d "dist" ]; then
    echo "❌ dist directory not found!"
    exit 1
fi

echo "📁 Build artifacts ready in dist/ directory"
echo "🎉 Deployment preparation complete!"
echo ""
echo "Next steps:"
echo "1. Upload dist/ contents to your hosting service"
echo "2. Configure web server to serve index.html for all routes"
echo "3. Verify deployment at your staging URL"

# If AWS CLI is available and S3 bucket is configured, uncomment below:
# echo "🌐 Uploading to S3..."
# aws s3 sync dist/ s3://your-staging-bucket --delete
# echo "🔄 Invalidating CloudFront cache..."
# aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"