import { IoMailUnreadSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
const ContactInfo = () => {
  return (
    <div className="max-w-xl mx-auto flex items-center gap-4 text-gray-200 text-xs  md:text-xl mt-6">
      <div className=" flex gap-2 items-center">
        <IoMailUnreadSharp />
        mshakibalhasan21@gmail.com
      </div>
      <div className="w-[2.5px] bg-gray-200 h-4 md:h-7"></div>
      <div className="flex gap-2 items-center">
        <FaPhoneAlt /> +8801641991384
      </div>
    </div>
  );
};

export default ContactInfo;
