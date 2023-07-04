import { useQuery } from '@apollo/client'
import { GetUsers } from '@/modules/usersList/queries/users'
import { BanFilterType, SortDirectionType, UserSortFields } from '@/helpers/gql/graphql'
import { Table } from '@/modules/usersList/components/table/Table'
import { useState } from 'react'
import { UsersListArgsType } from '@/modules/usersList/queries/types'

export const UsersList = () => {
  const [usersArgs, setUsersArgs] = useState<UsersListArgsType>({
    sortDirection: SortDirectionType.Desc,
    sortField: UserSortFields.DateAdded,
    banFilter: BanFilterType.All,
  })
  const { loading, data } = useQuery(GetUsers, {
    variables: usersArgs,
  })

  if (loading) return <h1>Loading</h1>

  if (data) {
    return (
      <>
        <Table usersData={data} usersArgs={usersArgs} setUsersArgs={setUsersArgs} />
      </>
    )
  }

  return <div>UsersList</div>
}
