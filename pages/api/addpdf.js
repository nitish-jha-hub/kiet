import connectDb from "../../middleware/mongodb"
import Pdf from "../../schemas/pdf"

const handler = async (req, res) => {
  if (req.method == 'POST') {
    let p = new Pdf({
      name: req.body.name,
      link: req.body.link,
    })
    await p.save()
    res.status(200).json({ Success: true })

  }
  else {
    res.status(400).json({ error: "This method is not allowed" })
  }
}

export default connectDb(handler);