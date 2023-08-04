import React, { ChangeEvent, useEffect, useState } from 'react'
import { InputLabel, MenuItem, Select, SelectChangeEvent, TextareaAutosize } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import style from './select.module.scss'

type PropsType = {
  handleChange: (value: string) => void
  chosenReason: string
}

export const SelectForPopup = ({ handleChange, chosenReason }: PropsType) => {
  const [selectValue, setSelectValue] = useState('')
  const [textareaValue, setTextareaValue] = useState('')
  const onChangeHandler = (event: SelectChangeEvent) => {
    setSelectValue(event.target.value)
  }
  const onChangeTextareaHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value)
  }

  useEffect(() => {
    if (chosenReason === '' || chosenReason === undefined) {
      setSelectValue('')
      setTextareaValue('')
    }
  }, [chosenReason])

  useEffect(() => {
    if (selectValue === 'Another reason' && textareaValue !== '') {
      handleChange(textareaValue)
    } else {
      handleChange(selectValue)
    }
  }, [textareaValue, selectValue])

  return (
    <FormControl fullWidth className={style.wrapperSelect}>
      {selectValue !== 'Another reason' ? (
        <>
          <InputLabel size={'small'} className={style.label} id="label" sx={{ textAlign: 'center' }}>
            Reason for ban
          </InputLabel>
          <Select
            value={selectValue}
            className={style.select}
            onChange={onChangeHandler}
            size="small"
            label="reason for ban"
            labelId="label"
          >
            <MenuItem value={'Bad behavior'}>Bad behavior</MenuItem>
            <MenuItem value={'Advertising placement'}>Advertising placement</MenuItem>
            <MenuItem value={'Another reason'}>Another reason</MenuItem>
          </Select>
        </>
      ) : (
        <TextareaAutosize
          value={textareaValue}
          onChange={onChangeTextareaHandler}
          className={style.textarea}
          placeholder="Your reason…"
          style={{ height: '100px' }}
        />
      )}
    </FormControl>
  )
}
