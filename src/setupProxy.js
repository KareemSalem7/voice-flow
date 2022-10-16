const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    `/time`, // BACKTICKS ARE SUPER IMPORTANT IN THIS FILE. NOT SINGLE QUOTES.
    createProxyMiddleware({
      target: `http://127.0.0.1:5000`,
      changeOrigin: true,
    })
  );
}