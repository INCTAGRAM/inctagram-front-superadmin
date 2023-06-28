import { useQuery } from '@apollo/client'
import { GetHealthCheck } from '@/modules/usersList/queries/users'

export const UsersList = () => {
  const { loading, error, data } = useQuery(GetHealthCheck)

  console.log(data)
  console.log(error)

  if (loading) return <h1>Loading</h1>

  if (data)
    return (
      <>
        <div>{data.healthCheck}</div>
      </>
    )

  return <div>UsersList</div>
}
