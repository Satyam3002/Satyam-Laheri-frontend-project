export default function Testimonial() {
    return (
        <div className="relative flex flex-col">
            <div className="bg-black flex flex-col gap-y-8 lg:flex-row gap-x-72 px-6 lg:px-24 py-16">
                <div className="flex justify-center "> 
                    <div className="w-4 h-4 bg-white rounded-full mt-4 mr-4"></div> 
                    <p className="text-4xl text-white">Testimonials</p>
                </div>

                <div className="flex flex-col gap-y-8 w-full">
                    <p className="text-white text-2xl lg:text-4xl">
                        A studio filled with passion, professionalism,<br />
                        and boundless creativity. They exceeded my <br />
                        expectations with their excellent services,<br />
                        high-quality products, and affordable prices. <br />
                        I'm extremely satisfied!
                    </p>
                    <div className="flex items-center gap-x-5 text-white">
                        <img src="./avatar.png" alt="Kathryn Murphy" className="w-12 h-12 rounded-full" />
                        <div className="flex flex-col">
                            <p className="text-base">Kathryn Murphy</p>
                            <p className="text-sm">Senior Marketing, Spotify</p>
                        </div>
                    </div>
                    <div className="flex gap-x-5">
                        <img src="./left.png" alt="Left Arrow" className="cursor-pointer" />
                        <img src="./right.png" alt="Right Arrow" className="cursor-pointer" />
                    </div>
                </div>
            </div>
            <img 
                src="./Ellipse.png" 
                alt="Shadow Effect" 
                className="absolute bottom-0 left-1/3 transform -translate-x-1/2 w-full" 
                style={{ maxHeight: '600px', objectFit: 'cover' }} 
            />
        </div>
    );
}
