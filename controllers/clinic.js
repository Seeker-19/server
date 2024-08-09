import { clinicModel } from "../models/clinic.js";
export const newTrial = async (req, res, next) => {
  try {
    const {
      title,

      description,
      startDate,
      endDate,
      status,
    } = req.body;

    await clinicModel.create({
      user: req.user,
      trialName: title,
      description,
      startDate,
      endDate,
      status,
    });

    return res.status(201).json({
      success: true,
      message: "clinic added successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getAllTrials = async (req, res, next) => {
  try {
    const userid = req.user._id;
    console.log("user", userid);

    const places = await clinicModel.find();

    return res.status(201).json({
      success: true,
      places,
    });
  } catch (error) {
    next(error);
  }
};

export const updateTrial = async (req, res, next) => {
  try {
    const { id } = req.params;

    const {
      title,

      description,
      status,
    } = req.body;

    const place = await clinicModel.findById(id);

    if (!place) {
      return next(new ErrorHandler("Invali id", 404));
    }

    place.set({
      title,

      description,
      status,
    });

    await place.save();

    res.status(201).json({
      success: true,
      message: "Place updated successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTrial = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedBooking = await clinicModel.findByIdAndDelete(id);

    if (!deletedBooking) {
      return res.status(404).json({
        success: false,
        message: "trial not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "trial deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
