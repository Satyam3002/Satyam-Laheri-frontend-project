export default function Service() {
    return (
      <div className="flex flex-col gap-y-24 px-24 py-16 bg-zinc-900">
        <div className="flex flex-col lg:flex-row gap-x-44">
          <div className="flex justify-center mb-4 lg:mb-0">
            <div className="w-4 h-4 bg-white rounded-full mt-4 mr-4"></div>
            <p className="text-4xl text-white">Our Services</p>
          </div>
          <div>
            <span className="text-white text-4xl">
              We are a close-knit team of experts
              <br />
              dedicated to crafting memorable and <br />
              <span className="text-gray-700">
                emotionally engaging websites, digital <br />
                experiences, and native apps.
              </span>
            </span>
          </div>
        </div>
  
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-2">
          {/* Service Card */}
          <div className="flex flex-col w-full lg:w-1/3 hover:bg-blue-700 rounded-xl text-white px-4 py-6 transition duration-300 ease-in-out">
            <div className="flex flex-row justify-between items-center">
              <p className="text-4xl">BRAND IDENTITY</p>
              <img src="./arrow.png" alt="Arrow icon" className="h-6 w-6" />
            </div>
            <p className="mt-4">
              We provide digital solutions such as Website Design,
              <br />
              Mobile App Design, Landing Page Design,
              <br />
              Illustration, Animation, etc.
              <br />
              that increase company value.
            </p>
          </div>
  
          {/* Repeat for other service cards */}
          <div className="flex flex-col w-full lg:w-1/3 hover:bg-blue-700 rounded-xl text-white px-4 py-6 transition duration-300 ease-in-out">
            <div className="flex flex-row justify-between items-center">
              <p className="text-4xl">BRAND IDENTITY</p>
              <img src="./arrow.png" alt="Arrow icon" className="h-6 w-6" />
            </div>
            <p className="mt-4">
              We provide digital solutions such as Website Design,
              <br />
              Mobile App Design, Landing Page Design,
              <br />
              Illustration, Animation, etc.
              <br />
              that increase company value.
            </p>
          </div>
  
          <div className="flex flex-col w-full lg:w-1/3 hover:bg-blue-700 rounded-xl text-white px-4 py-6 transition duration-300 ease-in-out">
            <div className="flex flex-row justify-between items-center">
              <p className="text-4xl">BRAND IDENTITY</p>
              <img src="./arrow.png" alt="Arrow icon" className="h-6 w-6" />
            </div>
            <p className="mt-4">
              We provide digital solutions such as Website Design,
              <br />
              Mobile App Design, Landing Page Design,
              <br />
              Illustration, Animation, etc.
              <br />
              that increase company value.
            </p>
          </div>
        </div>
      </div>
    );
  }
  