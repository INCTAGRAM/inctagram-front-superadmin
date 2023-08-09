import React, { useRef, useState } from 'react'
import { useClosePopupClickDocument } from '@/hooks/useClosePopupClickDocument'
import iconSet from '@/assets/icons/selection.json'
import IcomoonReact from 'icomoon-react'
import { ConfirmActionPopup } from '@/common/ui/popup/confirmActionPopup/ConfirmActionPopup'
import styles from './PopupForControl.module.scss'
import { DeleteUserInput } from '@/hooks/useDeleteMutation'
import { BanUserInput } from '@/modules/usersList/hooks/useBanMutation'
import { FetchResult } from '@apollo/client'
import { ID } from 'graphql-ws'
import { UnBanUserInput } from '@/modules/usersList/hooks/useUnBanMutation'

type DeleteUserFunction = (options: { variables: DeleteUserInput }) => Promise<FetchResult<ID>>
type BanUserFunction = (options: { variables: BanUserInput }) => Promise<FetchResult<ID>>
type UnBanUserFunction = (options: { variables: UnBanUserInput }) => Promise<FetchResult<ID>>

export type PopupForControlType = {
  isOpen: boolean
  setIsOpen: (arg: boolean) => void
  setLastMutation?: (kind: string) => void
  deleteUser?: DeleteUserFunction
  banUser?: BanUserFunction
  unBanUser?: UnBanUserFunction
  userId: string
  setChosenName?: (arg: string) => void
  userName: string
}

export const PopupForControl = ({
  userId,
  userName,
  setIsOpen,
  setLastMutation,
  isOpen,
  deleteUser,
  banUser,
  unBanUser,
  setChosenName,
}: PopupForControlType) => {
  const [isOpenDeleteUsersPopup, setIsOpenDeleteUsersPopup] = useState(false)
  const [isBanPopup, setIsBanPopup] = useState(false)
  const [isOpenBlockingUsersPopup, setIsOpenBlockingUsersPopup] = useState(false)
  const [chosenReason, setChosenReason] = useState('')

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
    setLastMutation && setLastMutation('delete')
  }

  const banUserHandler = () => {
    banUser && userId && banUser({ variables: { input: { id: userId, banReason: chosenReason } } })
    setChosenName && setChosenName(userName)
    closePopup()
    setIsBanPopup(false)
    setLastMutation && setLastMutation('ban')
  }

  const unBanUserHandler = () => {
    unBanUser && userId && unBanUser({ variables: { input: { id: userId } } })
    setChosenName && setChosenName(userName)
    closePopup()
    setIsBanPopup(false)
    setLastMutation && setLastMutation('unBan')
  }
  const blockingHandler = () => {
    setIsOpenBlockingUsersPopup(true)
    setIsBanPopup(true)
  }
  const unBlockingHandler = () => {
    setIsOpenBlockingUsersPopup(true)
    setIsBanPopup(false)
  }

  return (
    <div className={styles.topPanel} ref={popupForControlRef}>
      {isOpen && (
        <div className={styles.controlElements}>
          <button onClick={() => setIsOpenDeleteUsersPopup(true)}>
            <IcomoonReact iconSet={iconSet} color={'#fff'} icon="person-remove-outline" size={20} />
            <span>Delete User</span>
          </button>
          <button onClick={() => blockingHandler()}>
            <IcomoonReact iconSet={iconSet} color={'#fff'} icon="Block" size={20} />
            <span>Ban in the system</span>
          </button>
          <button onClick={() => unBlockingHandler()}>
            <IcomoonReact iconSet={iconSet} color={'#fff'} icon="eye-outline" size={20} />
            <span>Un-ban in the system</span>
          </button>
          <button onClick={() => alert('Change later')}>
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
        isBanPopup={isBanPopup}
        show={isOpenBlockingUsersPopup}
        title={isBanPopup ? 'Ban user' : 'Un-ban user'}
        text={`Are you sure to ${isBanPopup ? 'ban' : 'un-ban'} this user, ${userName} ?`}
        closeActionHandler={closePopup}
        confirmActionHandler={isBanPopup ? banUserHandler : unBanUserHandler}
        setChosenReason={setChosenReason}
        chosenReason={chosenReason}
      />
    </div>
  )
}
