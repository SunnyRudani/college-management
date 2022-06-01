function validateRequest(req, next, schema, res) {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };
    const { error, value } = schema.validate(req.body, options);
    if (error) {
        req.res.status(500)
        req.res.json({
            isSuccess: false,
            message: error.details
        })
    } else {
        req.body = value;
        next();
    }
}

exports.base = {
    validateRequest
}