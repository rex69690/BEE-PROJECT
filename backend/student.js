const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  rollNumber: { type: String, required: true },
  course: { type: String, required: true },
  phone: { type: String, required: true }, 
  dob: { type: Date, required: true }, 
  gender: { type: String, required: true },
  yearOfStudy: { type: String, required: true }, 
  semester: { type: String, required: true } 
});

module.exports = mongoose.model('Student', studentSchema);