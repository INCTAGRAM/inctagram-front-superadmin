import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import styles from './Form.module.scss'

interface IFormProps {
  title: string
  isTopPanel?: boolean
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>
  redirect?: IRedirect
}

interface IRedirect {
  title?: string
  link: string
  linkTitle: string
}

const Form = ({ title, onSubmit, redirect, children }: PropsWithChildren<IFormProps>) => {
  return (
    <div className={styles.block}>
      <h1>{title}</h1>
      <div className={styles.content}>
        <form onSubmit={onSubmit}>{children}</form>
        {redirect && (
          <div className={styles.form_footer}>
            {redirect.title && <p>{redirect.title}</p>}
            <Link href={redirect.link}>{redirect.linkTitle}</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Form
