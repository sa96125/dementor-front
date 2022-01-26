import { gql } from "@apollo/client";

export const POSTS_FRAGMENT = gql`
  fragment PostParts on Post {
    id
    title
    content
    category {
      name
    }
  }
`;


export const CATEGORIES_FRAGMENT = gql`
  fragment CategoryParts on Category {
    id
    name
    slug
    postCount
    description
  }
`;

