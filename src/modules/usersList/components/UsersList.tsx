import { useQuery } from '@apollo/client'
import { GetUsers } from '@/modules/usersList/queries/users'
import { BanFilterType, SortDirectionType, UserSortFields } from '@/helpers/gql/graphql'
import { Table } from '@/modules/usersList/components/table/Table'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { UsersListArgsType } from '@/modules/usersList/queries/types'
import { InputText } from '@/common/ui/inputText/InputText'
import styles from './UsersList.module.scss'
import { useDebounce } from '@/hooks/useDebounce'
import iconSet from '@/assets/icons/selection.json'
import IcomoonReact from 'icomoon-react'

export const UsersList = () => {
  const [searchValue, setSearchValue] = useState('')
  const [usersArgs, setUsersArgs] = useState<UsersListArgsType>({
    sortDirection: SortDirectionType.Desc,
    sortField: UserSortFields.DateAdded,
    banFilter: BanFilterType.All,
  })
  const { loading, data } = useQuery(GetUsers, {
    variables: usersArgs,
  })
  const debounceValue = useDebounce<string>(searchValue as string)

  useEffect(() => {
    setUsersArgs({ ...usersArgs, searchUsernameTerm: searchValue })
  }, [debounceValue])
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value)
  }
  if (loading) return <h1>Loading</h1>
  if (data) {
    return (
      <>
        <InputText
          className={styles.search}
          type={'Search'}
          onChange={onChangeHandler}
          value={searchValue}
          placeholder={'Search'}
        >
          <IcomoonReact iconSet={iconSet} color={'#8D9094'} icon="search" size={20} className={styles.searchIcon} />
        </InputText>
        <Table usersData={data} usersArgs={usersArgs} setUsersArgs={setUsersArgs} />
      </>
    )
  }

  return <div>UsersList</div>
}
