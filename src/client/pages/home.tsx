import { Link } from 'react-router-dom';

const DEV = '/src/client/assets/img/test.png';
const MAGAZINE = '/src/client/assets/img/portrait.jpg';
const YOUTUBE = '/src/client/assets/img/youtube.png';
const UDEMY = '/src/client/assets/img/udemy.svg';
const WALLPAPER = '/src/client/assets/img/marble.jpeg';

const data = [
  {
    id: 1,
    rate: '5.0',
    name: 'nomadcoder',
    description: '#클론코딩 #JavaScript #Typescript #React #Bookclub',
  },
  {
    id: 2,
    rate: '4.9',
    name: '엘리의 드림코딩',
    description: 'full stack nicolas',
  },
  {
    id: 3,
    rate : '4.9',
    name: '우아한 데브코스',
    description: 'full stack nicolas',
  },
  {
    id: 4,
    rate : '4.9',
    name: 'nomadcoder',
    description: 'full stack nicolas',
  },
  {
    id: 1,
    rate : '4.8',
    name: 'nomadcoder',
    description: 'JavaScript, Html, Css, Typescript, React',
  },
  {
    id: 2,
    rate : '4.8',
    name: 'nomadcoder',
    description: 'full stack nicolas',
  },
  {
    id: 3,
    rate : '4.8',
    name: 'nomadcoder',
    description: 'full stack nicolas',
  },
  {
    id: 4,
    rate : '4.8',
    name: 'nomadcoder',
    description: 'full stack nicolas',
  },
  {
    id: 1,
    rate : '4.8',
    name: 'nomadcoder',
    description: 'JavaScript, Html, Css, Typescript, React',
  },
  {
    id: 2,
    rate : '4.8',
    name: 'nomadcoder',
    description: 'full stack nicolas',
  },
  {
    id: 4,
    rate : '4.7',
    name: 'nomadcoder',
    description: 'full stack nicolas',
  },
  {
    id: 4,
    rate : '4.7',
    name: 'nomadcoder',
    description: 'full stack nicolas',
  },
  {
    id: 4,
    rate : '4.7',
    name: 'nomadcoder',
    description: 'full stack nicolas',
  },
  {
    id: 4,
    rate : '4.7',
    name: 'nomadcoder',
    description: 'full stack nicolas',
  },
  {
    id: 4,
    rate : '4.7',
    name: 'nomadcoder',
    description: 'full stack nicolas',
  },
  {
    id: 4,
    rate : '4.7',
    name: 'nomadcoder',
    description: 'full stack nicolas',
  },
  {
    id: 4,
    rate : '4.7',
    name: 'nomadcoder',
    description: 'full stack nicolas',
  },
  {
    id: 4,
    rate : '4.7',
    name: 'nomadcoder',
    description: 'full stack nicolas',
  },
  {
    id: 4,
    rate : '4.7',
    name: 'nomadcoder',
    description: 'full stack nicolas',
  },
  {
    id: 4,
    rate : '4.7',
    name: 'nomadcoder',
    description: 'full stack nicolas',
  },
 
];

