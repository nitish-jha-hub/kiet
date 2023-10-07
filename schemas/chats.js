const mongoose = require('mongoose');

const ChartSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String},
  phone: { type: String, default: '', required:true },
  message: { type: String, default: '', required:true},
    
},{ timestamps: true });

  export default mongoose.models.Chart || mongoose.model("Chart", ChartSchema);
  // mongoose.models = {}
  // export default mongoose.model("Chart", ChartSchema);