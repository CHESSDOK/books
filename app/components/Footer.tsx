// Footer.jsx
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import bookLogo from "../components/books.jpg"; // replace with your local image

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <img src={bookLogo} alt="Logo" className="w-20" />
        </div>

        {/* Pages */}
        <div>
          <h3 className="font-bold mb-3">PAGES</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/terms">Terms and Conditions</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy and Policy</Link>
            </li>
          </ul>
        </div>

        {/* Our Company */}
        <div>
          <h3 className="font-bold mb-3">Our Company</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div>
          <h3 className="font-bold mb-3">STAY CONNECTED</h3>
          <div className="flex space-x-4 mb-2">
            <a href="#">
              <FaInstagram size={24} />
            </a>
            <a href="#">
              <FaFacebook size={24} />
            </a>
            <a href="#">
              <FaTwitter size={24} />
            </a>
          </div>
          <p className="text-sm">Email: example@gmail.com</p>
        </div>
      </div>

      <div className="text-center text-sm border-t border-green-700 mt-8 pt-4">
        © 2025 book site Made by Example.Name.Com
      </div>
    </footer>
  );
}
