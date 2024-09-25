export default function Leader() {
  return (
    <div className="flex flex-col text-white py-12 lg:py-24 px-6 lg:px-24 gap-y-12  bg-black">
      <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-x-36">
        <div className="flex justify-center ">
          <div className="w-4 h-4 bg-white rounded-full mt-4 mr-4"></div>
          <p className="text-4xl text-white">Testimonials</p>
        </div>
        <p className="text-4xl">
          Each product is crafted with passion and <br />
          dedication. Meet our leader!
        </p>
      </div>

      <div className="flex flex-col lg:pl-60 gap-y-8">
        <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-x-6">
          <div className="w-full lg:w-2/5 h-32 py-2 rounded-full border"></div>
          <div className="flex flex-row w-full lg:w-1/3 border  rounded-full overflow-hidden">
            <div className="w-1/2 bg-blue-500 h-full"></div>
            <div className="flex flex-col gap-y-1 bg-blue-700 w-1/2 p-2">
              <p>Cody Fisher</p>
              <p className="text-sm">CEO Founder</p>
              <div className="flex gap-x-1">
                <img className="w-8 h-8" src="./x.png" alt="x icon" />
                <img
                  className="w-8 h-8"
                  src="./insta.png"
                  alt="Instagram icon"
                />
                <img className="w-8 h-8" src="./Be.png" alt="LinkedIn icon" />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/5 h-32 py-2 rounded-full border"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-x-6">
          <div className="w-full lg:w-2/5 h-32 py-2 rounded-full border"></div>
          <div className="flex flex-row w-full lg:w-1/3 rounded-full border overflow-hidden">
            <div className="w-1/2 bg-zinc-800 h-full"></div>
            <div className="flex flex-col gap-y-1 bg-zinc-900 w-1/2 p-2">
              <p>Cody Fisher</p>
              <p className="text-sm">CEO Founder</p>
              <div className="flex gap-x-1">
                <img className="w-8 h-8" src="./x.png" alt="x icon" />
                <img
                  className="w-8 h-8"
                  src="./insta.png"
                  alt="Instagram icon"
                />
                <img className="w-8 h-8" src="./Be.png" alt="" />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/12 h-32 py-2  rounded-full border"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-x-6">
          <div className="w-full lg:w-2/5 h-32 py-2 rounded-full border"></div>
          <div className="flex flex-row w-full lg:w-1/3 border  rounded-full overflow-hidden">
            <div className="w-1/2 bg-zinc-800 h-full"></div>
            <div className="flex flex-col gap-y-1 bg-zinc-900  w-1/2 p-2">
              <p>Cody Fisher</p>
              <p className="text-sm">CEO Founder</p>
              <div className="flex gap-x-1">
                <img className="w-8 h-8" src="./x.png" alt="x icon" />
                <img
                  className="w-8 h-8"
                  src="./insta.png"
                  alt="Instagram icon"
                />
                <img className="w-8 h-8" src="./Be.png" alt="LinkedIn icon" />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/5 h-32 py-2 rounded-full border"></div>
        </div>
      </div>
    </div>
  );
}
