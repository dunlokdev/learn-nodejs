const User = require("../models/user");
const {
    uploadSingleFile,
    uploadMultipleFiles,
} = require("../services/fileService");

const getUsersApi = async (req, res) => {
    // find all documents
    const results = await User.find({});

    return res.status(200).json({
        errorCode: 0,
        data: results,
    });
};

const postCreateUserApi = async (req, res) => {
    const { email, name, city } = req.body;

    const user = await User.create({ email, name, city });
    return res.status(201).json({
        errorCode: 1,
        message: "Create a user successed",
        data: user,
    });
};

const putUpdateUserApi = async (req, res) => {
    const { email, name, city, userId } = req.body;

    const result = await User.updateOne({ _id: userId }, { email, name, city });

    return res.status(200).json({
        errorCode: 1,
        message: "Update a user successed",
        data: result,
    });
};

const deleteUserApi = async (req, res) => {
    const { userId } = req.body;

    const result = await User.deleteOne({ _id: userId });

    return res.status(200).json({
        errorCode: 1,
        message: `Delete a user has id = ${userId} successed`,
        data: result,
    });
};

const postUploadSingleFileApi = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send("No files were uploaded.");
    }

    const result = await uploadSingleFile(req.files.image);

    if (result.status === "success") {
        return res.status(200).json({
            errorCode: 1,
            path: result.path,
            message: `Upload single file is successed`,
        });
    }

    return res.status(400).json({
        errorCode: 1,
        message: `Upload single file is failed`,
    });
};

const postUploadMultipleFilesApi = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send("No files were uploaded.");
    }

    // console.log(req.files);

    //upload single => files is an object
    //upload multiple => files is an array

    if (Array.isArray(req.files.image)) {
        // upload multiple files
        const result = await uploadMultipleFiles(req.files.image);
        console.log("🚀 ~ postUploadMultipleFilesApi ~ result:", result);

        return res.status(200).json({
            errorCode: 1,
            data: result,
        });
    } else {
        // upload single file
        return await postUploadSingleFileApi(req, res);
    }
};

module.exports = {
    getUsersApi,
    postCreateUserApi,
    putUpdateUserApi,
    deleteUserApi,
    postUploadSingleFileApi,
    postUploadMultipleFilesApi,
};
