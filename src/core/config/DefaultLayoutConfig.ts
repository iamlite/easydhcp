import type LayoutConfigTypes from "@/core/config/LayoutConfigTypes";

const config: LayoutConfigTypes = {
  general: {
    mode: "light",
    iconsType: "duotone",
  },
  main: {
    type: "default",
    primaryColor: "#009EF7",
    logo: {
      dark: "media/logos/demo3-dark.svg",
      light: "media/logos/demo3.svg",
    },
  },
  illustrations: {
    set: "dozzy-1",
  },
  scrollTop: {
    display: true,
  },
  header: {
    display: true,
    menuIcon: "keenthemes",
    width: "fluid",
    fixed: {
      desktop: false,
      tabletAndMobile: false,
    },
  },
  toolbar: {
    display: true,
    width: "fluid",
    fixed: {
      desktop: true,
      tabletAndMobile: true,
    },
  },
  pageTitle: {
    display: true,
    breadcrumb: false,
    direction: "column",
  },
  aside: {
    display: true,
    theme: "dark",
    fixed: true,
    menuIcon: "keenthemes",
    minimized: false,
    minimize: true,
    hoverable: true,
  },
  sidebar: {
    display: false,
  },
  content: {
    width: "fluid",
  },
  footer: {
    width: "fluid",
  },
};

export default config;
