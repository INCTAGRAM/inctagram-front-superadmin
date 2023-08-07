import { useMutation } from '@apollo/client'
import { DELETE_USERS } from '@/modules/usersList/mutation/users'
import { GetUsers } from '@/modules/usersList/queries/users'
import { UsersListArgsType } from '@/modules/usersList/queries/types'

export type UserType = {
  __typename?: 'UserOutput'
  id: string
  username: string
  profileLink: string
  dateAdded: string
}
export interface DeleteUserInput {
  input: {
    id: string
  }
}

export const useDeleteMutation = (variables: UsersListArgsType) => {
  const [deleteUser, { error: deleteUserError, called }] = useMutation<any, DeleteUserInput>(DELETE_USERS, {
    // when we use refetchQueries update function does not work
    refetchQueries: [
      GetUsers, // DocumentNode object parsed with gql
    ],
    update: (cache, { data: { deleteUser } }) => {
      const { userList } = cache.readQuery<any>({ query: GetUsers, variables }) || { userList: [] }
      const updatedData = userList?.data.filter((user: UserType) => user.id !== deleteUser)
      cache.writeQuery({
        query: GetUsers,
        variables,
        data: { userList: { ...userList, data: updatedData } },
      })
    },
  })

  return { deleteUser, deleteUserError, called }
}
