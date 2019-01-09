module.exports = (err, request, response, next) => {
    response.status(err.status || 500)
        .json(err.message);
};
