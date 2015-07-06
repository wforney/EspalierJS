var path      = require("path");
var config    = require("./");
var webpack   = require("webpack");

module.exports = function(env) {
  var jsSrc = path.resolve(config.jsPath);

  var webpackConfig = {
    context: jsSrc,
    plugins: [],
    resolve: {
      extensions: ["", ".js"]
    },
    module: {
      loaders: [
        {
          loader: "babel-loader?stage=1",
          exclude: "/node_modules/"
        }
      ]
    }
  };

  webpackConfig.entry= {
    espalier: [ "./espalier.js" ]
  };

  webpackConfig.output= {
    path: config.output,
    filename: "espalier.js",
    library: "espalier",
    libraryTarget: "umd"
  };

  if(env === "dev") {
    webpackConfig.devtool = "source-map";
    webpack.debug = true;
  }

  if(env === "prod") {
    webpackConfig.plugins.push(
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.NoErrorsPlugin()
    );
  }

  return webpackConfig;
}