import React, { useRef, useState } from 'react'
import { useClosePopupClickDocument } from '@/hooks/useClosePopupClickDocument'
import iconSet from '@/assets/icons/selection.json'
import IcomoonReact from 'icomoon-react'
import { ConfirmActionPopup } from '@/common/ui/popup/confirmActionPopup/ConfirmActionPopup'
import styles from './PopupForControl.module.scss'
import { DeleteUserInput } from '@/hooks/useDeleteMutation'

type DeleteUserFunction = (options: { variables: DeleteUserInput }) => Promise<any>

export type PopupForControlType = {
  isOpen: boolean
  setIsOpen: (arg: boolean) => void
  deleteUser: DeleteUserFunction
  userId: string
  setDeleteMutationName: (arg: string) => void
  userName: string
}

export const PopupForControl = ({
  userId,
  userName,
  setIsOpen,
  isOpen,
  deleteUser,
  setDeleteMutationName,
}: PopupForControlType) => {
  const [isOpenDeletePostPopup, setIsOpenDeletePostPopup] = useState(false)

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
    closeDeletePostPopup()
    setDeleteMutationName(userName)
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
    </div>
  )
}
