const mongoose = require('mongoose');

const PdfSchema = new mongoose.Schema({
  name: { type: String, required: true,unique: true, },
  link: { type: String, required: true, unique: true, },
},
  { timestamps: true });

export default mongoose.models.Pdf || mongoose.model("Pdf", PdfSchema);
// mongoose.models = {}
// export default mongoose.model("Pdf", PdfSchema);