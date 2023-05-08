const express = require("express");
const {
    getUsersApi,
    postCreateUserApi,
    putUpdateUserApi,
    deleteUserApi,
    postUploadSingleFileApi,
    postUploadMultipleFilesApi,
} = require("../controllers/apiController");

const { postCreateCustomerApi } = require("../controllers/customerController");

const routerAPI = express.Router();

routerAPI.get("/", (req, res) => {
    res.status(200).json({
        data: "hello world first apis",
    });
});

// Get all users
routerAPI.get("/users", getUsersApi);

// Add new a user
routerAPI.post("/users", postCreateUserApi);

// Update a user
routerAPI.put("/users", putUpdateUserApi);

// Delete a user
routerAPI.delete("/users", deleteUserApi);

// Upload single file
routerAPI.post("/file", postUploadSingleFileApi);

// Upload multiple file
routerAPI.post("/files", postUploadMultipleFilesApi);

// =============== API Customer ==================
routerAPI.post("/customers", postCreateCustomerApi);

module.exports = routerAPI;
