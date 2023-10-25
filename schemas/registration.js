const mongoose = require('mongoose');

const RegSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, default: ''},
  rollno: { type: Number, required: true, unique: true},
  section: { type: String},
  gender: { type: String},
  password: { type: String, required: true },
  
},{ timestamps: true });

  export default mongoose.models.Reg || mongoose.model("Reg", RegSchema);
  // mongoose.models = {}
  // export default mongoose.model("User", UserSchema);