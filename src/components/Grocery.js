import React from 'react';
import groceryImage from "../../assets/grocery.png";

const Grocery = () => {
  return (
    <div className="bg-gradient-to-b from-teal-100 via-purple-200 to-pink-100 min-h-screen text-gray-800">
      {/* Header Section */}
      <div className="header bg-green-600 text-white p-6 text-center rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold">Grocery Feature Coming Soon!</h1>
        <p className="mt-2 text-lg">We are working hard to bring this feature to you. Stay tuned for updates!</p>
      </div>

      {/* Coming Soon Message */}
      <div className="coming-soon mt-8 text-center">
        <img
          src={groceryImage} // You can replace this with any image you'd like
          alt="Coming Soon"
          className="w-64 h-64 object-contain mx-auto"
        />
        <p className="mt-4 text-xl font-semibold">The grocery shopping feature will be available shortly. We appreciate your patience!</p>
      </div>

      {/* Call to Action */}
      <div className="cta mt-8 text-center">
        <button
          className="bg-gray-800 text-white px-6 py-3 rounded-lg text-xl hover:bg-gray-700 transition-all"
          disabled
        >
          Stay Updated
        </button>
      </div>
    </div>
  );
};

export default Grocery;
