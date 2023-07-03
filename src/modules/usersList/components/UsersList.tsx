import { useQuery } from '@apollo/client'
import { GetUsers } from '@/modules/usersList/queries/users'
import { BanFilterType } from '@/helpers/gql/graphql'
import { Table } from '@/modules/usersList/components/table/Table'
import { useState } from 'react'

export const UsersList = () => {
  const [usersArgs, setUsersArgs] = useState<{ pageSize?: number; page?: number; banFilter: BanFilterType }>({
    banFilter: BanFilterType.Active,
  })
  const { loading, data } = useQuery(GetUsers, {
    variables: usersArgs,
  })

  console.log(data)

  if (loading) return <h1>Loading</h1>

  if (data) {
    return (
      <>
        <Table usersData={data} />
      </>
    )
  }

  return <div>UsersList</div>
}
