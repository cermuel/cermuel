import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full max-md:mt-20 h-screen flex items-center flex-wrap justify-center"
    >
      <div className="w-full">
        <div className="flex items-center gap-2">
          <div className="text-white font-semibold text-3xl">
            <span className="text-[#0EE6B7]">#</span>
            contact
          </div>
          <div className="w-[170px] h-[2px] bg-pry-color"></div>
        </div>
      </div>
      <div className="w-full flex md:justify-between">
        <div className="w-[45%] max-md:w-full text-[#ABB2BF] font-medium tracking-tight">
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me
        </div>
        <div className="w-[45%] max-md:hidden text-right text-[#cccccc]">
          <span className="text-lg text-white font-medium">Email:</span>{" "}
          samuelobasi2005@gmail.com
        </div>
      </div>
      <div className="w-full flex justify-center flex-wrap gap-6">
        <div className="flex w-full max-md:flex-wrap justify-between gap-6">
          <input
            type="text"
            className="text-white focus:border-[#0EE6B7] w-[49%] max-md:w-full border-[1px] border-[#ABB2BF] bg-transparent outline-none p-2"
            placeholder="Name"
          />{" "}
          <input
            type="email"
            className="text-white focus:border-[#0EE6B7] w-[49%] max-md:w-full border-[1px] border-[#ABB2BF] bg-transparent outline-none p-2"
            placeholder="Email"
          />
        </div>
        <div className="flex w-full flex-wrap justify-between gap-6">
          <input
            type="text"
            className="text-white focus:border-[#0EE6B7] w-full border-[1px] border-[#ABB2BF] bg-transparent outline-none p-2"
            placeholder="Title"
          />
        </div>{" "}
        <div className="flex w-full flex-wrap justify-between gap-6">
          <textarea
            type="text"
            className="text-white focus:border-[#0EE6B7] w-full border-[1px] border-[#ABB2BF] bg-transparent outline-none p-2"
            placeholder="Message"
            rows={10}
          />
        </div>
        <div className="cursor-pointer hover:bg-pry-color hover:text-black border-[1px] border-pry-color py-3 px-6 text-white mr-auto">
          Send
        </div>
      </div>
    </section>
  );
};

export default Contact;
