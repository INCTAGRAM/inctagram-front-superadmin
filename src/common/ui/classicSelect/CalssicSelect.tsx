import React from 'react'
import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import style from './ClassicSelect.module.scss'
import { customStyle } from '@/constants/customStyle'
import { BanFilterType } from '@/helpers/gql/graphql'

type PropsType = {
  handleChange: (arg: BanFilterType) => void
  selectValue?: 'Active' | 'All' | 'Banned'
}

export const ClassicSelect = ({ handleChange, selectValue }: PropsType) => {
  const onChangeHandler = (event: SelectChangeEvent) => {
    handleChange(event.target.value as BanFilterType)
  }

  return (
    <FormControl fullWidth className={style.wrapperSelect}>
      <Select sx={customStyle} value={selectValue} className={style.select} onChange={onChangeHandler} size="small">
        <MenuItem value={BanFilterType.All}>Not selected</MenuItem>
        <MenuItem value={BanFilterType.Banned}>Blocked</MenuItem>
        <MenuItem value={BanFilterType.Active}>Not Blocked</MenuItem>
      </Select>
    </FormControl>
  )
}
