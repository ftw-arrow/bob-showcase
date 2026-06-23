# Bob Showcase Site Implementation Guide
## bob.rcoace.com

**Status**: Ready to Begin  
**Current Phase**: Planning  
**Target Launch**: TBD

---

## 🎯 Project Overview

Create a dedicated showcase website for Bob (AI Assistant) at **bob.rcoace.com** featuring:
- Beautiful landing page with Bob branding
- Demo gallery with live examples
- Infrastructure automation showcase
- Technical documentation hub
- Responsive, modern design

---

## 📋 Prerequisites

### Required Access
- [x] GitHub account with repo creation rights
- [ ] Azure subscription with Static Web Apps access
- [ ] GoDaddy DNS management for rcoace.com
- [ ] Azure CLI installed locally

### Required Tools
```bash
# Verify installations
az --version                    # Azure CLI
git --version                   # Git
node --version                  # Node.js (for local dev)
```

---

## 🚀 Phase 1: Repository Setup

### Step 1.1: Create GitHub Repository

```bash
# Create new repository on GitHub
# Repository name: bob-showcase
# Description: Bob AI Assistant Showcase Site
# Visibility: Public
# Initialize with: README, .gitignore (Node)
```

**GitHub Repository Settings:**
- Name: `bob-showcase`
- Description: "Bob AI Assistant Showcase - Demonstrating infrastructure automation and AI capabilities"
- Topics: `ai`, `automation`, `azure`, `static-web-app`, `showcase`
- License: MIT

### Step 1.2: Clone and Initialize Locally

```bash
# Clone repository
cd ~/Projects
git clone https://github.com/YOUR_USERNAME/bob-showcase.git
cd bob-showcase

# Create initial structure
mkdir -p src/{css,js,images,demos}
mkdir -p docs
mkdir -p .github/workflows
```

### Step 1.3: Create Initial File Structure

```
bob-showcase/
├── .github/
│   └── workflows/
│       └── azure-static-web-apps.yml
├── src/
│   ├── index.html
│   ├── css/
│   │   ├── main.css
│   │   └── demos.css
│   ├── js/
│   │   └── main.js
│   ├── images/
│   │   └── bob-logo.svg
│   └── demos/
│       ├── infrastructure-automation.html
│       └── infographic.html
├── docs/
│   └── README.md
├── staticwebapp.config.json
├── package.json
└── README.md
```

---

## 🔷 Phase 2: Azure Static Web App Setup

### Step 2.1: Create Azure Resource

```bash
# Login to Azure
az login

# Set variables
RESOURCE_GROUP="rg-bob-showcase"
LOCATION="eastus2"
APP_NAME="bob-showcase"
GITHUB_REPO="YOUR_USERNAME/bob-showcase"

# Create resource group
az group create \
  --name $RESOURCE_GROUP \
  --location $LOCATION

# Create Static Web App
az staticwebapp create \
  --name $APP_NAME \
  --resource-group $RESOURCE_GROUP \
  --source $GITHUB_REPO \
  --location $LOCATION \
  --branch main \
  --app-location "/src" \
  --login-with-github
```

### Step 2.2: Configure Custom Domain

```bash
# Add custom domain
az staticwebapp hostname set \
  --name $APP_NAME \
  --resource-group $RESOURCE_GROUP \
  --hostname bob.rcoace.com

# Get validation token
az staticwebapp hostname show \
  --name $APP_NAME \
  --resource-group $RESOURCE_GROUP \
  --hostname bob.rcoace.com
```

**Note**: Save the validation token for DNS configuration.

### Step 2.3: GitHub Actions Configuration

The Azure CLI will automatically create `.github/workflows/azure-static-web-apps.yml`. Verify it contains:

```yaml
name: Azure Static Web Apps CI/CD

on:
  push:
    branches:
      - main
  pull_request:
    types: [opened, synchronize, reopened, closed]
    branches:
      - main

jobs:
  build_and_deploy_job:
    if: github.event_name == 'push' || (github.event_name == 'pull_request' && github.event.action != 'closed')
    runs-on: ubuntu-latest
    name: Build and Deploy Job
    steps:
      - uses: actions/checkout@v3
        with:
          submodules: true
      - name: Build And Deploy
        id: builddeploy
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          action: "upload"
          app_location: "/src"
          api_location: ""
          output_location: ""
```

