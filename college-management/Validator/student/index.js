const Joi = require('joi');
const validate = require('../base');

function createStudent(req, res, next) {
    const schema = Joi.object({
        firstName: Joi.string().required(),
    });
    validate.base.validateRequest(req, next, schema);
}

exports.validations = {
    createStudent
}