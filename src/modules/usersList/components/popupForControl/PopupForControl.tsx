import React, { useEffect, useRef, useState } from 'react'
import { useClosePopupClickDocument } from '@/hooks/useClosePopupClickDocument'
import iconSet from '@/assets/icons/selection.json'
import IcomoonReact from 'icomoon-react'
import { ConfirmActionPopup } from '@/common/ui/popup/confirmActionPopup/ConfirmActionPopup'
import { UsersListArgsType } from '@/modules/usersList/queries/types'
import styles from './PopupForControl.module.scss'
import { useDeleteMutation } from '@/hooks/useDeleteMutation'

export type PopupForControlType = {
  isOpen: boolean
  setIsOpen: (arg: boolean) => void
  userId: string
  setDeleteMutationName: (arg: string) => void
  variables: UsersListArgsType
  userName: string
}

export const PopupForControl = ({
  userId,
  userName,
  setDeleteMutationName,
  setIsOpen,
  isOpen,
  variables,
}: PopupForControlType) => {
  const [isOpenDeletePostPopup, setIsOpenDeletePostPopup] = useState(false)

  const popupForControlRef = useRef<HTMLDivElement>(null)
  const closePopupForControl = () => {
    setIsOpen(false)
  }
  const deleteUser = useDeleteMutation({ variables, setDeleteMutationName, userName })

  useClosePopupClickDocument(popupForControlRef, isOpen, closePopupForControl, [isOpen])

  const closeDeletePostPopup = () => {
    setIsOpenDeletePostPopup(false)
    closePopupForControl()
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
    </div>
  )
}
