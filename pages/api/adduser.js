import connectDb from "../../middleware/mongodb"
import User from "../../schemas/user"

const handler = async (req, res) => {
  if (req.method == 'OPTIONS') {
    res.status(200).json({ success: true });
  }
  if (req.method == 'POST') {
    let p = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      section: req.body.section,
      rollno: req.body.rollno,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
      address: req.body.address,
      pincode: req.body.pincode,
    })
    await p.save()
    res.status(200).json({ Success: true })

  }
  else {
    res.status(400).json({ error: "This method is not allowed" })
  }
}

export default connectDb(handler);