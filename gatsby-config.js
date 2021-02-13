module.exports = {
  siteMetadata: {"bodyBackgroundColor":"#fafafa","primaryColor":"#fb8c00","secondaryColor":"#00897b","sidebarColor":"#eeeeee","textColor":"#616161","amazonWidthValue":"100","h1SizeValue":1,"h2SizeValue":1,"h3SizeValue":1,"headerSizeValue":1,"logoPositionValue":"50","sidebarWidthValue":"20","siteLogo":"","templateWidthValue":"80","textSizeValue":1,"useAmazonSearch":true,"useFooterWidth":false,"useHeaderWhite":true,"useLogo":false,"useMenu":true,"useMenuWidth":false,"useSidebar":false,"useTransparentContentBackground":false,"singularPrincipalKeyword":"tableta gráfica","pluralPrincipalKeyword":"tabletas gráficas","siteDescription":"tabletas gráficas","siteUrl":"http://tabletasgraficas.com","siteFavicon":"https://firebasestorage.googleapis.com/v0/b/automatic-web-dashboard-back.appspot.com/o/images%2Fdefault-icon.png?alt=media&token=b8ef0c2f-53c6-4aa1-8aad-5bd754639a18","siteLanguage":"es","siteName":"tabletas gráficas"},
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID', // leave empty if you want to disable the tracker
          cookieName: 'google-analytics', // default
          anonymize: true, // default
          allowAdFeatures: false // default
        },
        // googleTagManager: {
        //   trackingId: 'YOUR_GOOGLE_TAG_MANAGER_TRACKING_ID', // leave empty if you want to disable the tracker
        //   cookieName: 'gatsby-gdpr-google-tagmanager', // default
        //   dataLayerName: 'dataLayer', // default
        // },
        // facebookPixel: {
        //   pixelId: 'YOUR_FACEBOOK_PIXEL_ID', // leave empty if you want to disable the tracker
        //   cookieName: 'gatsby-gdpr-facebook-pixel', // default
        // },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [`/cookies`]
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    'gatsby-plugin-offline'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
