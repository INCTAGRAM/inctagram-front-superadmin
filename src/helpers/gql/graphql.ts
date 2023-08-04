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

/** Banned,Active,All */
export enum BanFilterType {
  Active = 'Active',
  All = 'All',
  Banned = 'Banned',
}

export type BanUserInput = {
  banReason?: InputMaybe<Scalars['String']['input']>
  id: Scalars['String']['input']
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

export type ImagesPaginationOutput = {
  __typename?: 'ImagesPaginationOutput'
  data: Array<ImageOutput>
  totalCount: Scalars['Float']['output']
}

export type Mutation = {
  __typename?: 'Mutation'
  banUser?: Maybe<Scalars['ID']['output']>
  createAdmin: Admin
  deleteUser?: Maybe<Scalars['ID']['output']>
  unBanUser?: Maybe<Scalars['ID']['output']>
}

export type MutationBanUserArgs = {
  input: BanUserInput
}

export type MutationCreateAdminArgs = {
  input: CreateAdminInput
}

export type MutationDeleteUserArgs = {
  input: DeleteUserInput
}

export type MutationUnBanUserArgs = {
  input: UnBanUserInput
}

/** STRIPE,PAYPAL */
export enum PaymentProvider {
  Paypal = 'PAYPAL',
  Stripe = 'STRIPE',
}

/** CONFIRMED,PENDING,REJECTED */
export enum PaymentStatus {
  Confirmed = 'CONFIRMED',
  Pending = 'PENDING',
  Rejected = 'REJECTED',
}

export type PaymentWithUserDetailsOutput = {
  __typename?: 'PaymentWithUserDetailsOutput'
  amount: Scalars['Float']['output']
  currency: Currency
  dateAdded: Scalars['String']['output']
  id: Scalars['ID']['output']
  paymentType: PaymentProvider
  photo?: Maybe<Scalars['String']['output']>
  subscriptionType: SubscriptionType
  username: Scalars['String']['output']
}

/** Username,Amount,PaymentType,DateAdded,Status */
export enum PaymentsSortFields {
  Amount = 'Amount',
  DateAdded = 'DateAdded',
  PaymentType = 'PaymentType',
  Status = 'Status',
  Username = 'Username',
}

export type PaymentsWithUserDetailsPaginationOutput = {
  __typename?: 'PaymentsWithUserDetailsPaginationOutput'
  data: Array<PaymentWithUserDetailsOutput>
  totalCount: Scalars['Float']['output']
}

export type Query = {
  __typename?: 'Query'
  healthCheck: Scalars['String']['output']
  paymentsList: PaymentsWithUserDetailsPaginationOutput
  userInfo: UserInfoOutput
  userList: UserPaginationOutput
  userPayments?: Maybe<UserPaymentsPaginationOutput>
  userPhotos?: Maybe<ImagesPaginationOutput>
}

export type QueryPaymentsListArgs = {
  page?: Scalars['Int']['input']
  pageSize?: Scalars['Int']['input']
  searchUsernameTerm?: Scalars['String']['input']
  sortDirection?: SortDirectionType
  sortField?: PaymentsSortFields
  status?: PaymentStatus
}

export type QueryUserInfoArgs = {
  id: Scalars['ID']['input']
}

export type QueryUserListArgs = {
  banFilter?: InputMaybe<BanFilterType>
  page?: Scalars['Int']['input']
  pageSize?: Scalars['Int']['input']
  searchUsernameTerm?: Scalars['String']['input']
  sortDirection?: SortDirectionType
  sortField?: UserSortFields
}

export type QueryUserPaymentsArgs = {
  page?: Scalars['Int']['input']
  pageSize?: Scalars['Int']['input']
  sortDirection?: SortDirectionType
  userId: Scalars['ID']['input']
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

export type UnBanUserInput = {
  id: Scalars['String']['input']
}

export type UserInfoOutput = {
  __typename?: 'UserInfoOutput'
  avatar: ImageOutput
  banReason: Scalars['String']['output']
  dateAdded: Scalars['String']['output']
  id: Scalars['ID']['output']
  isBanned: Scalars['Boolean']['output']
  profileLink: Scalars['String']['output']
  username: Scalars['String']['output']
}

export type UserOutput = {
  __typename?: 'UserOutput'
  dateAdded: Scalars['String']['output']
  id: Scalars['ID']['output']
  isBanned: Scalars['Boolean']['output']
  profileLink: Scalars['String']['output']
  username: Scalars['String']['output']
}

export type UserPaginationOutput = {
  __typename?: 'UserPaginationOutput'
  data: Array<UserOutput>
  totalCount: Scalars['Float']['output']
}

export type UserPaymentOutput = {
  __typename?: 'UserPaymentOutput'
  currency: Currency
  endDate: Scalars['DateTime']['output']
  paymentType: PaymentProvider
  price: Scalars['Float']['output']
  startDate: Scalars['DateTime']['output']
  subscriptionType: SubscriptionType
}

export type UserPaymentsPaginationOutput = {
  __typename?: 'UserPaymentsPaginationOutput'
  data: Array<UserPaymentOutput>
  totalCount: Scalars['Float']['output']
}

/** Username,DateAdded */
export enum UserSortFields {
  DateAdded = 'DateAdded',
  Username = 'Username',
}

export type DeleteUsersMutationVariables = Exact<{
  input: DeleteUserInput
}>

export type DeleteUsersMutation = { __typename?: 'Mutation'; deleteUser?: string | null }

export type BanUsersMutationVariables = Exact<{
  input: BanUserInput
}>

export type BanUsersMutation = { __typename?: 'Mutation'; banUser?: string | null }

export type UnBanUsersMutationVariables = Exact<{
  input: UnBanUserInput
}>

export type UnBanUsersMutation = { __typename?: 'Mutation'; unBanUser?: string | null }

export type UsersQueryVariables = Exact<{
  pageSize?: Scalars['Int']['input']
  page?: Scalars['Int']['input']
  sortDirection?: SortDirectionType
  searchUsernameTerm?: Scalars['String']['input']
  sortField?: UserSortFields
  banFilter: BanFilterType
}>

export type UsersQuery = {
  __typename?: 'Query'
  userList: {
    __typename?: 'UserPaginationOutput'
    totalCount: number
    data: Array<{
      __typename?: 'UserOutput'
      id: string
      username: string
      profileLink: string
      dateAdded: string
      isBanned: boolean
    }>
  }
}

export const DeleteUsersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteUsers' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'DeleteUserInput' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DeleteUsersMutation, DeleteUsersMutationVariables>
export const BanUsersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'BanUsers' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'BanUserInput' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'banUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BanUsersMutation, BanUsersMutationVariables>
export const UnBanUsersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'unBanUsers' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'UnBanUserInput' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'unBanUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UnBanUsersMutation, UnBanUsersMutationVariables>
export const UsersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'users' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'pageSize' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } },
          defaultValue: { kind: 'IntValue', value: '10' },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'page' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } },
          defaultValue: { kind: 'IntValue', value: '1' },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sortDirection' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'SortDirectionType' } },
          },
          defaultValue: { kind: 'EnumValue', value: 'Desc' },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'searchUsernameTerm' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
          defaultValue: { kind: 'StringValue', value: '', block: false },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sortField' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'UserSortFields' } } },
          defaultValue: { kind: 'EnumValue', value: 'DateAdded' },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'banFilter' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'BanFilterType' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'userList' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pageSize' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'pageSize' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'page' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'page' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sortDirection' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'sortDirection' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'searchUsernameTerm' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'searchUsernameTerm' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sortField' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'sortField' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'banFilter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'banFilter' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'profileLink' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'dateAdded' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'isBanned' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'totalCount' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>
