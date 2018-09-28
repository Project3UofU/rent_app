module.exports = {

    error: function (res, status, message) {
        return res.status(status).json({ "error": message });
    },

    printError(error, key = "error") {
        const err = (error.response) ? error.response.data : error;
        console.log(err[key]);
    },
    
    // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
    uuid: function() { // Public Domain/MIT
        var d = new Date().getTime();
        if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
            d += performance.now(); //use high-precision timer if available
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }

}