const Joi = require('@hapi/joi')
    .extend(require('@hapi/joi-date'));

const userValidation = {
    createUser: {
        body: {
            name: Joi.string().required(),
            email: Joi.string().lowercase().email().message('Email Address not valid').required(),
            password: Joi.string().required(),
            phone: Joi.string().regex(/^([+])?[0-9]{6,20}$/).message('Phone Number not valid').required(),
            address: Joi.string().allow('', null),
            type: Joi.string()
               
            },
    },
    login: {
        body: Joi.object({
            email: Joi.string().lowercase().email().required(),
            password: Joi.string().required()
        }),
    },
}

module.exports = {
    userValidation,
};