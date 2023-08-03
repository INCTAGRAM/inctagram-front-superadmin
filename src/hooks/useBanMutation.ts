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
  const [banUser, { error: banUserError, called: banUsersCalled }] = useMutation<any, BanUserInput>(BAN_USERS, {
    update: (cache, { data: { banUser } }) => {
      const { userList } = cache.readQuery<any>({ query: GetUsers, variables }) || { userList: [] }
      const updatedUser = userList?.data.find((user: UserType) => user.id === banUser)
      const newUser = { ...updatedUser, isBanned: true }
      console.log(newUser)
      cache.writeQuery({
        query: GetUsers,
        variables,
        data: { userList: { ...userList, data: { ...userList, newUser } } },
      })
    },
  })

  return { banUser, banUserError, banUsersCalled }
}
