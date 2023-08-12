import React, { useEffect } from 'react'

import { FormControl, MenuItem, Pagination, Select, SelectChangeEvent } from '@mui/material'

import s from './UserListPagination.module.scss'
import { UsersListArgsType } from '@/modules/usersList/queries/types'
import { customPaginationStyle, customSelectStyle } from '@/constants/customStyle'

type PaginationPropsType = {
  pageCount: number
  totalCount: number
  currentPage: number
  setSearchParams: (arg: UsersListArgsType) => void
  params: UsersListArgsType
}
export const UserListPagination = ({
  params,
  currentPage,
  pageCount,
  totalCount,
  setSearchParams,
}: PaginationPropsType) => {
  const limit = Math.ceil(totalCount / pageCount)

  useEffect(() => {
    if (limit < currentPage) {
      setSearchParams({ ...params, page: 1 })
    }
  }, [currentPage, limit])

  const handler = (event: React.ChangeEvent<unknown>, currentPage: number) => {
    setSearchParams({ ...params, page: currentPage })
  }

  const perPageHandler = (event: SelectChangeEvent) => {
    const pageCount = +event.target.value
    setSearchParams({ ...params, pageSize: pageCount })
  }

  return (
    <div className={s.container}>
      <Pagination onChange={handler} page={currentPage} count={limit} sx={customPaginationStyle} />
      <div className={s.perPage}>
        <div>Show</div>
        <FormControl sx={{ margin: '0 1rem' }} size="small">
          <Select
            sx={customSelectStyle}
            value={(params.pageSize && params.pageSize.toString()) || '10'}
            onChange={perPageHandler}
          >
            <MenuItem className={s.menuItem} value={5}>
              5
            </MenuItem>
            <MenuItem className={s.menuItem} value={10}>
              10
            </MenuItem>
            <MenuItem className={s.menuItem} value={15}>
              15
            </MenuItem>
          </Select>
        </FormControl>
        <div>on page</div>
      </div>
    </div>
  )
}
