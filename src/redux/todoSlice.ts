import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoState {
    todos: Todo[];
    filter: string;
    searchTerm: string;
}



const initialState: TodoState = {
    todos: [],
    filter: "ALL",
    searchTerm: ""
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.todos.push({ id: state.todos.length +1 , text: action.payload, completed: false });
        },
        filterTodo: (state, action: PayloadAction<string>) => {
            state.filter = action.payload;
        },
        setSearchTerm: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload;
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }
    }
});

export const { addTodo, filterTodo, setSearchTerm, toggleTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
