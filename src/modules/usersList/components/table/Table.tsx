import { dateConverter } from '@/helpers/dateConverter'
import { SortDirectionType, UserSortFields, UsersQuery } from '@/helpers/gql/graphql'
import IcomoonReact from 'icomoon-react'
import iconSet from '@/assets/icons/selection.json'
import { UsersListArgsType } from '@/modules/usersList/queries/types'
import { PopupForControl } from '@/modules/usersList/components/popupForControl/PopupForControl'
import { useState } from 'react'
import styles from './Table.module.scss'

type PropsType = {
  usersData: UsersQuery
  usersArgs: UsersListArgsType
  setUsersArgs: (usersListArgs: UsersListArgsType) => void
  variables: UsersListArgsType
}

export const Table = ({ usersData, usersArgs, setUsersArgs, variables }: PropsType) => {
  const [openUserId, setOpenUserId] = useState<string | null | boolean>(null)
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
        {usersData?.userList?.data.length !== 0 ? (
          usersData?.userList?.data.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{dateConverter.fromMilliseconds(+user.dateAdded)}</td>
                <td>
                  <button onClick={() => setOpenUserId(user.id)}>
                    <IcomoonReact
                      iconSet={iconSet}
                      icon={'more-horizontal'}
                      size={24}
                      color={openUserId === user.id ? '#397DF6' : 'white'}
                    />
                  </button>
                  <PopupForControl
                    isOpen={openUserId === user.id}
                    setIsOpen={setOpenUserId}
                    userId={user.id}
                    userName={user.username}
                    variables={variables}
                  />
                </td>
              </tr>
            )
          })
        ) : (
          <tr>
            <td>User list is empty. Change search options.</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
