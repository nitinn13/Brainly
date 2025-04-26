const jwt = require("jsonwebtoken");
const { JWT_USER_SECRET } = require("../config")


const userMiddleware = async (req, res, next) => {
    try {
        const { token } = req.headers;
        if (!token) {
            return res.status(401).json({
                message: "Token Invalid"
            });
        }
        const decoded = jwt.verify(token, JWT_USER_SECRET);

        req.userId = decoded.id;
        next();
    }
    catch(e){
        res.status(401).json({
            message: "error authenticating"
        })
    }
}

module.exports={
    userMiddleware
}