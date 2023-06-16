export interface MenuItem {
  heading?: string;
  sectionTitle?: string;
  route?: string;
  pages?: Array<MenuItem>;
  keenthemesIcon?: string;
  bootstrapIcon?: string;
  sub?: Array<MenuItem>;
}

const MainMenuConfig: Array<MenuItem> = [
  {
    heading: "Dashboard",
    route: "/dashboard",
    keenthemesIcon: "black-right",
    bootstrapIcon: "bi-arrow-right",
  },
  {
    heading: "Devices",
    route: "/devices",
    keenthemesIcon: "black-right",
    bootstrapIcon: "bi-arrow-right",
  },
  {
    heading: "Static IP",
    route: "/static",
    keenthemesIcon: "black-right",
    bootstrapIcon: "bi-arrow-right",
  },
  {
    heading: "Logs",
    keenthemesIcon: "black-right",
    bootstrapIcon: "bi-arrow-right",
    route: "/logs",
    sub:[
      {
        heading: "Overview",
        route: "/logs-overview",
      },
      {
        heading: "Tables",
        route: "/logs-tables",
      },
    ],
  },
  {
    heading: "Settings",
    keenthemesIcon: "black-right",
    bootstrapIcon: "bi-arrow-right",
    route:"/settings",
    sub: [
      {
        heading: "General Settings",
        route: "./settings/general-settings",
      },
      {
        heading: "Profile Settings",
        route: "./settings/profile-settings",
      },
      {
        heading: "DHCP Settings",
        route: "./settings/dhcp-settings",
      },
      {
        heading: "DNS Settings",
        route: "./settings/dns-settings",
      },
    ],
  },
];

export default MainMenuConfig;
