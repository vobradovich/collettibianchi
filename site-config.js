const path = require('path');

module.exports = {
  siteTitle: `Colletti Bianchi`,
  siteTitleShort: `CollettiBianchi`,
  siteDescription: `Colletti Bianchi Luxury Shirt, Via XI Maggio, 122, Marsala, TP, Italy`,
  siteUrl: `https://collettibianchi.it`,
  themeColor: `#000`,
  backgroundColor: `#fff`,
  pathPrefix: null,
  logo: path.resolve(__dirname, 'src/images/icon.png'),
  social: {
    twitter: `gatsbyjs`,
    fbAppId: `966242223397117`
  },
  googleMapsApiKey: process.env.MAPS_API_KEY || '',
};
