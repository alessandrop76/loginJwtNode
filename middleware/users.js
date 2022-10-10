const jwt = require('jsonwebtoken');

module.exports ={
    validateRegister: (req, res, next) => {
        //verify user is registered
        if(req.body.username == req.username){
            return res.status(400).send({
                message: 'username already registered',
            })
        }
       //username min length 3
        if(!req.body.username || req.body.username.length < 3){
            return res.status(400).send({
                message: 'Please enter a username minimum 3 chars',
            });
        }
        //password min 6 chars
        if(!req.body.password || req.body.password.length < 6){
            return res.status(400).send({
                message: 'Please enter a password minimum 6 chars',
            });
        }
        // password (repeat) must match
        if(!req.body.password_repeat || req.body.password_repeat != req.body.password){
            return res.status(400).send({
                message: 'Both passwords must match',
            });
        }
        next();
    },
    isLoggedIn: (req, res, next) => {
        if(!req.headers.authorization){
            return res.status(400).send({
                message: 'You must be logged in',
            })
        }
        try {
            const authHeader = req.headers.authorization;
            const token = authHeader.split(" ")[1];
            const decoded = jwt.verify(token, "SECRETKEY");
            req.userData = decoded;
            next();
        } catch (error) {
            throw error,
            res.status(401).send({
                message: "Your session has expired. Please try again",
            })
        }
    },
};