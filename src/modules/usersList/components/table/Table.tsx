import React, { useEffect, useState } from 'react'
import { dateConverter } from '@/helpers/dateConverter'
import { SortDirectionType, UserSortFields, UsersQuery } from '@/helpers/gql/graphql'
import IcomoonReact from 'icomoon-react'
import iconSet from '@/assets/icons/selection.json'
import { UsersListArgsType } from '@/modules/usersList/queries/types'
import { PopupForControl } from '@/modules/usersList/components/popupForControl/PopupForControl'
import { SuccessSnackbar } from '@/common/ui/alertSnackbar/SuccessSnackbar'
import { useDeleteMutation } from '@/hooks/useDeleteMutation'
import { ErrorSnackbar } from '@/common/ui/alertSnackbar/ErrorSnackbar'
import { useBanMutation } from '@/hooks/useBanMutation'
import { linkConverter } from '@/helpers/linkConverter'
import { useUnBanMutation } from '@/hooks/useUnBanMutation'
import styles from './Table.module.scss'

type PropsType = {
  usersData: UsersQuery
  usersArgs: UsersListArgsType
  setUsersArgs: (usersListArgs: UsersListArgsType) => void
  variables: UsersListArgsType
}

export const Table = ({ usersData, usersArgs, setUsersArgs, variables }: PropsType) => {
  const [openUserId, setOpenUserId] = useState<string | null | boolean>(null)
  const [chosenName, setChosenName] = useState('')
  const [lastMutation, setLastMutation] = useState('')

  const { deleteUser, deleteUserError, deleteUserData } = useDeleteMutation(variables)
  const { banUser, banUserError, banUsersData } = useBanMutation(variables)
  const { unBanUser, unBanUserError, unBanUsersData } = useUnBanMutation(variables)
  const errorMessage = banUserError ? banUserError.message : unBanUserError?.message

  useEffect(() => {
    setTimeout(() => {
      setLastMutation('')
    }, 3000)
  }, [deleteUserData, banUsersData, unBanUsersData])

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
    <>
      <table className={styles.usersTable}>
        <thead className={styles.userList}>
          <tr>
            <th colSpan={2}>User ID</th>
            <th onClick={sortUsername}>Username</th>
            <th onClick={sortUsername}>Profile link</th>
            <th onClick={sortDate}>Date added</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {usersData?.userList?.data.length !== 0 ? (
            usersData?.userList?.data.map((user) => {
              const isBanUser = user.isBanned ? (
                <IcomoonReact iconSet={iconSet} color={'#fff'} icon="Block" size={20} />
              ) : (
                ''
              )
              return (
                <tr key={user.id}>
                  <td>{isBanUser}</td>
                  <td style={{ paddingLeft: '0px' }}>{user.id}</td>
                  <td>{user.username}</td>
                  <td>
                    <a style={{ textDecoration: 'none', color: 'inherit' }} href={user.profileLink}>
                      {linkConverter.fromLink(user.profileLink)}
                    </a>
                  </td>
                  <td>{dateConverter.fromMilliseconds(+user.dateAdded)}</td>
                  <td>
                    <button>
                      <IcomoonReact
                        onClick={() => setOpenUserId(user.id)}
                        iconSet={iconSet}
                        icon={'more-horizontal'}
                        size={24}
                        color={openUserId === user.id ? '#397DF6' : 'white'}
                      />
                    </button>
                    <PopupForControl
                      setLastMutation={setLastMutation}
                      isOpen={openUserId === user.id}
                      setIsOpen={setOpenUserId}
                      userId={user.id}
                      deleteUser={deleteUser}
                      banUser={banUser}
                      unBanUser={unBanUser}
                      setChosenName={setChosenName}
                      userName={user.username}
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
      {!!lastMutation && <SuccessSnackbar message={`User ${chosenName} ${lastMutation} successfully`} time={3000} />}
      {(deleteUserError || banUserError || unBanUserError) && (
        <ErrorSnackbar error={deleteUserError ? deleteUserError.message : errorMessage} time={3000} />
      )}
    </>
  )
}
