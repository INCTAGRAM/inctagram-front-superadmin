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
      // read the existing data from the cache
      const { userList } = cache.readQuery<any>({ query: GetUsers, variables }) || { userList: [] }
      // filter out the deleted user from the userList data array
      const updatedData = userList?.data.filter((user: UserType) => user.id !== banUser)
      // write the updated data to the cache
      cache.writeQuery({
        query: GetUsers,
        variables,
        data: { userList: { ...userList, data: updatedData } },
      })
    },
  })

  return { banUser, banUserError, banUsersCalled }
}
