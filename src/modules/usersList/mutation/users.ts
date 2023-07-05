import { graphql } from '@/helpers/gql'

export const DELETE_USERS = graphql(`
  mutation DeleteUsers($input: DeleteUserInput!) {
    deleteUser(input: $input)
  }
`)
