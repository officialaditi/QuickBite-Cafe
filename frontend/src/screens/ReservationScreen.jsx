import { useSelector, useDispatch } from "react-redux";
import { bookTable } from "../redux/actions/reservationAction";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import jsPDF from "jspdf"; // Import jsPDF library

const ReservationScreen = () => {
  const dispatch = useDispatch();

  const reservation = useSelector((state) => state.reservation);
  const { loading, error, reservationDetails } = reservation;

  const [username, setUsername] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guest, setGuest] = useState(1);

  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (reservationDetails) {
      toast.success("Table Booked");
      setShowConfirmation(true); // Show confirmation after success
      setUsername("");
      setDate("");
      setTime("");
      setGuest(1);
    }
  }, [error, reservationDetails]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(bookTable({ username, date, time, guest }));
  };

  // Function to format the date (e.g., December 10, 2024)
  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options); // Auto-detect locale
  };

  // Function to format the time (e.g., 7:30 PM)
  const formatTime = (time) => {
    const [hour, minute] = time.split(":");
    const date = new Date();
    date.setHours(hour, minute);

    return date.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const generateReceipt = () => {
    const doc = new jsPDF();

    // Add content to the PDF
    doc.setFontSize(16);
    doc.text("Reservation Confirmation", 10, 10);

    doc.setFontSize(12);
    doc.text(`Name: ${reservationDetails.username}`, 10, 30);
    doc.text(`Date: ${formatDate(reservationDetails.date)}`, 10, 40); // Formatted date
    doc.text(`Time: ${formatTime(reservationDetails.time)}`, 10, 50); // Formatted time
    doc.text(`Guests: ${reservationDetails.guest}`, 10, 60);

    // Trigger the download
    doc.save("reservation-confirmation.pdf");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Image */}
      <div className="hidden lg:flex w-1/3">
        <img
          src="./homeImgs/reservation_img_1.jpg"
          alt="Delicious appetizers"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form Section */}
      <div className="flex flex-col justify-center items-center w-full lg:w-2/4 bg-gray-900 text-white py-16 px-8">
        <h2 className="text-lg font-bold tracking-wide uppercase text-center text-pink-300">
          Online Reservation
        </h2>
        <h1 className="text-3xl font-bold text-center mt-4">
          Fill In The Form Below to <br /> Make a Reservation
        </h1>
        {error && <div className="text-red-500">{error}</div>}

        {/* Form */}
        <form className="mt-8 w-full space-y-6" onSubmit={submitHandler}>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-3 bg-gray-800 text-white rounded focus:outline-pink-300"
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="p-3 bg-gray-800 text-white rounded focus:outline-pink-300"
            />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="p-3 bg-gray-800 text-white rounded focus:outline-pink-300"
              defaultValue="18:00"
            />
            <input
              type="number"
              placeholder="Number of Guests"
              value={guest}
              onChange={(e) => setGuest(e.target.value)}
              className="p-3 bg-gray-800 text-white rounded focus:outline-pink-300"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-pink-500 text-white font-bold uppercase tracking-wide rounded hover:bg-pink-600 transition"
          >
            {loading ? "Loading" : "Book a Table"}
          </button>
        </form>

        {/* Confirmation Section */}
        {showConfirmation && reservationDetails && (
          <div className="mt-8 p-4 bg-gray-800 rounded text-center">
            <h2 className="text-lg font-bold text-green-400">
              Reservation Confirmed!
            </h2>
            <p>Name: {reservationDetails.username}</p>
            <p>Date: {formatDate(reservationDetails.date)}</p>{" "}
            {/* Formatted date */}
            <p>Time: {formatTime(reservationDetails.time)}</p>{" "}
            {/* Formatted time */}
            <p>Guests: {reservationDetails.guest}</p>
            <button
              onClick={generateReceipt}
              className="mt-4 py-2 px-4 bg-green-500 text-white font-bold rounded hover:bg-green-600"
            >
              Download Receipt
            </button>
          </div>
        )}
      </div>

      {/* Right Image */}
      <div className="hidden lg:flex w-1/3">
        <img
          src="./homeImgs/reservation_img_2.jpg"
          alt="Fine dining setup"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ReservationScreen;
