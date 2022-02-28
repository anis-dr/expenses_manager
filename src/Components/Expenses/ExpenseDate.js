import React from 'react'
import styles from './ExpenseDate.module.css'

const ExpenseDate = ({ createdAt }) => {
  const day = createdAt.toLocaleString('en-US', { day: '2-digit' })
  const mount = createdAt.toLocaleString('en-US', { month: 'long' })
  const year = createdAt.getFullYear()
  return (
    <div className={styles.expense_date}>
      <div className={styles.expense_date__day}>{day}</div>
      <div className={styles.expense_date__month}>{mount}</div>
      <div className={styles.expense_date__year}>{year}</div>
    </div>
  )
}

export default ExpenseDate
