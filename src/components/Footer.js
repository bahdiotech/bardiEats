import React from "react";

import {
  FaWhatsappSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]">
      <div className="py-16 px-4 flex mdMobile:basis-full mdMobile:flex-col lg:flex-row  text-gray-300">
        <div className="">
          <h1 className="w-full grid mb-3 text-3xl font-bold text-orange-500">
            BardiEats
          </h1>
          <p>
            To get an amazing and even more better web app like designed with
            react.js or either native html, CSS and javascript you can contact
            me bellow on any platform you see fit, I am always available to make
            UI easy. <br />
            bardi At your service bye and thank you.....
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <a href="https://www.facebook.com/abraham.adeniran.35?mibextid=LQQJ4d" target="_blank" rel='noreferrer'>
            <FaFacebookSquare size={30} /></a>
            <a href="https://instagram.com/bardi_i_?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr" target="_blank" rel='noreferrer'>
            <FaInstagram size={30} />
            </a>
            <a href="https://twitter.com/i_am_gbohunmi" target="_blank" rel='noreferrer'>
            <FaTwitter size={30} />
            </a>
            <a href="https://github.com/bahdiotech"  target="_blank" rel='noreferrer'>
            <FaGithubSquare size={30} />
            </a>
            <a href="https://wa.me/message/EDIISAM5BLEEM1" target="_blank" rel='noreferrer'>
            <FaWhatsappSquare size={30} />
            </a>
          </div>
        </div>
        
      </div>
      <span className="flex text-sm justify-center text-white items-center">©Barditech™ 2023 </span>
    </div>
  );
};

export default Footer;
