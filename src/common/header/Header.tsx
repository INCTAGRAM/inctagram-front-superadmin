import styles from './Header.module.scss'
import Image from 'next/image'
import Inctagram from '../../../public/logo/Inctagram.svg'

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logo}>
        <Image src={Inctagram} alt={'logo'} />
        <p>
          Super<b>Admin</b>
        </p>
      </div>
    </div>
  )
}
