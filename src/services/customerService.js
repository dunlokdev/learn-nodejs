const Customer = require("../models/customer");

module.exports = {
    createCustomerService: async (data) => {
        const { name, address, phone, email, description, image } = data;
        try {
            const result = await Customer.create({
                name,
                address,
                phone,
                email,
                description,
                image,
            });

            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    },
};
