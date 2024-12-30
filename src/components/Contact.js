import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import contactImage from "../../assets/contact-image.png"; 

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 via-purple-200 to-pink-200 min-h-screen text-gray-800">
      <div className="container mx-auto p-6">
        {/* Contact Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have a question or just want to say hello, feel free to reach out to us.
          </p>
        </div>

        {/* Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Enter your message"
                  className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Contact Details</h2>
            <div className="flex items-center mb-6">
              <FaPhoneAlt className="text-blue-600 text-3xl mr-4" />
              <p className="text-lg text-gray-700">+1 123-456-7890</p>
            </div>
            <div className="flex items-center mb-6">
              <FaEnvelope className="text-blue-600 text-3xl mr-4" />
              <p className="text-lg text-gray-700">contact@yourdomain.com</p>
            </div>
            <div className="flex items-center mb-6">
              <FaMapMarkerAlt className="text-blue-600 text-3xl mr-4" />
              <p className="text-lg text-gray-700">123 Street, City, Country</p>
            </div>
            <div className="flex space-x-6 mt-8">
              <a href="#" className="text-blue-600 text-3xl hover:text-blue-800 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="text-blue-600 text-3xl hover:text-blue-800 transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="text-blue-600 text-3xl hover:text-blue-800 transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-6">Our Location</h2>
          <div className="w-full h-96 bg-gray-300 rounded-lg shadow-lg">
            {/* Embed Google Map or Map Image */}
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.014838567604!2d77.3250!3d28.5650!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfbe0242060bf%3A0x9d5dbf2646ff1e65!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1631847316222!5m2!1sen!2sin"
  width="100%"
  height="100%"
  frameBorder="0"
  style={{ border: 0 }}
  allowFullScreen=""
  aria-hidden="false"
  tabIndex="0"
/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
