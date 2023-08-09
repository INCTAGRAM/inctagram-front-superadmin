import { UserInfo } from '@/modules/usersList/components/userInfo/UserInfo'
import { TopPanel } from '@/modules/usersList/components/topPanel/TopPanel'
import { getBaseLayout } from '@/common/layout/baseLayout/BaseLayout'
import { LinkButton } from '@/common/ui/linkButton/LinkButton'
import { RouteNames } from '@/constants/routes'

const Index = () => {
  return (
    <>
      <LinkButton href={RouteNames.USERS_LIST} icon={'arrow-back-outline'} text={'Back to Users List'} />
      <UserInfo />
      <TopPanel />
    </>
  )
}

Index.getLayout = getBaseLayout
export default Index