---

## 🎨 Phase 3: Site Development

### Step 3.1: Create Landing Page (index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Bob - AI-Powered Infrastructure Automation Assistant">
    <title>Bob | AI Infrastructure Assistant</title>
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
    <header>
        <nav>
            <div class="logo">
                <img src="images/bob-logo.svg" alt="Bob Logo">
                <h1>Bob</h1>
            </div>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#demos">Demos</a></li>
                <li><a href="#capabilities">Capabilities</a></li>
                <li><a href="#docs">Documentation</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="hero">
            <h1>Meet Bob</h1>
            <p class="tagline">Your AI-Powered Infrastructure Automation Assistant</p>
            <p class="description">
                Bob transforms complex infrastructure tasks into simple conversations,
                automating deployments, managing secrets, and orchestrating cloud resources
                with enterprise-grade security.
            </p>
            <div class="cta-buttons">
                <a href="#demos" class="btn btn-primary">View Demos</a>
                <a href="#docs" class="btn btn-secondary">Documentation</a>
            </div>
        </section>

        <section id="demos" class="demos">
            <h2>Live Demonstrations</h2>
            <div class="demo-grid">
                <div class="demo-card">
                    <h3>Infrastructure Automation</h3>
                    <p>Complete Azure infrastructure deployment with automated DNS, networking, and security configuration.</p>
                    <a href="demos/infrastructure-automation.html" class="btn">View Demo</a>
                </div>
                <div class="demo-card">
                    <h3>Visual Infographic</h3>
                    <p>Interactive one-page infographic showcasing Bob's capabilities and architecture.</p>
                    <a href="demos/infographic.html" class="btn">View Demo</a>
                </div>
                <div class="demo-card coming-soon">
                    <h3>Secrets Management</h3>
                    <p>HashiCorp Vault integration with automated secret rotation and access control.</p>
                    <span class="badge">Coming Soon</span>
                </div>
                <div class="demo-card coming-soon">
                    <h3>Multi-Cloud Orchestration</h3>
                    <p>Seamless deployment across Azure, AWS, and GCP with unified management.</p>
                    <span class="badge">Coming Soon</span>
                </div>
            </div>
        </section>

        <section id="capabilities" class="capabilities">
            <h2>Core Capabilities</h2>
            <div class="capability-grid">
                <div class="capability">
                    <div class="icon">🚀</div>
                    <h3>Automated Deployment</h3>
                    <p>Deploy complete infrastructure stacks with a single command</p>
                </div>
                <div class="capability">
                    <div class="icon">🔐</div>
                    <h3>Security First</h3>
                    <p>Enterprise-grade security with Vault integration and zero-trust architecture</p>
                </div>
                <div class="capability">
                    <div class="icon">☁️</div>
                    <h3>Multi-Cloud</h3>
                    <p>Unified management across Azure, AWS, and GCP</p>
                </div>
                <div class="capability">
                    <div class="icon">📊</div>
                    <h3>Observability</h3>
                    <p>Real-time monitoring, logging, and alerting</p>
                </div>
                <div class="capability">
                    <div class="icon">🔄</div>
                    <h3>GitOps Ready</h3>
                    <p>Infrastructure as Code with automated CI/CD pipelines</p>
                </div>
                <div class="capability">
                    <div class="icon">🤖</div>
                    <h3>AI-Powered</h3>
                    <p>Natural language interface for complex operations</p>
                </div>
            </div>
        </section>

        <section id="docs" class="documentation">
            <h2>Documentation</h2>
            <div class="doc-links">
                <a href="docs/getting-started.html" class="doc-card">
                    <h3>Getting Started</h3>
                    <p>Quick start guide and installation instructions</p>
                </a>
                <a href="docs/architecture.html" class="doc-card">
                    <h3>Architecture</h3>
                    <p>System design and technical architecture</p>
                </a>
                <a href="docs/api-reference.html" class="doc-card">
                    <h3>API Reference</h3>
                    <p>Complete API documentation and examples</p>
                </a>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 Bob AI Assistant | Built with ❤️ for Infrastructure Engineers</p>
        <div class="footer-links">
            <a href="https://github.com/YOUR_USERNAME/bob-showcase">GitHub</a>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
