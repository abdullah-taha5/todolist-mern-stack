import express from "express";
import Todo from "./../models/todosList.js";
const router = express.Router();

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getTodo = async (req, res) => {
    const {id} = req.params;
    try {
       const todo = await Todo.findById(id);
       res.status(200).json(todo);
    } catch (error) {
        res.status(404).json({ message: error.message });
    } 
}
export const createTodo = async (req, res) => {
  const { todo } = req.body;
  const newTodo = new Todo({ todo });
  try {
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const deleteTodo = async (req, res) => {
    const {id} = req.params;
    await Todo.findByIdAndRemove(id);
    res.status(200).json({message: "Deleted"})
}
export const updateTodo = async (req, res) => {
    const {id} = req.params;
    const {todo} = req.body
    const updatedTodo = {todo, _id:id};
    await Todo.findByIdAndUpdate(id, updatedTodo);
    res.json(updatedTodo);
}
export default router;
