import connectDb from '../../middleware/mongodb';
import Pdf from '../../schemas/pdf';

const handler = async (req, res) => {
  
  // console.log(req.body)
  const pdfs = await Pdf.find({});
  res.status(200).json(pdfs);
};

export default connectDb(handler);
