import Joi from "joi";

export default Joi.object({
    fullName:
        Joi
        .string()
        .required()
        .min(3)
        .max(25),
    email:
        Joi
        .string()
        .required()
        .email({ tlds: { allow: false } }),
    password:
        Joi
        .string()
        .required()
        .min(8)
        .max(25)
})
