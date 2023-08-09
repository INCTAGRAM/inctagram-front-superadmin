import { useMutation } from '@apollo/client'
import { BAN_USERS } from '@/modules/usersList/mutation/users'
import { GetUsers } from '@/modules/usersList/queries/users'
import { UsersListArgsType } from '@/modules/usersList/queries/types'

export type UserType = {
  __typename?: 'UserOutput'
  id: string
  username: string
  profileLink: string
  dateAdded: string
}

export interface BanUserInput {
  input: {
    id: string
    banReason: string
  }
}

export const useBanMutation = (variables: UsersListArgsType) => {
  const [
    banUser,
    { error: banUserError, called: banUsersCalled, loading: banUsersLoading, data: banUsersData, client },
  ] = useMutation<any, BanUserInput>(BAN_USERS, {
    update: (cache, { data: { banUser } }) => {
      const { userList } = cache.readQuery<any>({ query: GetUsers, variables }) || { userList: [] }
      const updatedUser = userList?.data.find((user: UserType) => user.id === banUser)
      const newUser = { ...updatedUser, isBanned: true }
      const updatedData = userList?.data.map((user: UserType) => (user.id === banUser ? newUser : user))
      cache.writeQuery({
        query: GetUsers,
        variables,
        data: { userList: { ...userList, data: updatedData } },
      })
    },
  })
  return { banUser, banUserError, banUsersCalled, banUsersLoading, banUsersData, client }
}
