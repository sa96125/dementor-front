import { PostParts } from "../../__generated__/PostParts";

interface IPostListProps {
  post: PostParts ;
}

export const PostList: React.FC<IPostListProps> = ({ post }) => (
  <li
    className=" h-24 grid grid-cols-10 bg-[] border-b border-stone-100 p-3"
  >
    <span className=" col-span-1 rounded-md bg-stone-100 shadow-sm"></span>
    <span className=" col-span-8 mx-5 flex items-center">
      <h3 className=" text-base">
        <p className=" text-xs text-stone-800">Author</p>
        {post.title}
      </h3>
      <h4 className=" text-base"></h4>
    </span>
    <span className=" col-span-1 flex text-xs justify-between ">
      <div>
        <p>view</p>
        <p className=" font-mono text-sm">500</p>
      </div>
      <div>
        <p>replies</p>
        <p className=" font-mono text-sm">24</p>
      </div>
    </span>
  </li>
);
