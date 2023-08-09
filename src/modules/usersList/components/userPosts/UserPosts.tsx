import { useQuery } from '@apollo/client'
import Image from 'next/image'
import { GetUserPhoto } from '@/modules/usersList/queries/users'
import { useRouter } from 'next/router'

export const UserPosts = () => {
  const { query } = useRouter()

  const { loading, error, data } = useQuery(GetUserPhoto, {
    variables: {
      userId: query.id as string,
      page: 1,
      pageSize: 5,
    },
    skip: !query.id,
  })

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>error...</h1>

  const list = data?.userPhotos?.data.map((post, index) => {
    return (
      <Image
        key={index}
        width={200}
        height={200}
        alt={'ava'}
        src={post.previewUrl as string}
        style={{ margin: '5px' }}
      />
    )
  })

  return <div>{list}</div>
}
