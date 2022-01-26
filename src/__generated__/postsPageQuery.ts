/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PostsInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: postsPageQuery
// ====================================================

export interface postsPageQuery_allCategories_categories {
  __typename: "Category";
  id: number;
  name: string;
  slug: string;
  postCount: number;
  description: string;
}

export interface postsPageQuery_allCategories {
  __typename: "AllCategoriesOutput";
  ok: boolean;
  error: string | null;
  categories: postsPageQuery_allCategories_categories[] | null;
}

export interface postsPageQuery_posts_results_category {
  __typename: "Category";
  name: string;
}

export interface postsPageQuery_posts_results {
  __typename: "Post";
  id: number;
  title: string;
  content: string | null;
  category: postsPageQuery_posts_results_category | null;
}

export interface postsPageQuery_posts {
  __typename: "PostsOutput";
  ok: boolean;
  error: string | null;
  totalPages: number | null;
  totalResults: number | null;
  results: postsPageQuery_posts_results[] | null;
}

export interface postsPageQuery {
  allCategories: postsPageQuery_allCategories;
  posts: postsPageQuery_posts;
}

export interface postsPageQueryVariables {
  input: PostsInput;
}
