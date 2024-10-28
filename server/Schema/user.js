import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    title: { type: String },
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
  email: { type: String, required: true, match: /.+\@.+\..+/ },
  phone: { type: Number, required: true },
  emergencyPhone: { type: Number, required: true },
  marital: { type: String },
  gender: { type: String, required: true },
  dob: { type: Date, required: true },

  country: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  postalcode: { type: Number, required: true },
  passportNumber: { type: String, required: true },
  passportExpiry: { type: Date, required: true },

  interestedCountry: { type: String, required: true },
  test: { type: String, required: true },
  score: { type: Number, min: 0 },
  educationBoard: { type: String },

  educations: [
    {
      qualification: { type: String, required: true },
      institution: { type: String, required: true },
      percentage: { type: Number, required: true, min: 0, max: 100 },
      passingYear: { type: Number, required: true },
      country: { type: String, required: true }
    }
  ],

  rejectionStatus: { type: String, required: true },
  gap: { type: String, required: true },

  tenthMarksheet: {
    type: String, // Replace String with a specific type if file metadata is stored separately
    required: true
  },
  twelfthMarksheet: {
    type: String,
    required: true
  },
  passport: {
    type: String,
    required: true
  },
  englishProficiency: {
    type: String,
    required: true
  },
  sop: {
    type: String,
    required: true
  },
  cv: {
    type: String,
    required: true
  },
  experience: {
    type: String
  },
  bachelorsDegree: {
    type: String
  }
})

const user = mongoose.model('user',userSchema)

export default user