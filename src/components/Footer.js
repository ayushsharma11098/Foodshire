/* eslint-disable react/prop-types */
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const SocialIcons = () => (
  <div className="flex items-center mt-5 gap-4">
    <img
      src={facebook}
      alt="facebook logo"
      className="w-6 h-6 hover:scale-110 transition-transform duration-300 cursor-pointer"
    />
    <img
      src={twitter}
      alt="twitter logo"
      className="w-6 h-6 hover:scale-110 transition-transform duration-300 cursor-pointer"
    />
    <img
      src={instagram}
      alt="instagram logo"
      className="w-6 h-6 hover:scale-110 transition-transform duration-300 cursor-pointer"
    />
  </div>
);

const FooterColumn = ({ title, items }) => (
  <div>
    <h3 className="text-heading-text font-semibold text-lg mb-4">{title}</h3>
    <ul className="list-none space-y-2">
      {items.map((item, index) => (
        <li
          key={index}
          className="text-sm text-gray-400 cursor-pointer hover:text-gray-200 transition-colors duration-300"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const SubscribeForm = () => (
  <div className="flex mt-5">
    <input
      type="text"
      placeholder="Enter your email"
      className="flex-grow bg-gray-800 px-4 py-2 rounded-l-full text-sm text-gray-300 outline-none focus:ring-2 focus:ring-green-400"
    />
    <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-r-full text-sm text-white transition-colors">
      Subscribe
    </button>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const aboutItems = ["About Us", "Service Us", "Contact", "Company"];
  const companyItems = ["Partnership", "Terms of Use", "Privacy", "Sitemap"];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-green-400 font-bold text-xl mb-4">Foodshire</h3>
            <p className="text-sm leading-6 mb-4">
              We cater to all your food needs, offering quality and convenience
              at your fingertips.
            </p>
            <SocialIcons />
          </div>

          {/* Column 2 */}
          <FooterColumn title="About Us" items={aboutItems} />

          {/* Column 3 */}
          <FooterColumn title="Company" items={companyItems} />

          {/* Column 4 */}
          <div>
            <h3 className="text-green-400 font-semibold text-lg mb-4">
              Stay Connected
            </h3>
            <p className="text-sm leading-6 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <SubscribeForm />
          </div>
        </div>
        <div className="mt-10 text-center text-sm text-gray-500">
          Copyright © {currentYear} Foodshire. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
