export default function Hero2() {
  return (
    <div className="bg-black py-12 lg:py-24">
      <div className="flex flex-col lg:flex-row text-white gap-y-10 lg:gap-x-32 px-6 lg:px-20">
        <div className="flex flex-col gap-y-8">
          <p className="text-lg lg:text-xl">Who are we?</p>
          <div className="items-center w-72 h-28 bg-blue-600 py-3 px-8 rounded-full border-2"></div>
        </div>

        <div className="text-2xl lg:text-4xl gap-y-6 flex flex-col">
          <span>
            We create mind-blowing visuals, brands,
            <br />
            websites, and products&nbsp;
            <span className="text-gray-700">
              that help startups <br />
              and innovative companies gain more <br />
              exposure.
            </span>
          </span>

          <div className="items-center text-base lg:text-lg w-fit py-1 px-6 bg-blue-800 rounded-full border border-black">
            <span>Learn more</span>
          </div>
        </div>
      </div>

      <img className="py-12 lg:py-24" src="./wrapper.png" alt="" />
    </div>
  );
}
