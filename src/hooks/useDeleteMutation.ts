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
type UserListType = {
  userList: {
    __typename?: 'UserPaginationOutput'
    totalCount: number
    data: Array<UserType>
  }
}

export interface DeleteUserInput {
  input: {
    id: string
  }
}

export const useDeleteMutation = (variables: UsersListArgsType) => {
  const [deleteUser, { error: deleteUserError, called }] = useMutation<any, DeleteUserInput>(DELETE_USERS, {
    update: (cache, { data: { deleteUser } }) => {
      // read the existing data from the cache
      const { userList } = cache.readQuery<any>({ query: GetUsers, variables }) || { userList: [] }
      // filter out the deleted user from the userList data array
      const updatedData = userList?.data.filter((user: UserType) => user.id !== deleteUser)
      // write the updated data to the cache
      cache.writeQuery({
        query: GetUsers,
        variables,
        data: { userList: { ...userList, data: updatedData } },
      })
    },
  })

  return { deleteUser, deleteUserError, called }
}
