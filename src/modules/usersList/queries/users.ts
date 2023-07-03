import { graphql } from '@/helpers/gql'

export const GetUsers = graphql(`
  query users($pageSize: Int! = 8, $page: Int! = 1, $banFilter: BanFilterType!) {
    userList(pageSize: $pageSize, page: $page, banFilter: $banFilter) {
      data {
        id
        username
        profileLink
        dateAdded
      }
      totalCount
    }
  }
`)
