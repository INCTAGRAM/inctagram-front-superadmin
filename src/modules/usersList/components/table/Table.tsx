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

  const classNameDirectionSort = usersArgs.sortDirection === SortDirectionType.Desc ? styles.desc : styles.asc

  return (
    <table className={styles.usersTable}>
      <thead className={styles.userList}>
        <tr>
          <th>User ID</th>
          <th onClick={sortUsername} className={classNameDirectionSort}>
            Username
            {usersArgs.sortField === UserSortFields.Username && (
              <IcomoonReact icon={'arrow-ios-Down-outline'} iconSet={iconSet} size={18} color={'#fff'} />
            )}
          </th>
          <th onClick={sortDate} className={classNameDirectionSort}>
            Date added
            {usersArgs.sortField === UserSortFields.DateAdded && (
              <IcomoonReact icon={'arrow-ios-Down-outline'} iconSet={iconSet} size={18} color={'#fff'} />
            )}
          </th>
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
