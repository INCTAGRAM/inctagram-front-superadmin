import { useMutation } from '@apollo/client'
import { UN_BAN_USERS } from '@/modules/usersList/mutation/users'
import { GetUsers } from '@/modules/usersList/queries/users'
import { UsersListArgsType } from '@/modules/usersList/queries/types'

export type UserType = {
  __typename?: 'UserOutput'
  id: string
  username: string
  profileLink: string
  dateAdded: string
}

export interface UnBanUserInput {
  input: {
    id: string
  }
}
export const useUnBanMutation = (variables: UsersListArgsType) => {
  const [unBanUser, { error: unBanUserError, called: unBanUsersCalled, data: unBanUsersData }] = useMutation<
    any,
    UnBanUserInput
  >(UN_BAN_USERS, {
    update: (cache, { data: { unBanUser } }) => {
      const { userList } = cache.readQuery<any>({ query: GetUsers, variables }) || { userList: [] }
      const updatedUser = userList?.data.find((user: UserType) => user.id === unBanUser)
      const newUser = { ...updatedUser, isBanned: false }
      const updatedData = userList?.data.map((user: UserType) => (user.id === unBanUser ? newUser : user))
      cache.writeQuery({
        query: GetUsers,
        variables,
        data: { userList: { ...userList, data: updatedData } },
      })
    },
  })

  return { unBanUser, unBanUserError, unBanUsersCalled, unBanUsersData }
}
