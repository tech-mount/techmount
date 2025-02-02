import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-10 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-left">
        <div>
          <h2 className="text-xl font-bold">About Us</h2>
          <p className="text-gray-400 mt-2">Welcome to TechMount Inc. We are XYZ xyz XYZ xyz XYZ xyz XYZ xyz XYZ xyz XYZ xyz XYZ xyz XYZ xyz XYZ xyz XYZ xyz XYZ xyz XYZ xyz XYZ xyz XYZ xyz XYZ xyz XYZ xyz XYZ xyz XYZ xyz XYZ xyz XYZ xyz XYZ xyz XYZ xyz XYZ xyz.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Our Services</h2>
          <ul className="text-gray-400 mt-2">
            <li>IT Staffing</li>
            <li>Software Development</li>
            <li>Cloud Solutions</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold">Contact Info</h2>
          <ul className="text-gray-400 mt-2">
            <li>(111) 111-1111</li>
            <li>info@techmount.com</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold">Follow Us</h2>
          <div className="flex space-x-4 mt-2">
            <FaFacebook className="text-2xl cursor-pointer hover:text-gray-400" />
            <FaTwitter className="text-2xl cursor-pointer hover:text-gray-400" />
            <FaLinkedin className="text-2xl cursor-pointer hover:text-gray-400" />
          </div>
        </div>
      </div>
      <p className="text-gray-500 text-center mt-8">&copy; 2024 TechMount Inc. All rights reserved.</p>
    </footer>
  );
}

export default Footer;