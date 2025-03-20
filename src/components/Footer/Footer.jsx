import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons'; 
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1E293B] text-white py-16 px-5 md:px-20 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 md:gap-20">
        
        
        <div className="space-y-6 flex flex-col items-start">
          <h2 className="text-3xl font-extrabold text-[#F97316] mb-3">QuickBites</h2>
          <p className="text-lg text-[#D1D5DB]">
            We bring delicious meals straight to your door. Satisfy your cravings with just a click!
          </p>
          <div className="flex items-center gap-4 mt-6">

            <a href="https://www.instagram.com/s.lxshya/" target="_blank" rel="noopener noreferrer" className="hover:text-[#F97316]">
              <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
            </a>
            <a href="https://github.com/slakshya-22" target="_blank" rel="noopener noreferrer" className="hover:text-[#F97316]">
              <FontAwesomeIcon icon={faGithub} className="text-3xl" />
            </a>
            <a href="https://www.linkedin.com/in/lakshya-sharma-062a1428b/" target="_blank" rel="noopener noreferrer" className="hover:text-[#F97316]">
              <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
            </a>

          </div>
        </div>

        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-semibold text-[#F97316] mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/" className="text-lg hover:text-[#F97316]">Home</Link></li>
            <li><Link to="/menu" className="text-lg hover:text-[#F97316]">Menu</Link></li>
            <li><Link to="/cart" className="text-lg hover:text-[#F97316]">Cart</Link></li>
            <li><a href="#contact" className="text-lg hover:text-[#F97316]">Contact Us</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-semibold text-[#F97316] mb-4">Contact Us</h3>
          <ul className="space-y-3 text-lg">
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#F97316]" />
              <span>Jodhpur, Rajasthan</span>
            </li>
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faPhoneAlt} className="text-[#F97316]" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faEnvelope} className="text-[#F97316]" />
              <span>support@quickbites.com</span>
            </li>
          </ul>
        </div>
     
        <div className="flex flex-col justify-between md:col-span-1 lg:col-span-1">
          <h3 className="text-2xl font-semibold text-[#F97316] mb-4">Our Services</h3>
          <p className="text-lg text-[#D1D5DB]">
            QuickBites offers fast food delivery across Jaipur. From snacks to full meals, we’ve got it all!
          </p>
          <ul className="space-y-3 mt-6 text-lg text-[#D1D5DB]">
            <li>24/7 Delivery</li>
            <li>Fast & Fresh</li>
            <li>Order Online</li>
            <li>Special Offers</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm">
        &copy; {new Date().getFullYear()} QuickBites. All Rights Reserved. | Crafted with <span className="text-[#F97316]">❤️</span> by <strong>Lakshya Sharma</strong>.
      </div>
    </footer>
  );
};

export default Footer;
