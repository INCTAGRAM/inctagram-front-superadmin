import { graphql } from '@/helpers/gql'

export const GetUsers = graphql(`
  query users(
    $pageSize: Int! = 10
    $page: Int! = 1
    $sortDirection: SortDirectionType! = Desc
    $searchUsernameTerm: String! = ""
    $sortField: UserSortFields! = DateAdded
    $banFilter: BanFilterType!
  ) {
    userList(
      pageSize: $pageSize
      page: $page
      sortDirection: $sortDirection
      searchUsernameTerm: $searchUsernameTerm
      sortField: $sortField
      banFilter: $banFilter
    ) {
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
