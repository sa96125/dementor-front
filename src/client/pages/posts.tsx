

export const Posts = () => {
  return (
    <div className="w-full px-5 xl:px-0 max-w-screen-xl mx-auto h-screen">
      <div className=" h-[250px] flex flex-col justify-center items-center">
        <h2 className=" font-serif font-bold text-4xl">De Blog</h2>
        <h6 className=" mt-4 text-stone-700">
          All the latest Dementor news, straight from the team.
        </h6>
      </div>

      <div className=" max-w-4xl grid grid-cols-10 mb-20  mx-auto">
        <span className=" col-span-2 pt-[2px] font-mono ">
          December 18, 2022
        </span>
        <span className=" col-span-8">
          <h2 className=" text-xl font-semibold mb-3 border-b-8 border-[#ff7a68]">
            Effortless Typography, Even in Dark Mode
          </h2>
          <h4>
            Today we’re announcing the next version of the Tailwind CSS
            Typography plugin, which brings easy dark mode support, a brand new
            customization API, and the not-prose class I wasn’t sure we’d ever
            figure out how to support.
          </h4>
        </span>
      </div>

      <div className=" max-w-4xl grid grid-cols-10 text-stone-600 mx-auto">
        <span className=" col-span-2 pt-[2px] font-mono ">January 5, 2022</span>
        <span className=" col-span-8">
          <h2 className=" text-xl font-semibold mb-3">
            Standalone CLI: Use Tailwind CSS without Node.js
          </h2>
          <h4>
            Tailwind CSS is written in JavaScript and distributed as an npm
            package, which means you’ve always had to have Node.js and npm
            installed to use it.
          </h4>
        </span>
      </div>
    </div>
  );
};
