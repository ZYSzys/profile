const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/zyszys-profile', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'ZYSzys Profile', // Navigation and Site Title
  siteTitleAlt: 'ZYSzys', // Alternative Site title for SEO
  siteTitleShort: 'ZYSzys', // short_name for manifest
  siteUrl: 'https://cara.lekoarts.de', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Playful & Colorful One-Page website with Parallax effect',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@ZYSzys_', // Twitter Username
  ogSiteName: 'ZYSzys', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
