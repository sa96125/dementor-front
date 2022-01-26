import { Link } from 'react-router-dom';

export const NotFound = () => (
  <div className=" h-screen flex flex-col items-center justify-center">
    <h2 className=" font-semibold text-xl mb-3">Page not found</h2>
    <h4 className=" font-medium text-base mb-5">
      The page you're looking for dose not exist.
    </h4>

    <Link to="/" className="hover:underline ">
      {' '}
      go to home &rarr;
    </Link>
  </div>
);
