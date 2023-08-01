// proxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://15.165.74.54:3000",
      changeOrigin: true,
    })
  );
};
