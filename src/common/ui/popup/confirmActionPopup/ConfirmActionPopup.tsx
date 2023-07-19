import { Popup } from '@/common/ui/popup/Popup'
import React from 'react'
import { Button } from '@/common/ui/button/Button'
import styles from './ConfirmActionPopup.module.scss'
import { ClassicSelect } from '@/common/ui/classicSelect/ClassicSelect'

type CloseDeletePopupType = {
  show: boolean
  block?: boolean
  title: string
  text: string
  confirmActionHandler: () => void
  closeActionHandler: () => void
  confirmTextButton?: string
  closeTextButton?: string
  setChosenReason?: (reason: string) => void
  chosenReason?: string
}

export const ConfirmActionPopup = ({
  show,
  block,
  title,
  text,
  closeActionHandler,
  confirmActionHandler,
  confirmTextButton,
  closeTextButton,
  setChosenReason,
  chosenReason,
}: CloseDeletePopupType) => {
  const handleChangeHandler = (reason: string) => {
    setChosenReason && setChosenReason(reason)
  }
  return (
    <Popup title={title} show={show} modalOnClick={closeActionHandler}>
      <div className={styles.wrapperPopup}>
        <p className={styles.wrapperChildren}>{text}</p>
        {block && (
          <ClassicSelect
            chosenReason={chosenReason ? chosenReason : ''}
            handleChange={(reason) => handleChangeHandler(reason)}
          />
        )}
        <div className={styles.wrapperButton}>
          <Button
            onClick={confirmActionHandler}
            className={`${styles.button} ${styles.btnYes}`}
            disabled={chosenReason === ''}
          >
            {confirmTextButton ? confirmTextButton : 'Yes'}
          </Button>
          <Button onClick={closeActionHandler} className={styles.button}>
            {closeTextButton ? closeTextButton : 'No'}
          </Button>
        </div>
      </div>
    </Popup>
  )
}
