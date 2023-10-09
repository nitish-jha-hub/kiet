import connectDb from "../../middleware/mongodb"
import User from "../../schemas/user"
var jwt = require('jsonwebtoken');

const handler = async (req, res) => {
    if (req.method == 'POST') {
        // console.log(req.body.email, req.body.password)
        let account = await User.findOne({ "email": req.body.email })
        if (account) {
            // console.log(account.email,account.password);
            if (req.body.email == account.email && req.body.password == account.password ) {
                var token = jwt.sign({ email: account.email, firstname: account.firstname }, process.env.SECRETJWT, {
                    expiresIn: '30d'
                });
                res.status(200).json({ success: true, token, email: account.email })
            }
            else {
                res.status(200).json({ success: false, error: "Invalid login details" })
            }
        }

        else {
            res.status(400).json({ error: "This method is not allowed" })
        }
    }
}

export default connectDb(handler);