module.exports = {

    error: function (res, status, message) {
        return res.status(status).json({ "error": message });
    },

    printError(error, key = "error") {
        const err = (error.response) ? error.response.data : error;
        console.log(err[key]);
    }

}