import connectDb from '../../middleware/mongodb';
import User from '../../schemas/user';

const handler = async (req, res) => {
    console.log(req.body)
    const users = await User.find({ rollno: req.body.rollno });
    res.status(200).json(users);   
};

export default connectDb(handler);
