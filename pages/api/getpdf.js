import connectDb from '../../middleware/mongodb';
import Pdf from '../../schemas/pdf';

const handler = async (req, res) => {
  
  // console.log(req.body)
  const pdf1 = await Pdf.find({name: req.body.name});
  res.status(200).json(pdf1);
};

export default connectDb(handler);
