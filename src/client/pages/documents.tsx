export const Documents = () => {
  return (
    <div className="w-full px-5 xl:px-0 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-10 gap-4 text-xl">
        <span className=" col-span-2 h-screen border-r pr-5 font-light">
          <div className="p-3 mt-5 my-7 text-xs bg-stone-800 text-white rounded-lg">
            <h6 className=" text-md">Join to DeMentor 👇</h6>
          </div>
          <h4 className=" text-base text-stone-800 ml-2 font-normal">
            Getting started
          </h4>
          <div className=" text-base ml-4 text-stone-700">
            <div className="mt-2">Installation</div>
            <div className="mt-2">Setting</div>
          </div>
          <h4 className=" text-base mt-7 text-stone-800 ml-2  font-normal">
            Core concept
          </h4>
          <div className=" text-base ml-4 text-stone-700">
            <div className="mt-2">Responsive Design</div>
            <div className="mt-2">Dark mode</div>
            <div className="mt-2">Patterns</div>
            <div className="mt-2">Research</div>
          </div>

        </span>

        <span className="col-span-8 ">
          <div className="grid grid-cols-10 p-6 pr-0 my-4">
            <span className=" col-span-8 ">
                <h6 className=" font-extralight font-mono text-sm ">Saturday, December 18, 2021</h6>
                <h2 className=" font-semibold text-4xl mt-3">Effortless Typography, Even in Dark Mode</h2>
                <p className=" font-light my-3">Today we’re announcing the next version of the Tailwind CSS Typography plugin, which brings easy dark mode support, a brand new customization API, and the not-prose class I wasn’t sure we’d ever figure out how to support.</p>
                <div className=" h-[300px] bg-slate-900 my-3 rounded-sm"></div>
            </span>
            <span className=" col-span-2 ">
                <div className="grid grid-cols-3 pl-5 pt-8">
                    <span className=" rounded-lg bg-stone-50 col-span-1 w-12 h-12"></span>
                    <span className=" col-span-2 border-r-8 border-[#fc4a1e]">
                        <p className=" font-extralight text-lg">Jake</p>
                        <p className=" text-xs  text-stone-700">@sa96125</p>
                    </span>
                </div>
            </span>
          </div>
        </span>
      </div>
    </div>
  );
};
