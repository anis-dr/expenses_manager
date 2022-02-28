import Expenses from './Components/Expenses/Expenses'
import NewExpense from './Components/NewExpense/NewExpense'
import { useState } from 'react'

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: '1',
      description: 'Rent',
      amount: 19500,
      createdAt: new Date(2020, 0, 1)
    },
    {
      id: '2',
      description: 'Coffee',
      amount: 300,
      createdAt: new Date(2020, 0, 2)
    },
    {
      id: '3',
      description: 'Gum',
      amount: 50,
      createdAt: new Date(2020, 0, 4)
    }
  ])

  const handleNewExpense = (expense) => {
    setExpenses([expense, ...expenses])
  }

  return (
    <div>
      <NewExpense onAddExpense={handleNewExpense} />
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App
