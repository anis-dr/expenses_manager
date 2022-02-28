import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

function NewExpense({ onAddExpense }) {
  const handleSubmitted = (expense) => {
    const expenseData = {
      ...expense,
      createdAt: new Date(expense.createdAt),
      id: Date.now()
    }

    onAddExpense(expenseData)
  }

  return (
    <div className="new-expense">
      <ExpenseForm handleSubmitted={handleSubmitted} />
    </div>
  )
}

export default NewExpense
