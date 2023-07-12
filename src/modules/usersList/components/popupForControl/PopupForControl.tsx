import React, { useRef, useState } from 'react'
import { useClosePopupClickDocument } from '@/hooks/useClosePopupClickDocument'
import iconSet from '@/assets/icons/selection.json'
import IcomoonReact from 'icomoon-react'
import { ConfirmActionPopup } from '@/common/ui/popup/confirmActionPopup/ConfirmActionPopup'
import { useMutation } from '@apollo/client'
import { DELETE_USERS } from '@/modules/usersList/mutation/users'
import { GetUsers } from '@/modules/usersList/queries/users'
import styles from './PopupForControl.module.scss'
import { SuccessSnackbar } from '@/common/ui/alertSnackbar/SuccessSnackbar'
import { UsersListArgsType } from '@/modules/usersList/queries/types'

type PropsType = {
  isOpen: boolean
  setIsOpen: (arg: boolean) => void
  userId: string
  userName: string
  variables: UsersListArgsType
}
type UserType = { __typename?: 'UserOutput'; id: string; username: string; profileLink: string; dateAdded: string }
type UserListType = {
  userList: {
    __typename?: 'UserPaginationOutput'
    totalCount: number
    data: Array<UserType>
  }
}
export const PopupForControl = ({ userId, userName, setIsOpen, isOpen, variables }: PropsType) => {
  const [isOpenDeletePostPopup, setIsOpenDeletePostPopup] = useState(false)
  const [deleteUser, { loading: deleteUserLoading, error: deleteUserError, data, called }] = useMutation<any>(
    DELETE_USERS,
    {
      update: (cache, { data: { deleteUser } }) => {
        // read the existing data from the cache
        const { userList } = cache.readQuery<any>({ query: GetUsers, variables }) || { userList: [] }
        // filter out the deleted user from the userList data array
        debugger
        const updatedData = userList?.data.filter((user: UserType) => user.id != deleteUser.id)
        // write the updated data to the cache
        cache.writeQuery({
          query: GetUsers,
          data: { userList: { ...userList, data: updatedData } },
        })
      },
    }
  )
  const popupForControlRef = useRef<HTMLDivElement>(null)
  const closePopupForControl = () => {
    setIsOpen(false)
  }

  useClosePopupClickDocument(popupForControlRef, isOpen, closePopupForControl, [isOpen])

  const closeDeletePostPopup = () => {
    setIsOpenDeletePostPopup(false)
    closePopupForControl()
    debugger
  }

  const deletePostHandler = () => {
    userId && deleteUser({ variables: { input: { id: userId } } })
    closeDeletePostPopup()
  }

  return (
    <div className={styles.topPanel} ref={popupForControlRef}>
      {isOpen && (
        <div className={styles.controlElements}>
          <button onClick={() => setIsOpenDeletePostPopup(true)}>
            <IcomoonReact iconSet={iconSet} color={'#fff'} icon="person-remove-outline" size={20} />
            <span>Delete User</span>
          </button>
          <button>
            <IcomoonReact iconSet={iconSet} color={'#fff'} icon="Block" size={20} />
            <span>Ban in the system</span>
          </button>
          <button>
            <IcomoonReact iconSet={iconSet} color={'#fff'} icon="more-horizontal" size={20} />
            <span>More information</span>
          </button>
        </div>
      )}
      <ConfirmActionPopup
        show={isOpenDeletePostPopup}
        title={'Delete User'}
        text={'Are you sure you want to delete this user?'}
        closeActionHandler={closeDeletePostPopup}
        confirmActionHandler={deletePostHandler}
      />
      {called && !deleteUserError && <SuccessSnackbar message={`${userName} deleted successfully`} />}
    </div>
  )
}
