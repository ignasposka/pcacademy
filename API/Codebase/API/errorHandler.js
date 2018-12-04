module.exports = (error, request, response, next) => response.status(error.output.statusCode)
    .json(error.output.payload);
