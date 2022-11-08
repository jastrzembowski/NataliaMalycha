require("babel-register")({
    presets: ["es2015", "react"]
  });
  
  const router = require('./router.js').default;
  const Sitemap = require('react-router-sitemap').default;
  
  (
      new Sitemap(router)
          .build('https://nataliamalycha.com')
          .save('./public/sitemap.xml')
  );