import styles from './Table.module.scss'
import { dateConverter } from '@/helpers/dateConverter'
import { UsersQuery } from '@/helpers/gql/graphql'
import IcomoonReact from 'icomoon-react'
import iconSet from '@/assets/icons/selection.json'

type Props = {
  usersData: UsersQuery
}

export const Table = ({ usersData }: Props) => {
  return (
    <table className={styles.usersTable}>
      <thead className={styles.userList}>
        <tr>
          <th>User ID</th>
          <th>Username</th>
          <th>Date added</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {usersData.userList.data.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{dateConverter.fromMilliseconds(+user.dateAdded)}</td>
              <td>
                <button>
                  <IcomoonReact iconSet={iconSet} icon={'more-horizontal'} size={16} color={'white'} />
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
