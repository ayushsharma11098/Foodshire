// import User from "./User";
import teamImage from "../../assets/team.png"; 
import { FaUsers, FaRegLightbulb } from "react-icons/fa"; 

const About = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 via-purple-200 to-pink-200 min-h-screen text-gray-800">
      <div className="container mx-auto p-6">
        {/* About Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-lg text-gray-700">
            We are a passionate team committed to delivering the best services in food delivery. Our mission is to make your life easier.
          </p>
        </div>

        {/* Team Section */}
       

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <FaRegLightbulb className="text-yellow-500 text-4xl mb-4 mx-auto" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Our Mission</h2>
            <p className="text-lg text-gray-700">
              To revolutionize the way people interact with technology, offering innovative and user-friendly solutions that simplify everyday tasks.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <FaUsers className="text-green-500 text-4xl mb-4 mx-auto" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Our Team</h2>
            <p className="text-lg text-gray-700">
              Our team is a diverse group of passionate individuals who work collaboratively to make your experience better. We believe in growth and creativity.
            </p>
          </div>
        </div>

        {/* Team Image Section */}
        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <img src={teamImage} alt="Team" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default About;
