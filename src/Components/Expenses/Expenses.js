import styles from './Expenses.module.css'
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter'
import { useState } from 'react'
import ExpensesList from './ExpensesList/ExpensesList'

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2021')

  const onFilterChange = (e) => {
    setFilteredYear(e.target.value)
  }

  const filteredExpenses = expenses.filter((expense) => {
    return '' + expense.createdAt.getFullYear() === filteredYear
  })

  return (
    <>
      <div className={styles.expense_list}>
        <ExpenseFilter selected={filteredYear} onFilterChange={onFilterChange} />
        <ExpensesList expenses={filteredExpenses} />
      </div>
    </>
  )
}

export default Expenses
