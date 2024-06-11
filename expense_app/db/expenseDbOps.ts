import { Expense } from "../models/expenseModel";

const expenses: Expense[] = [];

let currentId = 1;

export const getExpenses = (): Expense[] => expenses;

export const getExpenseById = (id: number): Expense | undefined => {
    return expenses.find(expense => expense.id === id);
};

export const addExpense = (newExpense: Omit<Expense, 'id'>): Expense => {
    const expense: Expense = { id: currentId++, ...newExpense };
    expenses.push(expense);
    return expense;
};

export const updateExpense = (updatedExpense: Expense, id: number): boolean => {
    const index = expenses.findIndex(expense => expense.id === id);
    if (index !== -1) {
        expenses[index] = updatedExpense;
        return true;
    }
    return false;
};

export const patchExpense = (id: number, partialExpense: Partial<Expense>): Expense | null => {
    const index = expenses.findIndex(expense => expense.id === id);
    if (index !== -1) {
        const existingExpense = expenses[index];
        const updatedExpense = { ...existingExpense, ...partialExpense };
        expenses[index] = updatedExpense;
        return updatedExpense;
    }
    return null;
};


export const deleteExpense = (id: number): boolean => {
    const index = expenses.findIndex(expense => expense.id === id);
    if (index !== -1) {
        expenses.splice(index, 1);
        return true;
    }
    return false;
};
