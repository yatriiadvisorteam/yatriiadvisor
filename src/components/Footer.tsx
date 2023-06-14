"use client "
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-button text-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 lg:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="flex items-center mb-2">
              <FaMapMarkerAlt className="mr-2" />
              <p>123 Street, City, Country</p>
            </div>
            <div className="flex items-center mb-2">
              <FaPhone className="mr-2" />
              <p>+1 123-456-7890</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2" />
              <p>info@Yatrii Advisor.com</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Explore</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="text-gray-500 hover:text-hover text-white">Destinations</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-500 hover:text-hover text-white">Packages</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-500 hover:text-hover text-white">Hotels</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-500 hover:text-hover text-white">Flights</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center mb-4">
              <a href="#" className="text-gray-500 hover:text-hover text-white mr-4">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-500 hover:text-hover text-white mr-4">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-500 hover:text-hover text-white">
                <FaInstagram />
              </a>
            </div>
            <p className="text-gray-500 text-sm">&copy; 2023 Yatrii Advisor. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
