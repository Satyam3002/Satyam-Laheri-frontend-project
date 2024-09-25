export default function Projects() {
    return (
      <div className="flex flex-col lg:flex-row py-24 w-full text-white px-6 lg:px-24 gap-x-16 bg-black">
        <div className="flex flex-col gap-y-24 w-full lg:w-1/3">
          <div className="flex flex-col gap-y-6">
            <div className="h-80 w-full bg-zinc-900 rounded-xl"></div>
            <div className="flex gap-x-4 g">
              <p className="border py-1 px-2 rounded-full">Development</p>
              <p className="border py-1 px-2 rounded-full">UI/UX</p>
              <p className="border py-1 px-2 rounded-full">Illustration</p>
            </div>
            <p className="text-3xl">Roboto Landing page</p>
          </div>
  
          <div className="flex flex-col gap-y-6">
            <div className="h-80 w-full bg-zinc-900 rounded-xl"></div>
            <div className="flex gap-x-4 g">
              <p className="border py-1 px-2 rounded-full">Development</p>
              <p className="border py-1 px-2 rounded-full">UI/UX</p>
              <p className="border py-1 px-2 rounded-full">Illustration</p>
            </div>
            <p className="text-3xl">Roboto Landing page</p>
          </div>
        </div>
  
        <div className="flex w-full flex-col gap-y-16">
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-white rounded-full mt-4 mr-4"></div>
              <p className="text-4xl text-white">Featured Works</p>
            </div>
            <p className="text-4xl">
              Take a look at <br /> our projects
            </p>
          </div>
  
          <div className="flex flex-col gap-y-4">
            <div className="h-80 w-full bg-zinc-900 items-center justify-center flex rounded-xl">
              <button className="flex text-white items-center justify-center gap-x-5 py-3 px-4 rounded-full border border-white">
                <p>View project</p>
                <img src="./arrow.png" alt="" />
              </button>
            </div>
            <div className="flex gap-x-4 g">
              <p className="border py-1 px-2 rounded-full">UI/UX</p>
              <p className="border py-1 px-2 rounded-full">Illustration</p>
            </div>
            <p className="text-3xl">Poppin App Design</p>
          </div>
  
          <div className="flex flex-col gap-y-4">
            <div className="h-80 w-full bg-zinc-900 items-center justify-center flex rounded-xl">
              <button className="flex text-white items-center justify-center gap-x-5 py-3 px-4 rounded-full border border-white">
                <p>View project</p>
                <img src="./arrow.png" alt="" />
              </button>
            </div>
            <div className="flex gap-x-4 g">
              <p className="border py-1 px-2 rounded-full">UI/UX</p>
              <p className="border py-1 px-2 rounded-full">Illustration</p>
            </div>
            <p className="text-3xl">Poppin App Design</p>
          </div>
        </div>
      </div>
    );
  }
  