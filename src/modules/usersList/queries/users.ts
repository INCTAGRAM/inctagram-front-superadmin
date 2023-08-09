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
        isBanned
      }
      totalCount
    }
  }
`)

export const GetUserInfo = graphql(`
  query getUserInfo($id: ID!) {
    userInfo(id: $id) {
      id
      username
      dateAdded
      avatar {
        url
        previewUrl
      }
    }
  }
`)

export const GetUserPhoto = graphql(`
  query getUserPhoto($userId: ID!, $page: Int!, $pageSize: Int!) {
    userPhotos(userId: $userId, page: $page, pageSize: $pageSize) {
      data {
        url
        previewUrl
      }
    }
  }
`)

export const GetUserPayments = graphql(`
  query getUserPayments($userId: ID!, $page: Int!, $pageSize: Int!) {
    userPayments(userId: $userId, page: $page, pageSize: $pageSize) {
      data {
        startDate
        endDate
        subscriptionType
        currency
        price
        paymentType
      }
    }
  }
`)
