module.exports = {
    
    error: function (res, obj, message) {
        if (!obj) {
            res.status(422).json({ error: message })
            return true;
        }

        return false;
    }
    
}