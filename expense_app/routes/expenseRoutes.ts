import { Router, Request, Response } from "express";
import { getExpenses, getExpenseById, addExpense, updateExpense, deleteExpense, patchExpense } from "../db/expenseDbOps";
import { Expense } from "../models/expenseModel";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.json(getExpenses());
});

router.get("/:id", (req: Request, res: Response) => {
    const expenseId = parseInt(req.params.id);
    const expense = getExpenseById(expenseId);
    if (expense) {
        res.status(200).json(expense);
    } else {
        res.status(400).json({ "error": "Expense not found!!" });
    }
});

router.post("/", (req: Request, res: Response) => {
    const newExpense: Omit<Expense, 'id'> = req.body;
    const addedExpense = addExpense(newExpense);
    res.status(200).json(addedExpense);
});

router.put("/:id", (req: Request, res: Response) => {
    const updatedExpense: Expense = req.body;
    const id = parseInt(req.params.id);
    const success = updateExpense(updatedExpense, id);
    if (success) {
        res.status(200).json(updatedExpense);
    } else {
        res.status(400).json({ "error": "Expense not found!!" });
    }
});

router.patch("/:id", (req: Request, res: Response) => {
    const partialExpense: Partial<Expense> = req.body;
    const id = parseInt(req.params.id);
    const updatedExpense = patchExpense(id, partialExpense);
    if (updatedExpense) {
        res.status(200).json(updatedExpense);
    } else {
        res.status(400).json({ "error": "Expense not found!!" });
    }
});

router.delete("/:id", (req: Request, res: Response) => {
    const expenseId = parseInt(req.params.id);
    const success = deleteExpense(expenseId);
    if (success) {
        res.status(200).json({ "message": "Expense deleted successfully!!" });
    } else {
        res.status(400).json({ "error": "Expense not found!!" });
    }
});

export default router;
