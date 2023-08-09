import { SortDirectionType, UserSortFields } from '@/helpers/gql/graphql'
import { UsersListArgsType } from '@/modules/usersList/queries/types'

type useSortHandlerType = {
  usersArgs: UsersListArgsType
  setUsersArgs: (usersListArgs: UsersListArgsType) => void
}
export const useSortHandler = ({ usersArgs, setUsersArgs }: useSortHandlerType) => {
  const sortUsername = () => {
    if (usersArgs.sortField === UserSortFields.Username) {
      setUsersArgs({
        ...usersArgs,
        sortDirection:
          usersArgs.sortDirection === SortDirectionType.Asc ? SortDirectionType.Desc : SortDirectionType.Asc,
      })
    } else {
      setUsersArgs({
        ...usersArgs,
        sortField: UserSortFields.Username,
        sortDirection: SortDirectionType.Asc,
      })
    }
  }
  const sortDate = () => {
    if (usersArgs.sortField === UserSortFields.DateAdded) {
      setUsersArgs({
        ...usersArgs,
        sortDirection:
          usersArgs.sortDirection === SortDirectionType.Asc ? SortDirectionType.Desc : SortDirectionType.Asc,
      })
    } else {
      setUsersArgs({
        ...usersArgs,
        sortField: UserSortFields.DateAdded,
        sortDirection: SortDirectionType.Desc,
      })
    }
  }
  return { sortUsername, sortDate }
}
