import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#24543c] text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
          KeenKeeper
        </h2>

        <p className="text-xs md:text-sm text-gray-200 mb-6 leading-snug">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <div className="mb-8">
          <h3 className="text-sm font-semibold mb-3 uppercase tracking-wider">
            Social Links
          </h3>
          <div className="flex gap-4">
            {/* Instagram */}
            <a
              href="#"
              className="group relative w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#24543c] overflow-hidden transition-all duration-500 shadow-sm"
            >
              <span className="absolute inset-0 bg-[#1a3d2c] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>

              <div className="relative z-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaInstagram
                  size={20}
                  className="group-hover:scale-0 transition-all duration-300 absolute"
                />
                <FiInstagram
                  size={20}
                  className="scale-0 group-hover:scale-100 text-white transition-all duration-300"
                />
              </div>
            </a>

            {/* Facebook */}
            <a
              href="#"
              className="group relative w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#24543c] overflow-hidden transition-all duration-500 shadow-sm"
            >
              <span className="absolute inset-0 bg-[#1a3d2c] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>

              <div className="relative z-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaFacebookF
                  size={18}
                  className="group-hover:scale-0 transition-all duration-300 absolute"
                />
                <FiFacebook
                  size={18}
                  className="scale-0 group-hover:scale-100 text-white transition-all duration-300"
                />
              </div>
            </a>

            {/* Twitter/X */}
            <a
              href="#"
              className="group relative w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#24543c] overflow-hidden transition-all duration-500 shadow-sm"
            >
              <span className="absolute inset-0 bg-[#1a3d2c] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>

              <div className="relative z-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaXTwitter
                  size={18}
                  className="group-hover:scale-0 transition-all duration-300 absolute"
                />
                <RiTwitterXLine
                  size={18}
                  className="scale-0 group-hover:scale-100 text-white transition-all duration-300"
                />
              </div>
            </a>
          </div>
        </div>

        <div className="w-full pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-gray-300  tracking-widest">
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
