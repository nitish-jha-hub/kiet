import connectDb from '../../middleware/mongodb';
import Chats from '../../schemas/chats';

const handler = async (req, res) => {
  const chats = await Chats.find({});
  res.status(200).json(chats);
};

export default connectDb(handler);
