module.exports = {

    // Look to see if the request has valid parameters for the given call
    paramsCheck: function (params) {
        return function (req, res, next) {
            let parameters = (req.method === 'POST') ? req.body : req.query
            for (parameter of params) {
                if (Array.isArray(parameter)) {
                    // If any of the parameters in the array match the call is valid
                    let valid = false;
                    for (subParamer of parameter) {
                        if (parameters[subParamer] != undefined) {
                            // One of the parameters matched
                            valid = true;
                            break
                        }
                    }
                    if (!valid) {
                        res.status(422).json({ "error": `Missing at least one of the following parameters: '${parameter.join("', '")}'` });
                        return;
                    }
                } else if (parameters[parameter] == undefined) {
                    // If the parameter is missing the call is invalid
                    res.status(422).json({ "error": `Missing '${parameter}' paramater` });
                    return;
                }
            }
            next()
        }
    }

}