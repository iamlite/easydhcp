import type LayoutConfigTypes from "@/core/config/LayoutConfigTypes";

const config: LayoutConfigTypes = {
  "general": {
    "mode": "dark",
    "iconsType": "duotone"
  },
  "main": {
    "type": "default",
    "primaryColor": "#009EF7",
    "logo": {
      "dark": "media/logos/default-dark.svg",
      "light": "media/logos/default.svg"
    }
  },
  "illustrations": {
    "set": "dozzy-1"
  },
  "scrollTop": {
    "display": true
  },
  "header": {
    "display": true,
    "menuIcon": "keenthemes",
    "width": "fluid",
    "fixed": {
      "desktop": false,
      "tabletAndMobile": false
    }
  },
  "toolbar": {
    "display": true,
    "width": "fixed",
    "fixed": {
      "desktop": true,
      "tabletAndMobile": true
    }
  },
  "pageTitle": {
    "display": true,
    "breadcrumb": true,
    "direction": "column"
  },
  "aside": {
    "display": true,
    "theme": "dark",
    "fixed": true,
    "menuIcon": "keenthemes",
    "minimized": false,
    "minimize": true,
    "hoverable": true
  },
  "sidebar": {
    "display": true
  },
  "content": {
    "width": "fixed"
  },
  "footer": {
    "width": "fixed"
  }
}

export default config;
