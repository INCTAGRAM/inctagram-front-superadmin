import { BanFilterType, SortDirectionType, UserSortFields } from '@/helpers/gql/graphql'

export type UsersListArgsType = {
  pageSize?: number
  page?: number
  sortDirection?: SortDirectionType
  searchUsernameTerm?: string
  sortField?: UserSortFields
  banFilter: BanFilterType
}
