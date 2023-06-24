import styles from './Navbar.module.scss'
import iconSet from '@/assets/icons/selection.json'
import IcomoonReact from 'icomoon-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { INavbar, navbarPaths } from '@/common/navbar/navbarPaths'

export const Navbar = () => {
  const { asPath } = useRouter()

  return (
    <>
      <ul className={styles.navbar}>
        {navbarPaths.map((item: INavbar, index) => {
          const finalClass =
            asPath === item.path
              ? `${styles.active} ${styles.navbar_link} ${item.class}`
              : `${styles.navbar_link} ${item.class}`

          return (
            <li key={index} className={finalClass}>
              <Link href={item.path}>
                <IcomoonReact icon={item.icon} iconSet={iconSet} size={20} />
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
