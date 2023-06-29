import { graphql } from '@/helpers/gql'

export const GetUsers = graphql(`
  query users {
    userList(pageSize: 50, page: 1, banFilter: All) {
      data {
        username
      }
    }
  }
`)
