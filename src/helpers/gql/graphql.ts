/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any }
}

export type Admin = {
  __typename?: 'Admin'
  createdAt: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type CreateAdminInput = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
  username: Scalars['String']['input']
}

/** USD */
export enum Currency {
  Usd = 'USD',
}

export type DeleteUserInput = {
  id: Scalars['String']['input']
}

export type ImageOutput = {
  __typename?: 'ImageOutput'
  previewUrl?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
}

export type Mutation = {
  __typename?: 'Mutation'
  createAdmin: Admin
  deleteUser: Scalars['Boolean']['output']
}

export type MutationCreateAdminArgs = {
  input: CreateAdminInput
}

export type MutationDeleteUserArgs = {
  input: DeleteUserInput
}

export type PaymentOutput = {
  __typename?: 'PaymentOutput'
  currency: Currency
  endDate: Scalars['DateTime']['output']
  price: Scalars['Float']['output']
  provider: PaymentProvider
  startDate: Scalars['DateTime']['output']
  type: SubscriptionType
}

/** STRIPE,PAYPAL */
export enum PaymentProvider {
  Paypal = 'PAYPAL',
  Stripe = 'STRIPE',
}

export type Query = {
  __typename?: 'Query'
  healthCheck: Scalars['String']['output']
  payments?: Maybe<Array<PaymentOutput>>
  userInfo: UserInfoOutput
  userList: Array<UserOutput>
  userPhotos?: Maybe<Array<ImageOutput>>
}

export type QueryPaymentsArgs = {
  page?: Scalars['Int']['input']
  pageSize?: Scalars['Int']['input']
  sortDirection?: SortDirectionType
  userId: Scalars['ID']['input']
}

export type QueryUserInfoArgs = {
  id: Scalars['ID']['input']
}

export type QueryUserListArgs = {
  page?: Scalars['Int']['input']
  pageSize?: Scalars['Int']['input']
  searchUsernameTerm?: Scalars['String']['input']
  sortDirection?: SortDirectionType
  sortField?: UserSortFields
}

export type QueryUserPhotosArgs = {
  page?: Scalars['Int']['input']
  pageSize?: Scalars['Int']['input']
  sortDirection?: SortDirectionType
  userId: Scalars['ID']['input']
}

/** Asc,Desc */
export enum SortDirectionType {
  Asc = 'Asc',
  Desc = 'Desc',
}

/** ONETIME,RECCURING */
export enum SubscriptionType {
  Onetime = 'ONETIME',
  Reccuring = 'RECCURING',
}

export type UserInfoOutput = {
  __typename?: 'UserInfoOutput'
  avatar: ImageOutput
  dateAdded: Scalars['String']['output']
  id: Scalars['ID']['output']
  profileLink: Scalars['String']['output']
  username: Scalars['String']['output']
}

export type UserOutput = {
  __typename?: 'UserOutput'
  dateAdded: Scalars['String']['output']
  id: Scalars['ID']['output']
  profileLink: Scalars['String']['output']
  username: Scalars['String']['output']
}

/** Username,DateAdded */
export enum UserSortFields {
  DateAdded = 'DateAdded',
  Username = 'Username',
}

export type HealthCheckQueryVariables = Exact<{ [key: string]: never }>

export type HealthCheckQuery = { __typename?: 'Query'; healthCheck: string }

export const HealthCheckDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'healthCheck' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [{ kind: 'Field', name: { kind: 'Name', value: 'healthCheck' } }],
      },
    },
  ],
} as unknown as DocumentNode<HealthCheckQuery, HealthCheckQueryVariables>