export const Home = () => {
  return (
      <div className="w-full px-5 xl:px-0 max-w-screen-xl mx-auto">
        <div className=' overflow-hidden h-96 font-serif w-full my-5 text-cyan-50 rounded-lg relative'>
          <img className='w-full -translate-y-[150px]' src={WALLPAPER} alt="" />
          <div className=" absolute top-0 flex flex-col w-full h-full bg-no-repeat items-center justify-center text-center ">
            <h1 className="text-6xl mb-2">Best pick of amazing mentee's</h1>
            <h3 className="text-2xl ">
              A constructive and inclusive social network for software developers.
            </h3>
          </div>
        </div>
        <div className=" grid gap-5 grid-cols-10 ">
          <div className=" sticky top-2 col-span-2">
            <ul>
              <li className=" text-sm font-semibold bg-amber-50 text-black p-3 rounded-md">
                Latest Rank
              </li>
              <li className=" text-zinc-700 text-sm hover:font-semibold hover:bg-amber-50 hover:p-3 pl-3 mt-2 rounded-md">
                Recommend Book's
              </li>
              <li className=" text-zinc-700 text-sm hover:font-semibold hover:bg-amber-50 hover:p-3 pl-3 mt-2 rounded-md">
                Hot dev site's
              </li>
              <li className=" text-zinc-700 text-sm hover:font-semibold hover:bg-amber-50 hover:p-3 pl-3 mt-2 rounded-md">
                Brilliant De Mentors
              </li>
              <li className=" text-zinc-700 text-sm hover:font-semibold hover:bg-amber-50 hover:p-3 pl-3 mt-2 rounded-md">
                Ambitious De Mentees
              </li>
            </ul>
            <div className=" p-3 mt-7 text-xs">
              <strong className='text-sm mb-2'>Our Sponsor</strong>
              <div>NAVER</div>
              <div>Kakao</div>
              <div>LINE</div>
              <div>Cupang</div>
              <div>Wooahan BROTHERS</div>
              <div>당근마켓</div>
              <br></br>
              <div>Microsoft</div>
              <div>Apple</div>
              <div>Google</div>
              <div>Facebook</div>
              <div>Amazone</div>
              <div>Samsung</div>
            </div>
            <div className=" bottom-2 mt-7 text-xs bg-stone-800 text-white rounded-md">
              <img className=' rounded-md' src={MAGAZINE} alt="" />
              <h6 className=' text-md p-3'>
                DeMentor runs on 100% open source code known as Forem.
                Contribute to the codebase or host your own!
                Check these out! 👇
              </h6>
            </div>
          </div>
          <div className=" col-span-5 ">
            <h4 className="flex justify-between text-xs text-black font-extralight ">
              <span className=' font-semibold'>Join to Awesome Developer<strong className=' text-amber-400 font-semibold'> now</strong></span>
              <span>Updated at 1:42 , 2022 - 12 - 18</span>
            </h4>
            <ul className="flex flex-col ">
              {data.map((item, index) => (
                <li key={index} className=" border border-zinc-100 my-1 p-3 grid grid-cols-10 hover:bg-[#ffc629] rounded-md">
                  <span className=' col-span-1 pr-4 flex items-center'>
                    <img className=' shadow-lg rounded-xs' src={UDEMY} alt="" />
                  </span>
                  <span className=' col-span-8 flex flex-col justify-center'>
                    <h2 className=' text-lg'>{item.name}</h2>
                    <h4 className=' text-stone-600 text-xs font-mono'>{item.description}</h4>
                  </span>
                  <span className=' col-span-1 font-mono text-3xl h-full flex items-center'>{item.rate}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-3  ">
            <article className='h-auto sticky top-2 p-3 bg-[#f2f6e3] bg-opacity-90 shadow-lg rounded-md hover:text-white  hover:bg-[#0059ff]'>
              <img className="w-full mx-auto " src={DEV} alt="dev" />
              <div className="grid grid-cols-3 gap-10 my-7">
                <span className=' col-span-1'>
                  <h3 className=' font-serif text-xs font-extralight text-stone-500'>Author</h3>
                  <h4 className=' text-sm'>Nicolas</h4>
                </span>
                <span className=' col-span-1'>
                  <h3 className='  font-serif text-xs font-extralight text-stone-500'>Stack</h3>
                  <h4 className=' text-sm'>Full stack</h4>

                </span>
                <span className=' col-span-1'>
                  <h3 className=' font-serif text-xs font-extralight text-stone-500'>Links</h3>
                  <h4 className=' text-sm'>Free | Pay</h4>
                </span>
              </div>
              <div>
                <h3 className='  font-serif text-xs font-extralight text-stone-500'>About. </h3>
                <h2 className=" text-base font-semibold">
                  Nomad Coders <br /> Clone Startups. Learn to Code.
                </h2>
                <h4 className=" text-sm font-extralight">
                  코딩은 진짜를 만들어보는거야!. 실제 구현되어 있는 서비스를 한땀
                  한땀 따라 만들면서 코딩을 배우세요!
                </h4>
              </div>
            </article>
          </div>
        </div>
      </div>
  );
};
