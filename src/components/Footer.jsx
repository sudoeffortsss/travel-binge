import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="mx-8 mb-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-400 text-sm">
            We are dedicated to bringing you the best travel experiences.
            Discover new destinations, unique accommodations, and unforgettable
            adventures.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/destinations" className="hover:text-primary">
                Destinations
              </Link>
            </li>
  
            <li>
              <Link to="/contact-us" className="hover:text-primary">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 hover:text-primary"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 hover:text-primary"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-primary"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-primary"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center border-t border-gray-700 pt-4 mt-8 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} BingeTravel. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;