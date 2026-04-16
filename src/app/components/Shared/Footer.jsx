import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#24543c] text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Logo and Text Container */}
        <div className="flex items-center gap-3 mb-3">
          {/* K Logo Div */}
          <div
            className="bg-white text-[#1a3a30] 
                
                px-2 py-0.5 text-xl 
                
                sm:px-2.5 sm:py-1 sm:text-2xl 
                
                md:px-3 md:py-1 md:text-3xl 
                font-bold rounded-lg shadow-sm"
          >
            K
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            KeenKeeper
          </h2>
        </div>

        <p className="text-xs md:text-sm text-gray-200 mb-6 leading-snug">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <div className="mb-8">
          <h3 className="text-sm font-semibold mb-3 uppercase tracking-wider">
            Social Links
          </h3>
          <div className="flex gap-4">
            {/* Social Icons (Instagram, Facebook, Twitter) - Same as your code */}
            {/* ... */}
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="w-full pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-gray-300 tracking-widest">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-4 md:gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
