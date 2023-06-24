import { RouteNames } from '@/constants/routes'

export interface INavbar {
  name: string
  icon: string
  path: string
  class: string
}

export const navbarPaths: INavbar[] = [{ name: 'Home', icon: 'home-outline', path: RouteNames.HOME, class: '' }]
