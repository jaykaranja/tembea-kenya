import React, { useState } from "react";

const TembeaKenyaHero = () => {
  // State for form inputs
  const [destination, setDestination] = useState("Bahrain Bay");
  const [checkinCheckout, setCheckinCheckout] = useState("09/24/2024 - 09/25/2024");
  const [guests, setGuests] = useState("1 Room - 2 Adults, 1 Child");
  const [bookings, setBookings] = useState([]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const booking = {
      destination,
      checkinCheckout,
      guests,
      bookingDate: new Date().toISOString(),
    };

    const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const updatedBookings = [...savedBookings, booking];
    
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    setBookings(updatedBookings);

    alert("Booking saved successfully!");
  };

  return (
    <div className="relative w-full h-screen bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('your-background-image-url.jpg')` }}></div>
      
      {/* Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-60">
        <h1 className="text-5xl font-bold text-white mb-4">Tembea Kenya</h1>
        <p className="text-lg text-white mb-6 text-center max-w-xl">
          Experience the beauty of Kenya like never before. Book your dream getaway with us!
        </p>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          {/* Destination Dropdown */}
          <div className="flex flex-col">
            <label className="mb-2 text-white">Destination</label>
            <select
              className="w-64 p-3 bg-white bg-opacity-10 rounded-md text-white focus:outline-none"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="Bahrain Bay">Bahrain Bay</option>
              <option value="Nairobi">Nairobi</option>
              <option value="Mombasa">Mombasa</option>
              <option value="Maasai Mara">Maasai Mara</option>
            </select>
          </div>

          {/* Check-in - Check-out */}
          <div className="flex flex-col">
            <label className="mb-2 text-white">Check-in - Check-out</label>
            <input
              type="text"
              className="w-64 p-3 bg-white bg-opacity-10 rounded-md text-white focus:outline-none"
              value={checkinCheckout}
              onChange={(e) => setCheckinCheckout(e.target.value)}
              placeholder="MM/DD/YYYY - MM/DD/YYYY"
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col">
            <label className="mb-2 text-white">Guests</label>
            <input
              type="text"
              className="w-64 p-3 bg-white bg-opacity-10 rounded-md text-white focus:outline-none"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              placeholder="1 Room - 2 Adults, 1 Child"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-64 p-3 bg-green-600 hover:bg-green-500 transition-colors rounded-md text-white font-semibold"
          >
            Save Booking
          </button>
        </form>
      </div>

      {/* Display Bookings (Optional) */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Recent Bookings</h2>
        <ul className="space-y-2">
          {bookings.map((booking:unknown, index) => (
            <li key={index} className="p-4 bg-white bg-opacity-10 rounded-md text-white">
              <p><strong>Destination:</strong> {booking.destination}</p>
              <p><strong>Dates:</strong> {booking.checkinCheckout}</p>
              <p><strong>Guests:</strong> {booking.guests}</p>
              <p><strong>Booking Date:</strong> {new Date(booking.bookingDate).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TembeaKenyaHero;
