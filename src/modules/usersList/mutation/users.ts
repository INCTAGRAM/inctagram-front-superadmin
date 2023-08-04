import { graphql } from '@/helpers/gql'

export const DELETE_USERS = graphql(`
  mutation DeleteUsers($input: DeleteUserInput!) {
    deleteUser(input: $input)
  }
`)

export const BAN_USERS = graphql(`
  mutation BanUsers($input: BanUserInput!) {
    banUser(input: $input)
  }
`)

export const UN_BAN_USERS = graphql(`
  mutation unBanUsers($input: UnBanUserInput!) {
    unBanUser(input: $input)
  }
`)
