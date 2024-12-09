// FILE: /src/components/Maldives.jsx

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import mockMaldives from "../mockMaldives";

const Maldives = () => {
  return (
    <div>
      <Navbar />
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + mockMaldives.image})` }}>
        <div className="bg-black bg-opacity-50 h-full flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center mb-8">{mockMaldives.name}</h1>
        </div>
      </section>
      <section className="py-16 px-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Tropical Paradise</h2>
          <p className="text-lg text-gray-600 mb-8">
            {mockMaldives.description}
          </p>
          <img src={process.env.PUBLIC_URL + mockMaldives.image} alt={mockMaldives.name} className="w-full h-auto rounded-lg shadow-lg" />
          <div className="text-center mt-8">
            <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded">
              Book Now
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Maldives;