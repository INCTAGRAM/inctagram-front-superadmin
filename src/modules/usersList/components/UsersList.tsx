import { useQuery } from '@apollo/client'
import { GetUsers } from '@/modules/usersList/queries/users'
import { BanFilterType, SortDirectionType, UserSortFields, UsersQuery } from '@/helpers/gql/graphql'
import { Table } from '@/modules/usersList/components/table/Table'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { UsersListArgsType } from '@/modules/usersList/queries/types'
import { InputText } from '@/common/ui/inputText/InputText'
import { useDebounce } from '@/modules/usersList/hooks/useDebounce'
import iconSet from '@/assets/icons/selection.json'
import IcomoonReact from 'icomoon-react'
import { LinearProgress } from '@mui/material'
import { ClassicSelect } from '@/common/ui/classicSelect/CalssicSelect'
import styles from './UsersList.module.scss'

export const UsersList = () => {
  const [searchValue, setSearchValue] = useState('')
  const [selectBanValue, setSelectBanValue] = useState<BanFilterType>(BanFilterType.All)
  const [usersArgs, setUsersArgs] = useState<UsersListArgsType>({
    sortDirection: SortDirectionType.Desc,
    sortField: UserSortFields.DateAdded,
    banFilter: selectBanValue,
  })
  const {
    loading,
    data = {} as UsersQuery,
    error,
  } = useQuery<UsersQuery>(GetUsers, {
    variables: usersArgs,
  })
  const debounceValue = useDebounce<string>(searchValue as string)

  useEffect(() => {
    setUsersArgs({ ...usersArgs, searchUsernameTerm: searchValue })
  }, [debounceValue])

  useEffect(() => {
    setUsersArgs({ ...usersArgs, banFilter: selectBanValue })
  }, [selectBanValue])
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value)
  }
  if (loading)
    return (
      <div className={styles.linerLoading}>
        <LinearProgress />
      </div>
    )
  if (data) {
    return (
      <>
        <div className={styles.selectWrapper}>
          <InputText
            className={styles.search}
            type={'search'}
            onChange={onChangeHandler}
            value={searchValue}
            placeholder={'Search'}
            autoFocus={true}
          >
            <IcomoonReact iconSet={iconSet} color={'#8D9094'} icon="search" size={20} className={styles.searchIcon} />
          </InputText>
          <ClassicSelect selectValue={selectBanValue} handleChange={setSelectBanValue} />
        </div>
        <Table usersData={data} usersArgs={usersArgs} setUsersArgs={setUsersArgs} variables={usersArgs} />
      </>
    )
  }
}
