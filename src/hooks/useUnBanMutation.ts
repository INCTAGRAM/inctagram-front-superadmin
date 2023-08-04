import { useMutation } from '@apollo/client'
import { UN_BAN_USERS } from '@/modules/usersList/mutation/users'
import { GetUsers } from '@/modules/usersList/queries/users'
import { UsersListArgsType } from '@/modules/usersList/queries/types'
import { UnBanUserInput } from '@/helpers/gql/graphql'

export type UserType = {
  __typename?: 'UserOutput'
  id: string
  username: string
  profileLink: string
  dateAdded: string
}

export const useUnBanMutation = (variables: UsersListArgsType) => {
  const [unBanUser, { error: unBanUserError, called: unBanUsersCalled }] = useMutation<any, UnBanUserInput>(
    UN_BAN_USERS,
    {
      update: (cache, { data: { unBanUser } }) => {
        const { userList } = cache.readQuery<any>({ query: GetUsers, variables }) || { userList: [] }
        const updatedUser = userList?.data.find((user: UserType) => user.id === unBanUser)
        const newUser = { ...updatedUser, isBanned: false }
        cache.writeQuery({
          query: GetUsers,
          variables,
          data: { userList: { ...userList, data: { ...userList, newUser } } },
        })
      },
    }
  )

  return { unBanUser, unBanUserError, unBanUsersCalled }
}
