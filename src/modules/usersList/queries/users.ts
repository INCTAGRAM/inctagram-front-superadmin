import { graphql } from '@/helpers/gql'

export const GetHealthCheck = graphql(`
  query HealthCheck {
    healthCheck
  }
`)
