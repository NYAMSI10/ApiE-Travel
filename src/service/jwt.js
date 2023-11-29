const {expressjwt} = require("express-jwt");

function authJwt() {
    const secret = "KGGK>HKVHJVKBKJBKBKHBMKHB";


    return expressjwt({
        secret,
        algorithms: ["HS256"],
        isRevoked: isRevoked

    })

}

async function isRevoked(req, payload) {


    if (payload.payload.isAdmin === false) {

        return true;
    }else {

        return false;
    }

}

module.exports = authJwt;

