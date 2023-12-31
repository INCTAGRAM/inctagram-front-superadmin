import styles from '../Layout.module.scss'
import { NextPage } from 'next'
import { PropsWithChildren, ReactElement } from 'react'
import { Header } from '@/common/header/Header'

const BaseLayout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.content_center}>
        <main>{children}</main>
      </div>
    </>
  )
}

export const getBaseLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>
}
