const utils = require('./utils');


//TODO: Create middleware to check if a landlord/tenant have permission to perform a given API request. EX: A landlord can only add a tenant to a unit they own
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
    },

    isAuthenticated: function (req, res, next) {
        if (req.isAuthenticated()) {
            console.log("Authenticated!")
            return next();
        }

        console.log("Not Authenticated :(")
        utils.error(res, 422, "Not Authenticated")
        // TODO: Figure out the best way to handle redirects, may need to tell the client to do it.
        // res.redirect('/'); // Doesn't work with posts
    },


    isLandlord: function (req, res, next) {
        const { landlord } = req.user;
        if (landlord) {
            // User is a landlord
            return next();
        }

        utils.error(res, 422, "Access denied!")
    }

}