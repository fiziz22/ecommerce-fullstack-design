import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 px-6 py-10 mt-10 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* Logo & Description */}
        <div className="md:col-span-2">
          <div className="flex items-center mb-3">
            <img src="/logo-symbol.png" alt="Brand Logo" className="h-8 w-8 mr-2" />
            <h2 className="text-2xl font-bold">Brand</h2>
          </div>
          <p className="text-sm mb-4">Your trusted marketplace for premium products and unbeatable deals worldwide.</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-500 hover:text-black"><FaFacebookF /></a>
            <a href="#" className="text-gray-500 hover:text-black"><FaInstagram /></a>
            <a href="#" className="text-gray-500 hover:text-black"><FaTwitter /></a>
            <a href="#" className="text-gray-500 hover:text-black"><FaLinkedin /></a>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold mb-3">About</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-black">About Us</a></li>
            <li><a href="#" className="hover:text-black">Careers</a></li>
            <li><a href="#" className="hover:text-black">Blog</a></li>
            <li><a href="#" className="hover:text-black">Press</a></li>
          </ul>
        </div>

        {/* Partnership */}
        <div>
          <h3 className="font-semibold mb-3">Partnership</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-black">Become a Seller</a></li>
            <li><a href="#" className="hover:text-black">Affiliate Program</a></li>
            <li><a href="#" className="hover:text-black">Logistics Partner</a></li>
          </ul>
        </div>

        {/* For Users */}
        <div>
          <h3 className="font-semibold mb-3">For Users</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-black">Help Center</a></li>
            <li><a href="#" className="hover:text-black">Order Tracking</a></li>
            <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-black">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Get App */}
      {/* Get App */}
<div>
<div className="flex flex-col items-start">
  <h3 className="font-semibold mb-2">Get Our App</h3>
  <img src="/gpap.jpg" alt="Google Play" className="h-22 w-auto" />
</div>

</div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t pt-6 text-sm text-center text-gray-500">
        &copy; {new Date().getFullYear()} Brand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
