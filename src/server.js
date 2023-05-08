// import library
require("dotenv").config();
const express = require("express"); // commonjs
const fileUpload = require("express-fileupload");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const apiRoutes = require("./routes/api");
const connection = require("./config/database");

const app = express(); // app of express
const port = process.env.PORT; // port

// config file upload
// default options
app.use(fileUpload());

// config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// config view engine
configViewEngine(app);

// route
app.use("/", webRoutes);
app.use("/v1/api/", apiRoutes);

(async () => {
    try {
        // * Test connection
        await connection();
        //* start server
        app.listen(port, () => {
            console.log(`Server Dunlok dev is running on port ${port}`);
        });
    } catch (error) {
        console.log("An error ccurred in server.js, error: ", error);
    }
})();
