import React from 'react'
import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import style from './ClassicSelect.module.css'

type PropsType = {
  value?: string
  handleChange: (value: string) => void
}

export const ClassicSelect = ({ value, handleChange }: PropsType) => {
  const onChangeHandler = (event: SelectChangeEvent) => {
    handleChange(event.target.value)
  }

  return (
    <FormControl fullWidth className={style.wrapperSelect}>
      <InputLabel size={'small'} className={style.label} id="label" sx={{ textAlign: 'center' }}>
        Reason for ban
      </InputLabel>
      <Select
        className={style.select}
        value={value}
        onChange={onChangeHandler}
        size="small"
        label="reason for ban"
        labelId="label"
      >
        <MenuItem value={'Bad behavior'}>Bad behavior</MenuItem>
        <MenuItem value={'Adverstising placement'}>Adverstising placement</MenuItem>
        <MenuItem value={'Another reason'}>Another reason</MenuItem>
      </Select>
    </FormControl>
  )
}
