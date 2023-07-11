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

type PropsType = {
  isOpen: boolean
  setIsOpen: (arg: boolean) => void
  userId: string
  userName: string
}

export const PopupForControl = ({ userId, userName, setIsOpen, isOpen }: PropsType) => {
  const [showSnackbar, setShowSnackbar] = useState(false)
  const [isOpenDeletePostPopup, setIsOpenDeletePostPopup] = useState(false)
  const [deleteUser, { loading: deleteUserLoading, error: deleteUserError }] = useMutation(DELETE_USERS, {
    refetchQueries: [
      GetUsers, // DocumentNode object parsed with gql
      'users', // Query name
    ],
  })
  const popupForControlRef = useRef<HTMLDivElement>(null)
  const closePopupForControl = () => {
    setIsOpen(false)
  }

  useClosePopupClickDocument(popupForControlRef, isOpen, closePopupForControl, [isOpen])

  const closeDeletePostPopup = () => {
    setIsOpenDeletePostPopup(false)
    closePopupForControl()
  }

  const deletePostHandler = () => {
    userId && deleteUser({ variables: { input: { id: userId } } })
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
      {isOpenDeletePostPopup && <SuccessSnackbar message={`${userName} deleted successfully`} />}
    </div>
  )
}
