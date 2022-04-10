module.exports = {
  title: "SALT Webhook Docs",
  tagline: "Digital insurance application",
  url: "https://saltinsure.com/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  themeConfig: {
    navbar: {
      logo: {
        alt: "SALT logo",
        src: "img/logo-color-dark.svg",
        srcDark: "img/logo-color-light.svg",
      },
      items: [
        {
          to: "https://www.saltinsure.com",
          label: "Website",
          position: "left",
        },
        {
          to: "https://support.saltinsure.com",
          label: "Support",
          position: "left",
        }
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © SALT Insure, Inc`,
    },
    prism: {
      additionalLanguages: ["ruby", "php", "java", "groovy", "csharp", "kotlin"],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsible: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        // gtag: {
        //   trackingID: "UA-219524931-1",
        //   anonymizeIP: true,
        // },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/receiving/verifying-payloads/why",
            from: "/receiving/verifying-payloads",
          },
          {
            to: "/app-portal",
            from: "/management-ui",
          },
          {
            to: "/retries",
            from: "/account/retries"
          },
        ],
      },
    ],
    [
      "@cmfcmf/docusaurus-search-local",
      {
        indexBlog: false,
        indexPages: false,
      },
    ],
  ],
};