```

### Step 3.2: Create Stylesheet (css/main.css)

```css
/* Modern, clean design with Arrow Electronics branding inspiration */
:root {
    --primary-color: #0066cc;
    --secondary-color: #00a3e0;
    --accent-color: #ff6b35;
    --dark-bg: #1a1a2e;
    --light-bg: #f8f9fa;
    --text-dark: #2c3e50;
    --text-light: #ffffff;
    --border-radius: 8px;
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--text-dark);
    background: var(--light-bg);
}

/* Header & Navigation */
header {
    background: var(--dark-bg);
    color: var(--text-light);
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

nav {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
}

.logo {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.logo img {
    height: 40px;
}

nav ul {
    display: flex;
    list-style: none;
    gap: 2rem;
}

nav a {
    color: var(--text-light);
    text-decoration: none;
    transition: var(--transition);
}

nav a:hover {
    color: var(--secondary-color);
}

/* Hero Section */
.hero {
    max-width: 1200px;
    margin: 0 auto;
    padding: 6rem 2rem;
    text-align: center;
}

.hero h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.tagline {
    font-size: 1.5rem;
    color: var(--text-dark);
    margin-bottom: 1rem;
}

.description {
    font-size: 1.1rem;
    max-width: 800px;
    margin: 0 auto 2rem;
    color: #666;
}

.cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
}

.btn {
    padding: 1rem 2rem;
    border-radius: var(--border-radius);
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
    display: inline-block;
}

.btn-primary {
    background: var(--primary-color);
    color: var(--text-light);
}

.btn-primary:hover {
    background: var(--secondary-color);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,102,204,0.3);
}

.btn-secondary {
    background: transparent;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
}

.btn-secondary:hover {
    background: var(--primary-color);
    color: var(--text-light);
}

/* Sections */
section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem;
}

section h2 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    text-align: center;
    color: var(--text-dark);
}

/* Demo Grid */
.demo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.demo-card {
    background: white;
    padding: 2rem;
    border-radius: var(--border-radius);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: var(--transition);
    position: relative;
}

.demo-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.15);
}

.demo-card h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
}

.demo-card.coming-soon {
    opacity: 0.7;
}

.badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: var(--accent-color);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.8rem;
}

/* Capability Grid */
.capability-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.capability {
    text-align: center;
    padding: 2rem;
}

.capability .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.capability h3 {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
}

/* Documentation */
.doc-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.doc-card {
    background: white;
    padding: 2rem;
    border-radius: var(--border-radius);
    text-decoration: none;
    color: var(--text-dark);
    transition: var(--transition);
    border-left: 4px solid var(--primary-color);
}

.doc-card:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

/* Footer */
footer {
    background: var(--dark-bg);
    color: var(--text-light);
    text-align: center;
    padding: 2rem;
    margin-top: 4rem;
}

.footer-links {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 2rem;
}

