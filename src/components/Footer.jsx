import React from "react";

const Footer = () => {
  return (
    <div className="bg-emerald-900 text-white text-center p-2 fixed bottom-0 w-full ">
      <p className=""> © 2023 FARMen. All rights reserved.</p>
      <p className="">
        For more information, inquiries, or support, please reach out to us at{" "}
        <a
          href="mailto:sajalrastogi795@gmail.com"
          className="text-amber-500 "
        >
          FARMen Support
        </a>
      </p>
    </div>
  );
};

export default Footer;
