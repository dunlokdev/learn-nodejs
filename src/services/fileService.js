const path = require("path");

const uploadSingleFile = async (fileObject) => {
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    // TODO:
    // Save file to dir (public/images/updloads)
    // pn.png => pn-timestamp.png
    const uploadPath =
        path.join("./src", "public/images/uploads/") + fileObject.name;

    const timestamp = Date.now();

    // Use the mv() method to place the file somewhere on your server
    try {
        await fileObject.mv(uploadPath);

        return {
            status: "success",
            path: uploadPath,
            error: null,
        };
    } catch (error) {
        return {
            status: "failed",
            path: null,
            error: JSON.stringify(error),
        };
    }
};

module.exports = {
    uploadSingleFile,
};
