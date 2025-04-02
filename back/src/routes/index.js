const imageNetwork = require("../network/imagenetwork");

function routes(app) {
    app.use("/images", imageNetwork);
}

module.exports = routes;
