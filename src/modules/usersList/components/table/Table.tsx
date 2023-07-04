import styles from './Table.module.scss'
import { dateConverter } from '@/helpers/dateConverter'
import { SortDirectionType, UserSortFields, UsersQuery } from '@/helpers/gql/graphql'
import IcomoonReact from 'icomoon-react'
import iconSet from '@/assets/icons/selection.json'
import { UsersListArgsType } from '@/modules/usersList/queries/types'

type Props = {
  usersData: UsersQuery
  usersArgs: UsersListArgsType
  setUsersArgs: (usersListArgs: UsersListArgsType) => void
}

export const Table = ({ usersData, usersArgs, setUsersArgs }: Props) => {
  const sortUsername = () => {
    if (usersArgs.sortField === UserSortFields.Username) {
      setUsersArgs({
        ...usersArgs,
        sortDirection:
          usersArgs.sortDirection === SortDirectionType.Asc ? SortDirectionType.Desc : SortDirectionType.Asc,
      })
    } else {
      setUsersArgs({ ...usersArgs, sortField: UserSortFields.Username, sortDirection: SortDirectionType.Asc })
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
      setUsersArgs({ ...usersArgs, sortField: UserSortFields.DateAdded, sortDirection: SortDirectionType.Desc })
    }
  }

  return (
    <table className={styles.usersTable}>
      <thead className={styles.userList}>
        <tr>
          <th>User ID</th>
          <th onClick={sortUsername}>Username</th>
          <th onClick={sortDate}>Date added</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {usersData.userList.data.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{dateConverter.fromMilliseconds(+user.dateAdded)}</td>
              <td>
                <button>
                  <IcomoonReact iconSet={iconSet} icon={'more-horizontal'} size={16} color={'white'} />
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
