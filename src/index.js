const app = require("./app");
const log = require("./utils/logger");

const port = process.env.PORT || 3000;

// Wait for the DB to connect, on event start listening     
app.on("db-ready", function() {
    app.listen(port, () => {
        log.i(`NotifyNow-API Server now listening on Port ${port}`);
    })
});

// If DB failes, then do not start the server
app.on("db-failed", function() {
    log.e("Failed to connect to DB. NotifyNow-API Server will not start...");
});