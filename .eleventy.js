const HtmlMin = require('html-minifier');
const { EleventyI18nPlugin } = require("@11ty/eleventy");
const { DateTime } = require("luxon");
const { compress } = require('eleventy-plugin-compress');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(compress, {
    /* Optional options. */
  });
};

module.exports = function (eleventyConfig) {

  eleventyConfig.addFilter("postDate", (dateString) => {
    // Parse the Strapi date string into a Luxon DateTime object
    const luxonDate = DateTime.fromFormat(dateString, "yyyy-MM-dd", { locale: "fr" });

    // Check if the date is valid before attempting to format it
    if (!luxonDate.isValid) {
      return "Invalid Date";
    }

    // Format the date using Luxon
    return luxonDate.toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addPairedShortcode("myShortcode", function(content) {
    return content;
  });

  eleventyConfig.addFilter("getPermalink", function getPermalink(collection, id) {
    const post = collection.find((post) => post.data.id === id);
    if (post) {
        return post.url;
    } else {
        console.error(`Post with id '${id}' not found.`);
        return null;
    }
});



  eleventyConfig.setTemplateFormats(["njk", "html", "liquid", "njk"]);
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addPassthroughCopy("src/css/");
  eleventyConfig.addPassthroughCopy("src/js/");
  eleventyConfig.addWatchTarget('src/_data/');
  eleventyConfig.addWatchTarget("src/css/");
  eleventyConfig.addWatchTarget("src/js/");

  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: "fr",
    locales: ["fr", "en"],
  });

  eleventyConfig.addDataExtension('js', async (contents, outputPath) => {
    if (outputPath.endsWith('/index.html')) {
      const dataFunction = require(`.${outputPath}data`);
      return dataFunction();
    }
    return {};
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
