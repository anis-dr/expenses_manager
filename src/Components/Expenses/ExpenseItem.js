import { useState } from 'react'
import styles from './ExpenseItem.module.css'
import ExpenseDate from './ExpenseDate'

const ExportItem = ({ createdAt, description, amount }) => {
  const [updatedDescription] = useState(description)

  return (
    <div className={styles.expense_item}>
      <ExpenseDate createdAt={createdAt} />
      <div className={styles.expense_item__description}>
        <h2>{updatedDescription}</h2>
        <div className={styles.expense_item__price}>${amount}</div>
      </div>
    </div>
  )
}

export default ExportItem
