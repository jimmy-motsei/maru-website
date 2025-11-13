module.exports = function(eleventyConfig) {
    // Copy existing static assets straight through to the output
    eleventyConfig.addPassthroughCopy("assets");
  
    return {
      dir: {
        input: "src",
        includes: "partials",
        layouts: "layouts",
        output: "public"
      },
      templateFormats: ["html", "njk"],
      htmlTemplateEngine: "njk",
      markdownTemplateEngine: "njk"
    };
  };
  