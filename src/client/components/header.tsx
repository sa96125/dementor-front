import { Link } from 'react-router-dom';
import { useMe } from '../hooks/useMe';

const LOGO = '/src/client/assets/img/phi.png';

export const Header: React.FC = () => {
  const { data } = useMe();

  return (
    <>
      {!data?.me.verified && (
        <div className=" bg-stone-800 text-white shadow-lg p-2 text-center text-xs">
          <span>please verify your email first.</span>
        </div>
      )}
      <header className="py-4 bg-[#f2f3e5] bg-opacity-95 rounded-b-md shadow-lg">
        <div className=" w-full px-5 xl:px-0 max-w-screen-xl mx-auto flex items-center justify-between">
          <span className=' w-72 flex items-center justify-between'>
            <Link to="/"><img className=" w-7" src={LOGO} alt="developer mentor" /></Link>
            <div className='ml-5 w-52 font-mono text-sm bg-[#f2f3e5]  rounded-sm p-1 border-b-2 border-black'>hello, developer?</div>
          </span>
          <span className="text-xs flex gap-5 font-semibold items-center">
            <Link to="/we"><button className=' text-sm focus:font-semibold '>Team</button></Link>
            <Link to="/documents"><button className=' text-sm focus:font-semibold '>Docs</button></Link>
            <Link to="/posts"><button className=' text-sm focus:font-semibold '>Blog</button></Link>
            <Link to="/community"><button className=' text-sm focus:font-semibold '>Community</button></Link>
            <Link to="/my-page"><button className=' text-sm focus:font-semibold '>For you.</button></Link>
            <span className='ml-5 text-white bg-zinc-800 rounded-sm p-3'>Logout</span>
          </span>
        </div>
      </header>
    </>
  );
};
