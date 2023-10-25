import registration from "@/schemas/registration";
import connectDb from "@/middleware/mongodb";


const handler = async (req, res) => {
    if (req.method == 'OPTION') {
        res.status(200).json({ success: true })
    };
    if (req.method == 'POST') {
        console.log(req.body);
        let registrationdetails = new registration({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            rollno: req.body.roll,
            section: req.body.section,
            gender: req.body.gender,
            password: req.body.password,
        })
        await registrationdetails.save();
        res.status(200).json({ success: true, msg: 'data saved Successfully' })
    }
    else {
        res.status(400).json({ error: 'This method is not allowed' })
    }
};

export default connectDb(handler);