const HtmlMin = require('html-minifier');

module.exports = eleventyConfig => {
  eleventyConfig.setTemplateFormats(['njk']);
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addPassthroughCopy("src/css/");
  eleventyConfig.addWatchTarget('src/_data/');
  eleventyConfig.addWatchTarget("src/css/");
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
