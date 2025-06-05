import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-gray-100 text-black py-12 px-6 md:px-12 font-[inter] ">
        <div className="w-full  flex flex-col md:flex-row justify-between gap-12">
        {/* Left Section - Info Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold mb-3 text-sm">ABOUT US</h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#">Corporate Responsibility</a></li>
              <li><a href="#">Investors</a></li>
              <li><a href="#">Media Center</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold mb-3">BUSINESS</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">Partnerships</a></li>
              <li><a href="#">B2B</a></li>
              <li><a href="#">Wholesale</a></li>
              <li><a href="#">International</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold mb-3">CONTACT US</h3>
            <ul className="space-y-2 text-sm">
              <li>
                Sri Lanka Telecom PLC,<br />
                Lotus Road, P.O. Box 503<br />
                Colombo 01, Sri Lanka.
              </li>
              <li>Telephone: +94 11 202 0000</li>
              <li>Email: pr@sltnet.lk</li>
              <li>Monday to Friday: 9am to 5pm</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-bold mb-3">CUSTOMER SUPPORT</h3>
            <ul className="space-y-2 text-sm">
              <li>Telephone: 1212</li>
              <li>Email: 1212@sltnet.lk</li>
              <li>Self Service: +94 11 2 121 212</li>
            </ul>
          </div>
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex items-start justify-center md:justify-end gap-4 text-2xl">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaTiktok /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
