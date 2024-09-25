import React from "react";


function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-24 py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Section */}
          <div className="flex flex-col gap-y-8 w-full md:w-1/2">
            <div className="mb-4">
              <h3 className="text-3xl font-grotesk md:text-5xl font-semibold">
                Feel free to connect <br /> with us!
              </h3>
            </div>
            <div className="flex items-center">
              {/* Social media icons */}
              <a href="#" className="mr-4">
                <img src="./x.png" alt="x" />
              </a>
              <a href="#" className="mr-4">
                <img src="./insta.png" alt="Instagram" />
              </a>
              <a href="#" className="mr-4">
                <img src="./pix.png" alt="Pinterest" />
              </a>
              <a href="#" className="mr-4">
                <img src="./Be.png" alt="Behance" />
              </a>
            </div>
            <p className="flex items-center mt-2">
              <img
                src="./email-icon.png"
                alt="Email"
                className="w-6 h-6 mr-2"
              />
              <a href="mailto:your@email.com">your@email.com</a>
            </p>
            <p className="flex items-center">
              <img
                src="./phone-icon.png"
                alt="Phone"
                className="w-6 h-6 mr-2"
              />
              +123 456 7890
            </p>
          </div>

          {/* Right Section: Contact Form */}
          <div className="flex flex-col w-full md:w-1/2 mt-8 md:mt-0">
            <div className="mb-6">
              <label className="block mb-1 text-lg font-medium" htmlFor="name">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                className="w-full border-b-2 border-zinc-900 bg-transparent text-white focus:outline-none py-2"
                placeholder="Your name"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block mb-1 text-lg font-medium" htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                className="w-full border-b-2 border-zinc-900 bg-transparent text-white focus:outline-none py-2"
                placeholder="Your email address"
                required
              />
            </div>

            <div className="mb-6">
              <label
                className="block mb-1 text-lg font-medium"
                htmlFor="message"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full border-b-2 border-zinc-900 bg-transparent text-white focus:outline-none py-2"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>

            <button className="flex text-white items-center justify-center gap-x-2 w-32 py-3 px-3 rounded-full border border-white">
              <p>Send</p>
              <img src="./arrow.png" alt="Send" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
