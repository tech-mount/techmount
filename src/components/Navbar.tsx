import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">TechMount</Link>
      <div className="space-x-4">
        <Link to="/services" className="hover:text-gray-400">Services</Link>
        <Link to="/contact" className="hover:text-gray-400">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;