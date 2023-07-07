import { useQuery } from '@apollo/client'
import { GetUsers } from '@/modules/usersList/queries/users'
import { BanFilterType, SortDirectionType, UserSortFields } from '@/helpers/gql/graphql'
import { Table } from '@/modules/usersList/components/table/Table'
import { ChangeEvent, useState } from 'react'
import { UsersListArgsType } from '@/modules/usersList/queries/types'
import { InputText } from '@/common/ui/inputText/InputText'
import styles from './UsersList.module.scss'

export const UsersList = () => {
  const [usersArgs, setUsersArgs] = useState<UsersListArgsType>({
    sortDirection: SortDirectionType.Desc,
    sortField: UserSortFields.DateAdded,
    banFilter: BanFilterType.All,
  })
  const { searchUsernameTerm } = usersArgs
  const { loading, data } = useQuery(GetUsers, {
    variables: usersArgs,
  })

  if (loading) return <h1>Loading</h1>
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUsersArgs({ ...usersArgs, searchUsernameTerm: event.currentTarget.value })
  }

  if (data) {
    return (
      <>
        <InputText
          className={styles.search}
          type={'search'}
          onChange={onChangeHandler}
          value={searchUsernameTerm}
          autoFocus={true}
        />
        <Table usersData={data} usersArgs={usersArgs} setUsersArgs={setUsersArgs} />
      </>
    )
  }

  return <div>UsersList</div>
}
