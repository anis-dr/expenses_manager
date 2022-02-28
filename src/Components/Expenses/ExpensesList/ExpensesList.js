import React from 'react'
import ExpenseItem from '../ExpenseItem'
import styles from './ExpensesList.module.css'

const ExpensesList = ({ expenses }) => {
  if (expenses.length === 0) {
    return (
      <div className={styles.expenses_list__fallback}>
        <h3>No expenses</h3>
      </div>
    )
  }

  return (
    <ul className={styles.expenses_list}>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </ul>
  )
}

export default ExpensesList
