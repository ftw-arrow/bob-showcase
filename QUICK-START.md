# 🚀 Bob Showcase - ULTRA QUICK START

**Time to Deploy: 10 minutes**

## Prerequisites ✅
- Azure CLI installed and logged in
- GitHub account
- Git installed

## Deploy in 3 Commands

### 1. Create GitHub Repository (2 minutes)
```bash
# Go to: https://github.com/new
# Name: bob-showcase
# Description: Bob AI Assistant Showcase Site
# Public, NO README
# Click "Create repository"
```

### 2. Run Deployment Script (5 minutes)
```bash
cd 01-Programs/bob-showcase
./DEPLOY-NOW.sh
```

The script will:
- ✅ Initialize Git
- ✅ Commit all files
- ✅ Push to GitHub
- ✅ Create Azure Static Web App
- ✅ Configure GitHub Actions
- ✅ Set up custom domain

### 3. Configure DNS (3 minutes)
```bash
# Go to: https://dcc.godaddy.com/manage/rcoace.com/dns
# Add the CNAME and TXT records shown by the script
```

## That's It! 🎉

Your site will be live at:
- **Default**: `https://[your-app].azurestaticapps.net` (immediate)
- **Custom**: `https://bob.rcoace.com` (after DNS propagation, 10-60 min)

## Monitor Deployment

```bash
# Check GitHub Actions
# https://github.com/YOUR_USERNAME/bob-showcase/actions

# Check Azure deployment
az staticwebapp show -n bob-showcase -g rg-bob-showcase
```

## Files Created

```
bob-showcase/
├── src/
│   ├── index.html          ✅ Beautiful landing page
│   ├── css/main.css        ✅ Modern styling
│   ├── js/main.js          ✅ Smooth interactions
│   └── demos/
│       └── infrastructure-automation.html  ✅ Demo page
├── staticwebapp.config.json  ✅ Azure config
├── .gitignore               ✅ Git exclusions
├── README.md                ✅ Documentation
├── DEPLOY-NOW.sh            ✅ Deployment script
└── BOB-SHOWCASE-IMPLEMENTATION-GUIDE.md  ✅ Full guide
```

## Troubleshooting

**Script fails?**
```bash
# Check Azure login
az account show

# Check Git
git --version

# Re-run script
./DEPLOY-NOW.sh
```

**DNS not working?**
- Wait 10-60 minutes for propagation
- Verify records: `dig bob.rcoace.com CNAME`
- Check Azure portal for validation status

**Need help?**
See `BOB-SHOWCASE-IMPLEMENTATION-GUIDE.md` for detailed instructions.

---

**Current Time**: You have ~30 minutes before your Uber! 🚗

**Recommendation**: 
1. Run `./DEPLOY-NOW.sh` now (5 min)
2. Configure DNS records (3 min)
3. Site will continue deploying while you're at the airport ✈️
4. Check from your phone when DNS propagates!