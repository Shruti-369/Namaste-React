import React from "react";

const Footer = () => {
  return (
    <footer className="bg-orange-400 text-[#1f1f1f] px-[80px] py-[50px] font-[Arial,Helvetica,sans-serif]">
      
      {/* Top Section */}
      <div className="flex gap-[60px]">
        
        {/* Brand */}
        <div className="min-w-[220px]">
          <h2 className="text-[28px] font-bold">Swiggy</h2>
          <p className="mt-2 text-[14px] opacity-80">
            © 2025 Swiggy Limited
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-4 gap-[40px] w-full">
          
          {/* Company */}
          <div>
            <h4 className="mb-[15px] text-[18px] font-bold">Company</h4>
            <p className="my-2 text-[15px] cursor-pointer">About Us</p>
            <p className="my-2 text-[15px] cursor-pointer">Swiggy Corporate</p>
            <p className="my-2 text-[15px] cursor-pointer">Careers</p>
            <p className="my-2 text-[15px] cursor-pointer">Team</p>
            <p className="my-2 text-[15px] cursor-pointer">Swiggy One</p>
          </div>

          {/* Contact + Legal */}
          <div>
            <h4 className="mb-[15px] text-[18px] font-semibold">Contact us</h4>
            <p className="my-2 text-[15px] cursor-pointer">Help & Support</p>
            <p className="my-2 text-[15px] cursor-pointer">Partner With Us</p>
            <p className="my-2 text-[15px] cursor-pointer">Ride With Us</p>

            <h4 className="mt-[25px] mb-[15px] text-[18px] font-semibold">
              Legal
            </h4>
            <p className="my-2 text-[15px] cursor-pointer">Terms & Conditions</p>
            <p className="my-2 text-[15px] cursor-pointer">Cookie Policy</p>
            <p className="my-2 text-[15px] cursor-pointer">Privacy Policy</p>
          </div>

          {/* Cities */}
          <div>
            <h4 className="mb-[15px] text-[18px] font-semibold">Available in:</h4>
            <p className="my-2 text-[15px]">Bangalore</p>
            <p className="my-2 text-[15px]">Gurgaon</p>
            <p className="my-2 text-[15px]">Hyderabad</p>
            <p className="my-2 text-[15px]">Delhi</p>
            <p className="my-2 text-[15px]">Mumbai</p>

            <div className="mt-3 px-3 py-2 bg-white rounded-lg text-[14px] w-fit cursor-pointer">
              685 cities ▼
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-[15px] text-[18px] font-semibold">Life at Swiggy</h4>
            <p className="my-2 text-[15px] cursor-pointer">Explore With Swiggy</p>
            <p className="my-2 text-[15px] cursor-pointer">Swiggy News</p>
            <p className="my-2 text-[15px] cursor-pointer">Snackables</p>

            <h4 className="mt-[25px] mb-[15px] text-[18px] font-semibold">
              Social Links
            </h4>

            <div className="flex gap-[10px] mt-2">
              {["in", "ig", "f", "p", "x"].map((i) => (
                <span
                  key={i}
                  className="bg-black/10 px-[10px] py-[6px] rounded-md font-bold cursor-pointer"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Divider */}
      <hr className="my-[40px] h-px bg-black/20 border-none" />

      {/* Bottom */}
      <div className="flex justify-between items-center">
        <h3 className="text-[20px] font-semibold">
          For better experience, download the Swiggy app now
        </h3>

        <div>
          <button className="ml-[15px] px-[20px] py-[10px] rounded-lg  bg-black text-white">
            App Store
          </button>
          <button className="ml-[15px] px-[20px] py-[10px] rounded-lg  bg-black text-white">
            Google Play
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
