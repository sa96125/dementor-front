import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CATEGORIES_FRAGMENT, POSTS_FRAGMENT } from '../../fragments';
import { category, categoryVariables } from '../../__generated__/category';
import {
  postsPageQuery,
  postsPageQueryVariables,
} from '../../__generated__/postsPageQuery';
import { PostList } from '../components/post-list';


const POSTS_QUERY = gql`
  query postsPageQuery($input: PostsInput!) {
    allCategories {
      ok
      error
      categories {
        ...CategoryParts
      }
    }

    posts(input: $input) {
      ok
      error
      totalPages
      totalResults
      results {
        ...PostParts
      }
    }
  }
  ${POSTS_FRAGMENT}
  ${CATEGORIES_FRAGMENT}
`;

const CATEGORY_QUERY = gql`
    query category ($input: CategoryInput!) {
        category(input : $input) {
            ok
            error
            totalPages
            totalResults
            posts {
                ...PostParts
            }
            category {
                ...CategoryParts
            }
        }
    }
    ${POSTS_FRAGMENT}
    ${CATEGORIES_FRAGMENT}
`

export const Community = () => {
  const params = useParams();
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<any[]>([]);

  const { data:initData, loading:initLoading} = useQuery<postsPageQuery, postsPageQueryVariables>(
    POSTS_QUERY,
    {
      variables: {
        input: {
          page,
        },
      },
    },
  );


  const [queryReadyToStart ,{ data, loading }] = useLazyQuery<category,categoryVariables>(CATEGORY_QUERY)
  useEffect(()=> {
    if(params.slug){
      queryReadyToStart({
        variables: {
            input: {
                page,
                slug: params.slug
            }
        }
      })
    }
  }, [params.slug])


  // 기존 배열에 새로운 데이터 추가.
  // data && setPosts(current => [...current, ...data.posts.results])
  const onMorePosts = () => {
    setPage((current) => current + 1);
  };

  return (
    <div className="w-full px-5 xl:px-0 max-w-screen-xl mx-auto">
      <div className="flex gap-4 py-5 text-xl">
        <div className=" bg-[#1a1918] text-yellow-50 p-2 rounded-sm">All</div>
        <div className=" p-2 rounded-sm">Latest</div>
        <div className=" p-2 rounded-sm">Top</div>
        <div className=" p-2 rounded-sm">Weekly,</div>
      </div>

      <div className="grid grid-cols-10 gap-2">
        <span className=" col-span-4">
          <ul>
            {!initLoading &&
              initData?.allCategories.categories?.map((category) => (
                <li key={category.id} className=''>
                  <Link to={`/community/${category.slug}`}>
                    <button className=" text-left w-full border-l-8 group border-stone-600 p-3 text-stone-600  focus:text-black focus:border-[#ff5d22] ">
                      <h2 className=" text-lg font-mono font-semibold group-hover:text-black">
                        {category.name}
                      </h2>
                      <h4 className=" text-sm">{category.description}</h4>
                    </button>
                  </Link>
                </li>
              ))}
          </ul>
        </span>

        <span className=" col-span-6">
          <div className=" pl-3 text-xl">
            <h2 className=" flex items-center justify-center h-10 rounded-md text-white bg-[#313b30]">
              register now.
            </h2>
          </div>
          <ul>
            {!params.slug ? 
              !initLoading && initData?.posts.results?.map((post, index) => <PostList key={index} post={post}/>):
              !loading && data?.category.posts?.map((post, index) => <PostList key={index} post={post}/>)
              }
          </ul>
          <div onClick={onMorePosts}>
            {page !== initData?.posts.totalPages && 'More'}
          </div>
        </span>
      </div>
    </div>
  );
};
