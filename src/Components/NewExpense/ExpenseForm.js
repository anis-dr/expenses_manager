import './ExpenseForm.css'
import { useState } from 'react'

const ExpenseForm = (props) => {
  const initState = {
    description: '',
    amount: 0.01,
    createdAt: ''
  }

  const [expense, setExpense] = useState(initState)

  const handleOnChange = (event) => {
    setExpense({
      ...expense,
      [event.target.name]: event.target.value
    })
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    setExpense(initState)
    props.handleSubmitted(expense)
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Description</label>
          <input
            type="text"
            onChange={handleOnChange}
            name="description"
            value={expense.description}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            onChange={handleOnChange}
            value={expense.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2024-12-31"
            name="createdAt"
            onChange={handleOnChange}
            value={expense.createdAt}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  )
}

export default ExpenseForm
