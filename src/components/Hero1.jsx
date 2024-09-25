export default function Hero1() {
    return (
        <div className="flex flex-col py-12 px-6 lg:px-20 bg-black gap-y-20 text-white relative">
            <div>
                <p className="text-6xl lg:text-9xl font-medium">
                    We create award <br /> winning websites
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-x-28">
                <div className="flex flex-col gap-y-6">
                    <p className="text-xl">
                        Based in San Francisco, we're a digital <br />
                        products design & development studio that is passionate about creating <br />
                        the high applicability of digital experiences.
                    </p>
                    <div className="items-center w-fit py-3 px-6 rounded-full border-2">
                        <span>Explore</span>
                    </div>
                </div>

                <div className="flex justify-center relative">
                    <img src="./Frame.png" alt="Frame Illustration" className="w-full lg:w-auto" />
                    {/* Positioned ellipse image with increased size */}
                    <img
                        src="./ellipse2.png"
                        alt="Shadow Ellipse"
                        className="absolute inset-0 w-full h-full object-cover opacity-50"
                    />
                </div>
            </div>
        </div>
    );
}
