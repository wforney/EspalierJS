var config = require("./")

module.exports = {
  autoprefixer: { browsers: ["last 2 version"] },
  src: config.scssPath + "/espalier.scss",
  dest: config.output,
  demoSCSSIn: config.scssPath + "/demo/Site.scss",
  demoSCSSOut: config.demoCSS,
  settings: {
    indentedSyntax: true, // Enable .sass syntax!
    imagePath: "assets/images" // Used by the image-url helper
  }
}