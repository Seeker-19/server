import mongoose from "mongoose";

const clinicSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  trialName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export const clinicModel = mongoose.model("ClinicModel", clinicSchema);
