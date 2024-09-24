import React, { useState } from "react";

const FourSeasonsBooking = () => {
  // State to hold form inputs
  const [destination, setDestination] = useState("Bahrain Bay");
  const [checkinCheckout, setCheckinCheckout] = useState("09/24/2024 - 09/25/2024");
  const [guests, setGuests] = useState("1 Room - 2 Adults, 1 Child");
  const [bookings, setBookings] = useState([]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    return;
    // Create booking object
    const booking = {
      destination,
      checkinCheckout,
      guests,
      bookingDate: new Date().toISOString() // Current booking date
    };

    // Save booking to local storage or send to API
    const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const updatedBookings = [...savedBookings, booking];
    
    // Save the updated bookings to localStorage
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    setBookings(updatedBookings);

    alert("Booking saved successfully!");
  };

  return (
    <div className="relative w-full h-screen bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('your-background-image-url.jpg')` }}></div>
      
      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white h-full bg-opacity-60 bg-black">
        <h1 className="text-5xl font-bold mb-6 text-center">Discover Tembea Kenya</h1>
        
        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          {/* Destination Dropdown */}
          <div className="flex flex-col">
            <label className="mb-2">Destination</label>
            <select
              className="w-64 p-3 bg-white bg-opacity-10 rounded-md text-white focus:outline-none"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="Bahrain Bay">Bahrain Bay</option>
              <option value="New York">New York</option>
              <option value="Paris">Paris</option>
              <option value="Dubai">Dubai</option>
            </select>
          </div>

          {/* Check-in - Check-out */}
          <div className="flex flex-col">
            <label className="mb-2">Check-in - Check-out</label>
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
            <label className="mb-2">Guests</label>
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
            className="w-64 p-3 bg-black hover:bg-white hover:text-black transition-colors rounded-md text-white font-semibold"
          >
            Save Booking
          </button>
        </form>

        {/* Display Bookings */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Recent Bookings</h2>
          <ul className="space-y-2">
            {bookings.map((booking, index) => (
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
    </div>
  );
};

export default FourSeasonsBooking;
