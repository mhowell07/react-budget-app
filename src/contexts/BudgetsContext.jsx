import React, { useContext, useState } from "react"

// library imports
import { v4 as uuidV4} from 'uuid'
import useLocalStorage from "../hooks/useLocalStorage"

const BudgetsContext = React.createContext()

export const useBudgets = () => {
    return useContext(BudgetsContext)
}

export const BudgetsProvider = ({ children }) => {
    const [budgets, setBudgets] = useLocalStorage("budgets", [])
    const [expenses, setExpenses] = useLocalStorage("expenses", [])

    const getBudgetExpenses = (budgetId) => {
        return expenses.filter(expense => expense.budgetId === budgetId)
    }

    const addExpense = ({ description, amount, budgetId }) => {
        setExpenses(prevExpenses => {
            return [...prevExpenses, {id: uuidV4(), desctiption, amount, budgetId}]
        })
    }

    const addBudget = ({ name, max }) => {
        if (prevBudgets.find(budget => budget.name === name)) {
            return prevBudgets
        }
        setBudgets(prevBudgets => {
            return [...prevBudgets, {id: uuidV4(), name, max}]
        })
    }

    const deleteBudget = ( id ) => {
        // TODO: Deal with expenses
        setBudgets(prevBudgets => {
            return prevBudgets.filter(budget => budget.id !== id)
        })
    }

    const deleteExpense = ( id ) => {
        setExpenses(prevExpenses => {
            return prevExpenses.filter(expense => expense.id !== id)
        })
    }    

    return (
        <BudgetsContext.Provider value={{
            budgets,
            expenses,
            getBudgetExpenses,
            addExpense,
            addBudget,
            deleteBudget,
            deleteExpense
        }}>{children}</BudgetsContext.Provider>
    )
}