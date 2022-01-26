/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PostParts
// ====================================================

export interface PostParts_category {
  __typename: "Category";
  name: string;
}

export interface PostParts {
  __typename: "Post";
  id: number;
  title: string;
  content: string | null;
  category: PostParts_category | null;
}