.footer-links a {
    color: var(--text-light);
    text-decoration: none;
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero h1 {
        font-size: 2.5rem;
    }
    
    nav ul {
        flex-direction: column;
        gap: 1rem;
    }
    
    .cta-buttons {
        flex-direction: column;
    }
}
```

### Step 3.3: Create Static Web App Configuration

```json
{
  "routes": [
    {
      "route": "/demos/*",
      "allowedRoles": ["anonymous"]
    },
    {
      "route": "/docs/*",
      "allowedRoles": ["anonymous"]
    }
  ],
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/images/*.{png,jpg,gif,svg}", "/css/*", "/js/*"]
  },
  "responseOverrides": {
    "404": {
      "rewrite": "/index.html",
      "statusCode": 200
    }
  },
  "globalHeaders": {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "Content-Security-Policy": "default-src 'self' 'unsafe-inline' 'unsafe-eval' https:; img-src 'self' data: https:;"
  }
}
```

---

## 🌐 Phase 4: DNS Configuration

### Step 4.1: GoDaddy DNS Setup

**Login to GoDaddy DNS Management:**
1. Navigate to: https://dcc.godaddy.com/manage/rcoace.com/dns
2. Add new CNAME record:

```
Type: CNAME
Name: bob
Value: <azure-static-web-app-url>.azurestaticapps.net
TTL: 600 (10 minutes)
```

### Step 4.2: Add TXT Record for Validation

```
Type: TXT
Name: _dnsauth.bob
Value: <validation-token-from-azure>
TTL: 600
```

### Step 4.3: Verify DNS Propagation

```bash
# Check CNAME record
dig bob.rcoace.com CNAME

# Check TXT record
dig _dnsauth.bob.rcoace.com TXT

# Test resolution
curl -I https://bob.rcoace.com
```

---

## 🔗 Phase 5: Content Integration

### Step 5.1: Link Existing Infographic

Create `src/demos/infographic.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bob Infographic | Infrastructure Automation</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }
        iframe {
            width: 100%;
            height: 100vh;
            border: none;
        }
        .back-link {
            display: inline-block;
            margin-bottom: 1rem;
            color: #0066cc;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <a href="/" class="back-link">← Back to Home</a>
        <h1>Infrastructure Automation Infographic</h1>
        <iframe src="https://infra.rcoace.com" title="Bob Infrastructure Automation"></iframe>
    </div>
</body>
</html>
```

### Step 5.2: Create Infrastructure Demo Page

Create `src/demos/infrastructure-automation.html` with detailed walkthrough of the mike-jump-host deployment.

---

## ✅ Phase 6: Launch Checklist

### Pre-Launch Testing
- [ ] Test all links and navigation
- [ ] Verify responsive design on mobile/tablet/desktop
- [ ] Check page load performance (< 3 seconds)
- [ ] Validate HTML/CSS
- [ ] Test cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] Verify SSL certificate is active
- [ ] Test all demo links

### Performance Optimization
- [ ] Optimize images (WebP format, lazy loading)
- [ ] Minify CSS and JavaScript
- [ ] Enable CDN caching
- [ ] Add meta tags for SEO
- [ ] Configure robots.txt and sitemap.xml

### SEO Configuration
```html
<!-- Add to <head> -->
<meta name="description" content="Bob - AI-powered infrastructure automation assistant. Automate deployments, manage secrets, and orchestrate cloud resources.">
<meta name="keywords" content="AI, automation, infrastructure, DevOps, Azure, cloud">
<meta property="og:title" content="Bob | AI Infrastructure Assistant">
<meta property="og:description" content="Transform complex infrastructure tasks into simple conversations">
<meta property="og:image" content="https://bob.rcoace.com/images/og-image.png">
<meta property="og:url" content="https://bob.rcoace.com">
<meta name="twitter:card" content="summary_large_image">
```

### Launch Announcement
- [ ] Update main rcoace.com site with link to bob.rcoace.com
- [ ] Share on internal channels
- [ ] Create demo video walkthrough
- [ ] Document in project README

---

## 📊 Success Metrics

Track these metrics post-launch:
- Page load time < 3 seconds
- Mobile responsiveness score > 95
- Lighthouse performance score > 90
- Zero broken links
- SSL/TLS A+ rating

---

## 🔧 Maintenance

### Regular Updates
- Weekly: Check for broken links
- Monthly: Update demo content
- Quarterly: Review and optimize performance
- As needed: Add new demos and capabilities

### Monitoring
```bash
# Set up Azure Application Insights
az monitor app-insights component create \
  --app bob-showcase-insights \
  --location eastus2 \
  --resource-group $RESOURCE_GROUP \
  --application-type web
```

---

## 📚 Additional Resources

- [Azure Static Web Apps Documentation](https://docs.microsoft.com/en-us/azure/static-web-apps/)
- [GitHub Actions for Azure](https://github.com/Azure/actions)
- [GoDaddy DNS Management](https://www.godaddy.com/help/manage-dns-680)
- [Web Performance Best Practices](https://web.dev/performance/)

---

## 🎉 Next Steps

1. **Create GitHub Repository** - Start with Phase 1
2. **Set up Azure Resources** - Follow Phase 2 commands
3. **Build Landing Page** - Implement Phase 3 design
4. **Configure DNS** - Complete Phase 4 setup
5. **Launch!** - Execute Phase 6 checklist

**Estimated Timeline**: 2-3 days for complete implementation

---

*This guide provides a complete roadmap for creating bob.rcoace.com. Each phase can be executed independently, and the checklist ensures nothing is missed.*