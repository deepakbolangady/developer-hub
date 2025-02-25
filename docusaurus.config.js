// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const path = require("path");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Harness Developer Hub",
  tagline:
    "Learn intelligent software delivery at your own pace. Step-by-step tutorials, videos, and reference docs to help you deliver customer happiness.",
  url: "https://developer.harness.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "harness", // Usually your GitHub org/user name.
  projectName: "developer-hub", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: ".",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/harness/developer-hub/tree/main", // /tree/main/packages/create-docusaurus/templates/shared/
          include: ["tutorials/**/*.{md, mdx}", "docs/**/*.{md, mdx}"],
          exclude: ["**/shared/**", "**/static/**"],
          routeBasePath: "/", //CHANGE HERE
        },
        // blog: {
        //   showReadingTime: true,
        //   editUrl: "https://github.com/harness/developer-hub/tree/main", // /tree/main/packages/create-docusaurus/templates/shared/
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "GTM-MJB7HPB", //, GTM-MJB7HPB is Prod - GTM-W895FNP is Pre-Prod
          anonymizeIP: false,
        },
      }),
    ],
  ],

  // themes: ["@docusaurus/theme-search-algolia"],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Harness Developer Hub",
        logo: {
          alt: "Harness Developer Hub",
          src: "img/logo_dlp.svg",
        },
        items: [
          {
            position: "left",
            // label: "img",
            html: "<img src='/img/icon_beta.svg' alt='BETA' width='39' height='19' />",
            href: "#",
          },
          {
            type: "search",
            position: "right",
            className: "searchBar",
          },
          {
            position: "right",
            type: "dropdown",
            label: "Tutorials",
            items: [
              {
                // type: "doc",
                label: "Build Code",
                to: "tutorials/build-code",
                // docId: "build-code",
                // activeBasePath: "to",
              },
              {
                // type: "doc",
                label: "Deploy Services",
                to: "tutorials/deploy-services",
              },
              {
                // type: "doc",
                label: "Manage Feature Flags",
                to: "tutorials/manage-feature-flags",
                // activeBaseRegex: "/manage-feature-flags",
              },
              {
                // type: "doc",
                label: "Manage Cloud Costs",
                to: "tutorials/manage-cloud-costs",
              },
              {
                // type: "doc",
                label: "Manage Service Reliability",
                to: "tutorials/manage-service-reliability",
              },
              {
                // type: "doc",
                label: "Orchestrate Security Tests",
                to: "tutorials/orchestrate-security-tests",
              },
              {
                // type: "doc",
                label: "Run Chaos Experiments",
                to: "tutorials/run-chaos-experiments",
              },
              {
                // type: "doc",
                label: "Install Delegate",
                to: "tutorials/platform/install-delegate",
              },
            ],
          },
          {
            position: "right",
            type: "dropdown",
            label: "Documentation",
            items: [
              {
                label: "Continuous Integration",
                to: "docs/continuous-integration",
              },
              {
                label: "Continuous Delivery",
                href: "https://docs.harness.io/category/pfzgb4tg05-howto-cd",
              },
              {
                label: "Feature Flags",
                href: "https://docs.harness.io/category/vjolt35atg-feature-flags",
              },
              {
                label: "Cloud Cost Management",
                href: "https://docs.harness.io/category/exgoemqhji-ccm",
              },
              {
                label: "Service Reliability Management",
                to: "docs/service-reliability-management",
              },
              {
                label: "Security Testing Orchestration",
                to: "docs/security-testing-orchestration",
              },
              {
                label: "Chaos Engineering",
                to: "docs/chaos-engineering",
              },
              {
                label: "Self-Managed Enterprise Edition",
                to: "docs/self-managed-enterprise-edition",
              },
              {
                label: "Harness Platform",
                href: "https://docs.harness.io/category/3fso53aw1u-howto-general",
              },
              {
                label: "API Reference",
                href: "https://apidocs.harness.io/",
              },
            ],
          },
          {
            position: "right",
            href: "https://join.slack.com/t/harnesscommunity/shared_invite/zt-y4hdqh7p-RVuEQyIl5Hcx4Ck8VCvzBw",
            label: "Join Slack",
          },
          {
            position: "right",
            // label: "Sign up",
            html: '<button class="button button--cta">Sign up</button>',
            href: "https://app.harness.io/auth/#/signup/&?utm_source=website&utm_medium=harness-developer-hub&utm_campaign=plt-plg&utm_content=get-started",
          },
          /**
          {
            href: "https://github.com/harness/developer-hub",
            label: "Developer Hub GitHub",
            position: "right",
          },
          */
        ],
      },
      footer: {
        // style: "dark",
        links: [
          {
            title: "Harness Software Delivery Platform",
            items: [
              {
                label: "Overview",
                href: "https://harness.io/products/platform",
              },
              {
                label: "Continuous Integration",
                href: "https://harness.io/products/continuous-integration",
              },
              {
                label: "Continuous Delivery & GitOps",
                href: "https://harness.io/products/continuous-delivery",
              },
              {
                label: "Feature Flags",
                href: "https://harness.io/products/feature-flags",
              },
              {
                label: "Cloud Cost Management",
                href: "https://harness.io/products/cloud-cost",
              },
              {
                label: "Service Reliability Management",
                href: "https://harness.io/products/service-reliability-management",
              },
              {
                label: "Security Testing Orchestration",
                href: "https://harness.io/products/security-testing-orchestration",
              },
              {
                label: "Chaos Engineering",
                href: "https://harness.io/products/chaos-engineering",
              },
            ],
          },
          {
            title: "Resources",
            items: [
              {
                label: "Sign up",
                href: "https://app.harness.io/auth/#/signup/&?utm_source=website&utm_medium=harness-developer-hub&utm_campaign=plt-plg&utm_content=get-started",
              },
              {
                label: "Slack",
                href: "https://join.slack.com/t/harnesscommunity/shared_invite/zt-y4hdqh7p-RVuEQyIl5Hcx4Ck8VCvzBw",
              },
              {
                label: "API Reference",
                href: "https://apidocs.harness.io/",
              },
              {
                label: "Forum",
                href: "https://community.harness.io",
              },
              {
                label: "University",
                href: "https://university.harness.io",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/c/Harnessio",
              },
              {
                label: "Developer Hub GitHub",
                href: "https://github.com/harness/developer-hub",
              },
            ],
          },
          {
            title: "Legal",
            items: [
              {
                label: "Terms of Use",
                to: "legal/terms-of-use",
              },
              {
                label: "Privacy Policy",
                href: "https://harness.io/legal/privacy",
              },
              {
                html: "<a href='javascript:void(0)' class='footer__link-item' onclick='window.OneTrust && window.OneTrust.ToggleInfoDisplay()'>Cookie Management</a>",
                // href: "javascript: alert(33)",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Harness Inc.`,
      },
      prism: {
        theme: darkCodeTheme, // lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "HPP2NHSWS8",

        // Public API key: it is safe to commit it
        apiKey: "26d5fe04a4fb8f356e8f9f79882544c5",

        indexName: "dlp-docs",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: "developer\\.harness\\.io",

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        //... other Algolia params
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      announcementBar: {
        id: "support_us",
        content:
          "Harness Developer Hub is in BETA. Help us improve by providing feedback.",
        backgroundColor: "#000000",
        textColor: "#ffffff",
        isCloseable: true,
      },
      hotjar: {
        siteId: 3194971,
      },
      oneTrust: {
        dataDomainScript: "59633b83-e34c-443c-a807-63232ce145e5",
      },
    }),
  plugins: [
    "docusaurus-plugin-sass",
    path.join(__dirname, "/plugins/hotjar-plugin"),
    path.join(__dirname, "/plugins/onetrust-plugin"),
  ],
};

module.exports = config;
