import { FaCode, FaLaptopCode, FaCloud } from "react-icons/fa";
import mountainImage from "../images/mountain1.jpg";

function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="h-screen bg-cover bg-center w-full flex flex-col justify-center items-center text-white text-center p-10" 
               style={{ backgroundImage: `url(${mountainImage})` }}>
        <h1 className="text-5xl font-bold">Welcome to Tech Mount</h1>
        <p className="mt-4 text-xl">We offer modern web solutions.</p>
      </section>

      <section className="w-full p-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center">
            <FaCode className="text-5xl text-gray-700 mb-4" />
            <h3 className="text-xl font-bold">IT Staffing</h3>
            <p className="text-gray-600 mt-2">Providing top-tier IT professionals for your business.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center">
            <FaLaptopCode className="text-5xl text-gray-700 mb-4" />
            <h3 className="text-xl font-bold">Software Development</h3>
            <p className="text-gray-600 mt-2">Custom software solutions to drive efficiency and innovation.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center">
            <FaCloud className="text-5xl text-gray-700 mb-4" />
            <h3 className="text-xl font-bold">Cloud Solutions</h3>
            <p className="text-gray-600 mt-2">Scalable cloud infrastructure for modern enterprises.</p>
          </div>
        </div>
      </section>

      <section className="w-full p-10 bg-white text-center">
        <h2 className="text-3xl font-bold">More Information</h2>
        <p className="mt-4 text-gray-600">Learn more about our services and offerings.</p>
      </section>
    </div>
  );
}

export default Home;
