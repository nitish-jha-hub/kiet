import connectDb from "../../middleware/mongodb"
import Chats from "../../schemas/chats"

const handler = async (req, res) => {
  if (req.method == 'OPTIONS') {
    res.status(200).json({ success: true });
  }
  if (req.method == 'POST') {
    let p = new Chats({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
    })
    await p.save()
    res.status(200).json({ Success: true })

  }
  else {
    res.status(400).json({ error: "This method is not allowed" })
  }
}

export default connectDb(handler);