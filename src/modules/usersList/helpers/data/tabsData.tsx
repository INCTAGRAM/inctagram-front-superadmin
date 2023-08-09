import { UserPosts } from '@/modules/usersList/components/userPosts/UserPosts'
import { UserPayments } from '@/modules/usersList/components/userPayments/UserPayments'

export const tabsData = [
  {
    id: 0,
    label: 'Upload photos',
    component: <UserPosts />,
  },
  {
    id: 1,
    label: 'Payments',
    component: <UserPayments />,
  },
  {
    id: 2,
    label: 'Followers',
    component: <div>Followers</div>,
  },
  {
    id: 3,
    label: 'Following',
    component: <div>Following</div>,
  },
]
