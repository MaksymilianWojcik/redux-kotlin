/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.
const path = require('path');

const siteConfig = {
  customDocsPath: path.basename(__dirname) + '/docs',
  title: "ReduxKotlin", // Title for your website.
  tagline: "Redux in Kotlin supporting multiplatform - Android, iOS, Web, Native",
  url: "https://reduxkotlin.org", // Your website URL
  baseUrl: "/", // Base URL for your project */
  docsUrl : "", // don't prefix docs URLs with /docs/
  algolia: {
    apiKey: '8b9ae9fa68ea0ecf1df26cd985fb1c63',
    indexName: 'reduxkotlin',
    algoliaOptions: {}
  },


  // Used for publishing and more
  projectName: "redux-kotlin",
  organizationName: "reduxkotlin",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: "introduction/getting-started", label: "Getting Started" },
    { doc : "api/api-reference", label : "API"},
    { doc : "faq", label : "FAQ"},
    { href : "https://www.github.com/reduxkotlin/redux-kotlin", label : "Github"},
    { href: "/introduction/getting-started#help-and-discussion", label: "Need help?" },
  ],

  /* path to images for header/footer */
  headerIcon: "img/redux_white.svg",
  footerIcon: "img/redux_white.svg",
  favicon: "img/favicon/favicon.ico",

  /* Colors for website */
  colors: {
   primaryColor: "#137AF9",
    secondaryColor: "#497BBC",
    accentColor1: "#717171",
    accentColor2: "#F7880D",
    accentColor3: "#FFA4CCFC",
    accentColor4: "F7880D",
    accentColor5: "#CBDDEA",
    accentColor6: "#F7880D"
},
  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: 'Thank you to Dan Abramov and the Redux.js.org documentation authors from which this was forked.',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "monokai"
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    "/scripts/sidebarScroll.js",
    "/scripts/codeblock.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
    "https://buttons.github.io/buttons.js",
  ],

  // Add custom stylesheets here
  //stylesheets: ['/css/codeblock.css'],

  // Last update time
  enableUpdateTime: true,

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,
  // Collapsible categories in the side navigation.
  docsSideNavCollapsible: true,

  // Open Graph and Twitter card images.
  ogImage: "img/redux-logo-landscape.png",
  twitterImage: "img/redux-logo-twitter.png",

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: "https://github.com/reduxkotlin/redux-kotlin",
  gaTrackingId : "UA-130598673-1",
};

module.exports = siteConfig;
