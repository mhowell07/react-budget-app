// custom componenets
import BudgetCard from "./BudgetCard"

// custom contexts
import { useBudgets } from "../contexts/BudgetsContext"

const TotalBudgetCard = () => {
    const { expenses, budgets } = useBudgets()
    const amount = expenses.reduce((total, expenses) => total + expenses.amount, 0)
    const max = budgets.reduce((total, budget) => total + budget.max, 0)

    if (max === 0) return null

    return (
        <BudgetCard amount={amount} name="Total" gray max={max} hideButtons />
    )
}

export default TotalBudgetCard