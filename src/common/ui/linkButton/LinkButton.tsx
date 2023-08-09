import { FC } from 'react'
import iconSet from '@/assets/icons/selection.json'
import IcomoonReact from 'icomoon-react'
import Link from 'next/link'
import styles from './LinkButton.module.scss'

export const LinkButton: FC<LinkButtonPropsType> = ({ icon, href, text }) => {
  return (
    <div className={styles.container}>
      <Link href={href} className={styles.link}>
        <IcomoonReact iconSet={iconSet} icon={icon} size={16} className={styles.icon} color={'white'} />
        {text}
      </Link>
    </div>
  )
}

type LinkButtonPropsType = {
  icon: string
  href: string
  text: string
}
