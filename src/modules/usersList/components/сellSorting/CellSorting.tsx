import React, { FC } from 'react'
import { ArrowDropUp as ArrowDropUpIcon, ArrowDropDown as ArrowDropDownIcon } from '@mui/icons-material'
import styles from './styles.module.scss'
import { SortDirectionType, UserSortFields } from '@/helpers/gql/graphql'

interface CellSortingProps {
  disabled?: boolean
  name: string
  firstValue: string
  secondValue: string
  handleChangeSorting?: (event: React.ChangeEvent<HTMLInputElement>) => void
  params: {
    sortDirection: SortDirectionType
    sortField: UserSortFields
  }
}

export const CellSorting: FC<CellSortingProps> = ({
  name,
  firstValue,
  secondValue,
  handleChangeSorting,
  params,
  disabled,
}) => {
  return (
    <span className={styles.container}>
      <label className={styles.label}>
        <ArrowDropUpIcon viewBox="6 6 12 8" fontSize="small" />
        <input
          type="radio"
          className={styles.radio}
          name={name}
          value={firstValue}
          onChange={handleChangeSorting}
          checked={params.sortField === name && params.sortDirection === firstValue}
          disabled={disabled}
        />
      </label>
      <label className={styles.label}>
        <ArrowDropDownIcon viewBox="6 10 12 8" fontSize="small" />
        <input
          type="radio"
          className={styles.radio}
          name={name}
          value={secondValue}
          onChange={handleChangeSorting}
          checked={params.sortField === name && params.sortDirection === secondValue}
          disabled={disabled}
        />
      </label>
    </span>
  )
}
