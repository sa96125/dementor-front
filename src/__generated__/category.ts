/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CategoryInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: category
// ====================================================

export interface category_category_posts_category {
  __typename: "Category";
  name: string;
}

export interface category_category_posts {
  __typename: "Post";
  id: number;
  title: string;
  content: string | null;
  category: category_category_posts_category | null;
}

export interface category_category_category {
  __typename: "Category";
  id: number;
  name: string;
  slug: string;
  postCount: number;
  description: string;
}

export interface category_category {
  __typename: "CategoryOutput";
  ok: boolean;
  error: string | null;
  totalPages: number | null;
  totalResults: number | null;
  posts: category_category_posts[] | null;
  category: category_category_category | null;
}

export interface category {
  category: category_category;
}

export interface categoryVariables {
  input: CategoryInput;
}
