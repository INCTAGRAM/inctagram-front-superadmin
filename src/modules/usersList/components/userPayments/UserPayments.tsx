import { useQuery } from '@apollo/client'
import { GetUserPayments } from '@/modules/usersList/queries/users'
import { useRouter } from 'next/router'
import { TablePayments } from '@/modules/usersList/components/userPayments/table/TablePayments'

export const UserPayments = () => {
  const { query } = useRouter()

  const { loading, error, data } = useQuery(GetUserPayments, {
    variables: {
      userId: query.id as string,
      page: 1,
      pageSize: 5,
    },
    skip: !query.id,
  })

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>error...</h1>

  return (
    <>
      <TablePayments data={data?.userPayments?.data} />
    </>
  )
}
