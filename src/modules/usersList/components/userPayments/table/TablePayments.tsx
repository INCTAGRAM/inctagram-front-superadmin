import { FC } from 'react'
import { UserPaymentOutput } from '@/helpers/gql/graphql'
import { dateConverter } from '@/helpers/dateConverter'
import styles from './TablePayments.module.scss'

export const TablePayments: FC<TablePropsType> = ({ data }) => {
  const tableData = data?.map((el, index) => (
    <tr key={index}>
      <td>{dateConverter.fromMilliseconds(el.startDate)}</td>
      <td>{dateConverter.fromMilliseconds(el.endDate)}</td>
      <td>
        {el.price} {el.currency}
      </td>
      <td>{el.subscriptionType}</td>
      <td>{el.paymentType}</td>
    </tr>
  ))

  return (
    <>
      <table className={styles.paymentsTable}>
        <thead>
          <tr>
            <th>Date of Payments</th>
            <th>End date of subscription</th>
            <th>Amount</th>
            <th>Subscription type</th>
            <th>Payment type</th>
          </tr>
        </thead>
        <tbody>{tableData}</tbody>
      </table>
    </>
  )
}

type TablePropsType = {
  data: UserPaymentOutput[] | undefined
}
