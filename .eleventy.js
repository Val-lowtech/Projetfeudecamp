const HtmlMin = require('html-minifier');
const { EleventyI18nPlugin } = require("@11ty/eleventy");
const { DateTime } = require("luxon");


module.exports = function (config) {
  config.addFilter("asPostDate", (dateObj) => {
   return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);

    // other config likely here
  });
}

module.exports = eleventyConfig => {
  eleventyConfig.addFilter("postDate", (dateObj)=> {
    return DateTime.evenements(dateObj).toLocaleString(DateTime.DATE_MED);
  })
  eleventyConfig.setTemplateFormats(['njk']);
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addPassthroughCopy("src/css/");
  eleventyConfig.addPassthroughCopy("src/js/");
  eleventyConfig.addWatchTarget('src/_data/');
  eleventyConfig.addWatchTarget("src/css/");
  eleventyConfig.addWatchTarget("src/js/");
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    // any valid BCP 47-compatible language tag is supported
    defaultLanguage: "fr",
    locales: ["fr", "en"], // Required, this site uses "en"
  });
  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      let minified = HtmlMin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });
  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      data: '_data',
    },
    jsDataFileSuffix: '.data',
  };
};
