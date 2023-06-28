import { graphql } from '@/helpers/gql'

export const GetHealthCheck = graphql(`
  query healthCheck {
    healthCheck
  }
`)
