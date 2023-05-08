const path = require("path");

const uploadSingleFile = async (fileObject) => {
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    // TODO:
    // Save file to dir (public/images/updloads)
    // pn.png => pn-timestamp.png
    // const uploadPath = path.join("./src", "public/images/uploads/");
    const uploadPath = path.resolve(__dirname, "../public/images/upload");

    // get extension name
    const extName = path.extname(fileObject.name);
    const timestamp = Date.now();

    const baseName = path.basename(fileObject.name, extName);
    const finalName = `${baseName}-${timestamp}${extName}`;
    const finalPath = `${uploadPath}/${finalName}`;

    // Use the mv() method to place the file somewhere on your server
    try {
        await fileObject.mv(finalPath);

        return {
            status: "success",
            path: finalName,
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

const uploadMultipleFiles = async (filesArr) => {
    try {
        const uploadPath = path.resolve(__dirname, "../public/images/upload");
        const resultArr = [];
        let countSuccess = 0;

        for (let i = 0; i < filesArr.length; i++) {
            //get image extension
            let extName = path.extname(filesArr[i].name);

            //get image's name (without extension)
            let baseName = path.basename(filesArr[i].name, extName);

            //create final path: eg: /upload/your-image.png
            let finalName = `${baseName}-${Date.now()}${extName}`;
            let finalPath = `${uploadPath}/${finalName}`;

            try {
                await filesArr[i].mv(finalPath);
                resultArr.push({
                    status: "success",
                    path: finalName,
                    fileName: filesArr[i].name,
                    error: null,
                });
                countSuccess++;
            } catch (err) {
                resultArr.push({
                    status: "failed",
                    path: null,
                    fileName: filesArr[i].name,
                    error: JSON.stringify(err),
                });
            }
        }

        return {
            countSuccess: countSuccess,
            detail: resultArr,
        };
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    uploadSingleFile,
    uploadMultipleFiles,
};
