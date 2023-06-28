import { getNavbarLayout } from '@/common/layout/navbarLayout/NavbarLayout'
import { UsersList } from '@/modules/usersList'

const Index = () => {
  return <UsersList />
}

Index.getLayout = getNavbarLayout
export default Index
