#!/bin/bash
# Quick deployment script for bob.rcoace.com
# Run this after creating GitHub repo

set -e

echo "🚀 Bob Showcase Site - Quick Deploy"
echo "===================================="
echo ""

# Variables
REPO_NAME="bob-showcase"
RESOURCE_GROUP="rg-bob-showcase"
APP_NAME="bob-showcase"
LOCATION="eastus2"

# Check if we're in the right directory
if [ ! -f "staticwebapp.config.json" ]; then
    echo "❌ Error: Run this script from the bob-showcase directory"
    exit 1
fi

# Check Azure CLI
if ! command -v az &> /dev/null; then
    echo "❌ Error: Azure CLI not installed"
    echo "Install: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"
    exit 1
fi

# Check if logged in to Azure
echo "Checking Azure login..."
if ! az account show &> /dev/null; then
    echo "Logging in to Azure..."
    az login
fi

echo ""
echo "📦 Step 1: Initialize Git Repository"
echo "------------------------------------"
if [ ! -d ".git" ]; then
    git init
    echo "✓ Git initialized"
else
    echo "✓ Git already initialized"
fi

echo ""
echo "📝 Step 2: Create Initial Commit"
echo "--------------------------------"
git add .
git commit -m "Initial commit: Bob showcase site" || echo "✓ Already committed"

echo ""
echo "🔗 Step 3: Link to GitHub"
echo "------------------------"
read -p "Enter your GitHub username: " GITHUB_USER
GITHUB_REPO="https://github.com/$GITHUB_USER/$REPO_NAME.git"

if ! git remote get-url origin &> /dev/null; then
    git remote add origin $GITHUB_REPO
    echo "✓ Remote added: $GITHUB_REPO"
else
    echo "✓ Remote already configured"
fi

echo ""
echo "⚠️  IMPORTANT: Create GitHub repository first!"
echo "   1. Go to: https://github.com/new"
echo "   2. Repository name: $REPO_NAME"
echo "   3. Description: Bob AI Assistant Showcase Site"
echo "   4. Public repository"
echo "   5. Do NOT initialize with README"
echo ""
read -p "Press Enter when repository is created..."

echo ""
echo "📤 Step 4: Push to GitHub"
echo "------------------------"
git branch -M main
git push -u origin main
echo "✓ Code pushed to GitHub"

echo ""
echo "☁️  Step 5: Create Azure Resources"
echo "----------------------------------"

# Create resource group
echo "Creating resource group..."
az group create \
    --name $RESOURCE_GROUP \
    --location $LOCATION \
    --output none
echo "✓ Resource group created: $RESOURCE_GROUP"

# Create Static Web App
echo ""
echo "Creating Azure Static Web App..."
echo "This will:"
echo "  - Create the Static Web App"
echo "  - Configure GitHub Actions"
echo "  - Set up automatic deployment"
echo ""

az staticwebapp create \
    --name $APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --source $GITHUB_REPO \
    --location $LOCATION \
    --branch main \
    --app-location "/src" \
    --login-with-github

echo ""
echo "✓ Static Web App created!"

# Get the default hostname
DEFAULT_HOSTNAME=$(az staticwebapp show \
    --name $APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --query "defaultHostname" \
    --output tsv)

echo ""
echo "🌐 Step 6: Configure Custom Domain"
echo "----------------------------------"
echo "Default URL: https://$DEFAULT_HOSTNAME"
echo ""
echo "To add custom domain bob.rcoace.com:"
echo ""
echo "1. Add custom domain in Azure:"
az staticwebapp hostname set \
    --name $APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --hostname bob.rcoace.com

# Get validation token
VALIDATION_TOKEN=$(az staticwebapp hostname show \
    --name $APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --hostname bob.rcoace.com \
    --query "validationToken" \
    --output tsv)

echo ""
echo "2. Add DNS records in GoDaddy:"
echo "   Type: CNAME"
echo "   Name: bob"
echo "   Value: $DEFAULT_HOSTNAME"
echo "   TTL: 600"
echo ""
echo "   Type: TXT"
echo "   Name: _dnsauth.bob"
echo "   Value: $VALIDATION_TOKEN"
echo "   TTL: 600"
echo ""

echo "✅ DEPLOYMENT COMPLETE!"
echo "======================"
echo ""
echo "📍 Your site is deploying to:"
echo "   Default: https://$DEFAULT_HOSTNAME"
echo "   Custom:  https://bob.rcoace.com (after DNS)"
echo ""
echo "⏱️  GitHub Actions is building your site now"
echo "   Check: https://github.com/$GITHUB_USER/$REPO_NAME/actions"
echo ""
echo "🔍 Monitor deployment:"
echo "   az staticwebapp show -n $APP_NAME -g $RESOURCE_GROUP"
echo ""
echo "📝 Next steps:"
echo "   1. Wait for DNS propagation (10-60 minutes)"
echo "   2. Verify site at https://$DEFAULT_HOSTNAME"
echo "   3. Test custom domain https://bob.rcoace.com"
echo ""

# Made with Bob
