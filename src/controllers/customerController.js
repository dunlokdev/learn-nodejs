const customerService = require("../services/customerService");
const { uploadSingleFile } = require("../services/fileService");

module.exports = {
    postCreateCustomerApi: async (req, res) => {
        const { name, address, phone, email, description } = req.body;
        let image = "";

        if (req.files || Object.keys(req.files).length > 0) {
            const result = await uploadSingleFile(req.files.image);
            image = result.path;
        }

        const customer = await customerService.createCustomerService({
            name,
            address,
            phone,
            email,
            description,
            image,
        });

        return res.status(200).json({
            isSuccess: true,
            message: "Create a customer is successed",
            data: customer,
        });
    },
};
