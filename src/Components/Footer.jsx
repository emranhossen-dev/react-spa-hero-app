import { Link } from "react-router";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3 text-white">
            <img src={logo} alt="Hero App Logo" className="w-10" />
            <span className="text-2xl font-bold tracking-wide">HERO</span>
          </Link>

          <p className="text-sm text-center md:text-left max-w-md">
            HERO is a modern platform to explore powerful apps that improve
            productivity, creativity, and performance.
          </p>

          <Link
            to="/apps"
            className="px-6 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
          >
            Explore Apps
          </Link>
        </div>

        <div className="my-8 border-t border-gray-800" />

        <div className="flex flex-col md:flex-row items-center justify-between text-sm gap-4">
          <p>© {new Date().getFullYear()} HERO App. All rights reserved.</p>
          <p className="text-gray-500">
            Designed & Developed by <span className="text-white">Emran</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
