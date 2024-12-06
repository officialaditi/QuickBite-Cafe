import asyncHandler from "express-async-handler";
import Reservation from "../models/reservationModel.js";

/**
 *  @desc    reservation (book table)
 *  @route   /api/reservation
 *  @access  private
 */

const bookTable = asyncHandler(async (req, res) => {
  const { username, date, time, guest } = req.body;

  if (!username || !date || !time || !guest) {
    res.status(400);
    throw new Error("All field required..");
  }

  const reservation = await Reservation.create({
    user: req.user._id,
    username,
    date,
    time,
    guest,
  });

  

  res.status(201).json(reservation);
});

export { bookTable };
