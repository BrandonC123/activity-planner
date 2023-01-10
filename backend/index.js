var app = require("./App.tsx");
var http = require("http");
var config = require("./utils/config");
var logger = require("./utils/logger");
var server = http.createServer(app);
server.listen(config.PORT, function () {
    logger.info("Server is running on http://localhost:".concat(config.PORT, "/"));
});
