/* eslint-disable */
import * as types from './graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  mutation DeleteUsers($input: DeleteUserInput!) {\n    deleteUser(input: $input)\n  }\n':
    types.DeleteUsersDocument,
  '\n  mutation BanUsers($input: BanUserInput!) {\n    banUser(input: $input)\n  }\n': types.BanUsersDocument,
  '\n  mutation unBanUsers($input: UnBanUserInput!) {\n    unBanUser(input: $input)\n  }\n': types.UnBanUsersDocument,
  '\n  query users(\n    $pageSize: Int! = 10\n    $page: Int! = 1\n    $sortDirection: SortDirectionType! = Desc\n    $searchUsernameTerm: String! = ""\n    $sortField: UserSortFields! = DateAdded\n    $banFilter: BanFilterType!\n  ) {\n    userList(\n      pageSize: $pageSize\n      page: $page\n      sortDirection: $sortDirection\n      searchUsernameTerm: $searchUsernameTerm\n      sortField: $sortField\n      banFilter: $banFilter\n    ) {\n      data {\n        id\n        username\n        profileLink\n        dateAdded\n        isBanned\n      }\n      totalCount\n    }\n  }\n':
    types.UsersDocument,
  '\n  query getUserInfo($id: ID!) {\n    userInfo(id: $id) {\n      id\n      username\n      dateAdded\n      avatar {\n        url\n        previewUrl\n      }\n    }\n  }\n':
    types.GetUserInfoDocument,
  '\n  query getUserPhoto($userId: ID!, $page: Int!, $pageSize: Int!) {\n    userPhotos(userId: $userId, page: $page, pageSize: $pageSize) {\n      data {\n        url\n        previewUrl\n      }\n    }\n  }\n':
    types.GetUserPhotoDocument,
  '\n  query getUserPayments($userId: ID!, $page: Int!, $pageSize: Int!) {\n    userPayments(userId: $userId, page: $page, pageSize: $pageSize) {\n      data {\n        startDate\n        endDate\n        subscriptionType\n        currency\n        price\n        paymentType\n      }\n    }\n  }\n':
    types.GetUserPaymentsDocument,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation DeleteUsers($input: DeleteUserInput!) {\n    deleteUser(input: $input)\n  }\n'
): (typeof documents)['\n  mutation DeleteUsers($input: DeleteUserInput!) {\n    deleteUser(input: $input)\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation BanUsers($input: BanUserInput!) {\n    banUser(input: $input)\n  }\n'
): (typeof documents)['\n  mutation BanUsers($input: BanUserInput!) {\n    banUser(input: $input)\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation unBanUsers($input: UnBanUserInput!) {\n    unBanUser(input: $input)\n  }\n'
): (typeof documents)['\n  mutation unBanUsers($input: UnBanUserInput!) {\n    unBanUser(input: $input)\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query users(\n    $pageSize: Int! = 10\n    $page: Int! = 1\n    $sortDirection: SortDirectionType! = Desc\n    $searchUsernameTerm: String! = ""\n    $sortField: UserSortFields! = DateAdded\n    $banFilter: BanFilterType!\n  ) {\n    userList(\n      pageSize: $pageSize\n      page: $page\n      sortDirection: $sortDirection\n      searchUsernameTerm: $searchUsernameTerm\n      sortField: $sortField\n      banFilter: $banFilter\n    ) {\n      data {\n        id\n        username\n        profileLink\n        dateAdded\n        isBanned\n      }\n      totalCount\n    }\n  }\n'
): (typeof documents)['\n  query users(\n    $pageSize: Int! = 10\n    $page: Int! = 1\n    $sortDirection: SortDirectionType! = Desc\n    $searchUsernameTerm: String! = ""\n    $sortField: UserSortFields! = DateAdded\n    $banFilter: BanFilterType!\n  ) {\n    userList(\n      pageSize: $pageSize\n      page: $page\n      sortDirection: $sortDirection\n      searchUsernameTerm: $searchUsernameTerm\n      sortField: $sortField\n      banFilter: $banFilter\n    ) {\n      data {\n        id\n        username\n        profileLink\n        dateAdded\n        isBanned\n      }\n      totalCount\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getUserInfo($id: ID!) {\n    userInfo(id: $id) {\n      id\n      username\n      dateAdded\n      avatar {\n        url\n        previewUrl\n      }\n    }\n  }\n'
): (typeof documents)['\n  query getUserInfo($id: ID!) {\n    userInfo(id: $id) {\n      id\n      username\n      dateAdded\n      avatar {\n        url\n        previewUrl\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getUserPhoto($userId: ID!, $page: Int!, $pageSize: Int!) {\n    userPhotos(userId: $userId, page: $page, pageSize: $pageSize) {\n      data {\n        url\n        previewUrl\n      }\n    }\n  }\n'
): (typeof documents)['\n  query getUserPhoto($userId: ID!, $page: Int!, $pageSize: Int!) {\n    userPhotos(userId: $userId, page: $page, pageSize: $pageSize) {\n      data {\n        url\n        previewUrl\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getUserPayments($userId: ID!, $page: Int!, $pageSize: Int!) {\n    userPayments(userId: $userId, page: $page, pageSize: $pageSize) {\n      data {\n        startDate\n        endDate\n        subscriptionType\n        currency\n        price\n        paymentType\n      }\n    }\n  }\n'
): (typeof documents)['\n  query getUserPayments($userId: ID!, $page: Int!, $pageSize: Int!) {\n    userPayments(userId: $userId, page: $page, pageSize: $pageSize) {\n      data {\n        startDate\n        endDate\n        subscriptionType\n        currency\n        price\n        paymentType\n      }\n    }\n  }\n']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<
  infer TType,
  any
>
  ? TType
  : never
