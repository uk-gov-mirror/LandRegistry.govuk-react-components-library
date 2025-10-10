module.exports = function (router) {
  // Middleware to set correct MIME type for .mjs files
  router.use((req, res, next) => {
    if (req.url && req.url.endsWith(".mjs")) {
      res.setHeader("Content-Type", "text/javascript");
    }
    next();
  });
};
