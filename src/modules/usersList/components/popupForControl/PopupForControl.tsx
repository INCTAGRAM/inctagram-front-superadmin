import React, { useRef, useState } from 'react'
import { useClosePopupClickDocument } from '@/hooks/useClosePopupClickDocument'
import iconSet from '@/assets/icons/selection.json'
import IcomoonReact from 'icomoon-react'
import { ConfirmActionPopup } from '@/common/ui/popup/confirmActionPopup/ConfirmActionPopup'
import styles from './PopupForControl.module.scss'
import { DeleteUserInput } from '@/hooks/useDeleteMutation'
import { BanUserInput } from '@/hooks/useBanMutation'

type DeleteUserFunction = (options: { variables: DeleteUserInput }) => Promise<any>
type BanUserFunction = (options: { variables: BanUserInput }) => Promise<any>

export type PopupForControlType = {
  isOpen: boolean
  setIsOpen: (arg: boolean) => void
  deleteUser?: DeleteUserFunction
  banUser?: BanUserFunction
  userId: string
  setChosenName?: (arg: string) => void
  userName: string
}

export const PopupForControl = ({
  userId,
  userName,
  setIsOpen,
  isOpen,
  deleteUser,
  banUser,
  setChosenName,
}: PopupForControlType) => {
  const [isOpenDeleteUsersPopup, setIsOpenDeleteUsersPopup] = useState(false)
  const [isOpenBlockingUsersPopup, setIsOpenBlockingUsersPopup] = useState(false)
  const [chosenReason, setChosenReason] = useState('')
  console.log(chosenReason)

  const popupForControlRef = useRef<HTMLDivElement>(null)
  const closePopupForControl = () => {
    setIsOpen(false)
  }

  useClosePopupClickDocument(popupForControlRef, isOpen, closePopupForControl, [isOpen])

  const closePopup = () => {
    setChosenReason('')
    setIsOpenDeleteUsersPopup(false)
    setIsOpenBlockingUsersPopup(false)
    setIsOpen(false)
  }

  const deleteUserHandler = () => {
    deleteUser && userId && deleteUser({ variables: { input: { id: userId } } })
    setChosenName && setChosenName(userName)
    closePopup()
  }

  const banUserHandler = () => {
    banUser && userId && banUser({ variables: { input: { id: userId, banReason: chosenReason } } })
    setChosenName && setChosenName(userName)
    closePopup()
  }

  return (
    <div className={styles.topPanel} ref={popupForControlRef}>
      {isOpen && (
        <div className={styles.controlElements}>
          <button onClick={() => setIsOpenDeleteUsersPopup(true)}>
            <IcomoonReact iconSet={iconSet} color={'#fff'} icon="person-remove-outline" size={20} />
            <span>Delete User</span>
          </button>
          <button onClick={() => setIsOpenBlockingUsersPopup(true)}>
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
        show={isOpenDeleteUsersPopup}
        title={'Delete user'}
        text={`Are you sure to delete this user, ${userName} ?`}
        closeActionHandler={closePopup}
        confirmActionHandler={deleteUserHandler}
      />
      <ConfirmActionPopup
        block={true}
        show={isOpenBlockingUsersPopup}
        title={'Ban user'}
        text={`Are you sure to ban this user, ${userName} ?`}
        closeActionHandler={closePopup}
        confirmActionHandler={banUserHandler}
        setChosenReason={setChosenReason}
        chosenReason={chosenReason}
      />
    </div>
  )
}
