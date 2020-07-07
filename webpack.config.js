const { merge: webpackMerge } = require("webpack-merge");
const common = require("./webpack/webpack.common");

console.log(webpackMerge);

const envs = {
  development: "dev",
  production: "prod",
};
/* eslint-disable global-require,import/no-dynamic-require */
const env = envs[process.env.NODE_ENV || "development"];
const envConfig = require(`./webpack/webpack.${env}.js`);
module.exports = webpackMerge(common, envConfig);
