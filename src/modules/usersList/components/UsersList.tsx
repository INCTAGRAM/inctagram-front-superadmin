import { useQuery } from '@apollo/client'
import { GetUsers } from '@/modules/usersList/queries/users'

export const UsersList = () => {
  const { loading, error, data } = useQuery(GetUsers)

  console.log(data?.userList.data)
  console.log(error)

  if (loading) return <h1>Loading</h1>

  if (data) {
    return (
      <>
        {data.userList.data.map((user, i) => (
          <div key={i}>{user.username}</div>
        ))}
      </>
    )
  }

  return <div>UsersList</div>
}
