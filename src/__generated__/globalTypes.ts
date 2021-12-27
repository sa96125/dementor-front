/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum UserRole {
  Mentee = "Mentee",
  Mentor = "Mentor",
}

export interface CreateAccountInput {
  email: string;
  password?: string | null;
  role: UserRole;
}

export interface LoginInput {
  email: string;
  password?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
