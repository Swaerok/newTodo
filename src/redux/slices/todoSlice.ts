import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoSliceState, TodoTasktype } from '../types/types';

const initialState: TodoSliceState = {
  modalWindow: {
    id: null,
    text: '',
    active: false,
  },
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoTasktype>) => {
      state.todos.push({ ...action.payload, completedStatus: false });
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((obj) => obj.id !== action.payload);
    },
    todoInModal: (state, action: PayloadAction<{ id: number; text: string }>) => {
      state.modalWindow = { ...action.payload, active: true };
    },
    deactivateModal: (state, action: PayloadAction<boolean>) => {
      state.modalWindow.active = action.payload;
    },
    updateTodoText: (state, action: PayloadAction<{ id: number; text: string }>) => {
      const todo = state.todos.find((item) => item.id === action.payload.id);
      if (todo) todo.text = action.payload.text;
    },
    changeTodoStatus: (
      state,
      action: PayloadAction<{ id: number; completedStatus: boolean | undefined }>,
    ) => {
      const todo = state.todos.find((item) => item.id === action.payload.id);
      if (todo) todo.completedStatus = action.payload.completedStatus;
    },
    deleteCompleted: (state) => {
      const todo = state.todos.filter((item) => item.completedStatus === false);
      if (todo) state.todos = todo;
    },
    clearTodos: (state) => {
      state.todos = [];
    },
  },
});

export const {
  addTodo,
  removeTodo,
  todoInModal,
  deactivateModal,
  updateTodoText,
  changeTodoStatus,
  deleteCompleted,
  clearTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
