const Joi = require('@hapi/joi');
const constants = require('../constants/index');

const validateObjectSchema = (data, schema) => {
    const result = Joi.validate(data, schema, { convert: false });
    if (result.error) {
        const errorDeatails = result.error.details.map(value => {
            return {
                error: value.message,
                path: value.path
            };
        });
        return errorDeatails;
    }
    return null;
};

module.exports.validatedBody = (schema) => {
    return (req, res, next) => {
        let response = { ...constants.defaultServerResponse }
        const error = validateObjectSchema(req.body, schema);
        if (error) {
            response.body = error;
            response.message = constants.requestValidationMessage.BAD_REQUEST;
            return res.status(response.status).send(response);
        }
        return next();
    };
};

module.exports.validateQueryParams = (schema) => {
    return (req, res, next) => {
        let response = { ...constants.defaultServerResponse }
        const error = validateObjectSchema(req.query, schema);
        if (error) {
            response.body = error;
            response.message = constants.requestValidationMessage.BAD_REQUEST;
            return res.status(response.status).send(response);
        }
        return next();
    };
};

