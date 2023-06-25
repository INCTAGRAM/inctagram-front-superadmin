import { RouteNames } from '@/constants/routes'

export interface INavbar {
  name: string
  icon: string
  path: string
}

export const navbarPaths: INavbar[] = [
  { name: 'Users list', icon: 'person', path: RouteNames.USERS_LIST },
  { name: 'Statistics', icon: 'trending-up', path: RouteNames.STATISTICS },
  { name: 'Payments list', icon: 'credit-card-outline', path: RouteNames.PAYMENTS_LIST },
  { name: 'Posts list', icon: 'image-outline', path: RouteNames.POSTS_LIST },
]
