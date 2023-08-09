import { useQuery } from '@apollo/client'
import { GetUserInfo } from '@/modules/usersList/queries/users'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from './UserInfo.module.scss'
import IcomoonReact from 'icomoon-react'
import iconSet from '@/assets/icons/selection.json'
import { dateConverter } from '@/helpers/dateConverter'

export const UserInfo = () => {
  const { query } = useRouter()

  const { loading, error, data } = useQuery(GetUserInfo, {
    variables: {
      id: query.id as string,
    },
    skip: !query.id,
  })

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>error...</h1>

  const avatar = data?.userInfo.avatar.previewUrl

  return (
    <>
      <div className={styles.profileInfo}>
        {avatar ? (
          <Image width={60} height={60} alt={'ava'} src={avatar} className={styles.avatar} />
        ) : (
          <IcomoonReact iconSet={iconSet} icon="image-outline" color={'white'} className={styles.avatar} size={60} />
        )}
        <div>{data?.userInfo.username}</div>
      </div>

      <div className={styles.info}>
        <div>
          <div>UserID</div>
          <div>{data?.userInfo.id}</div>
        </div>

        <div>
          <div>Profile Creation Date</div>
          <div>{data && dateConverter.fromMilliseconds(+data.userInfo.dateAdded)}</div>
        </div>
      </div>
    </>
  )
}
