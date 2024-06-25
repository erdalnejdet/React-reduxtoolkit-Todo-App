import { createSlice } from "@reduxjs/toolkit";

// localStorage'dan verileri yükle
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('todoList');
        if (serializedState === null) {
            return undefined; 
        }
        return JSON.parse(serializedState); // JSON formatındaki stringi objeye çevirerek döndür
    } catch (err) {
        console.error('Error loading state from localStorage:', err);
        return undefined; 
    }
};

// localStorage'a verileri kaydet
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('todoList', serializedState);
    } catch (err) {
        console.error('Error saving state to localStorage:', err);
    }
};


const todoSlice = createSlice({
    name: 'todo',
    initialState: loadState() || { list: [] }, // localStorage'dan initialState'i yükle
    reducers: {
        addTodo: (state, action) => {
            state.list.push(action.payload);
            saveState(state); // State'i localStorage'a kaydet
        },
        removeTodo: (state, action) => {
            state.list = state.list.filter(todo => todo?.id !== action.payload?.id);
            saveState(state); // State'i localStorage'a kaydet
        },
        updateStatus(state, action) {
            const updatedAt = new Date().toLocaleString();
            state.list = state.list.map(todo => {
                const updatedTodo = todo.id === action.payload.id ? { ...todo, isDone: true, updatedAt } : todo;
                return updatedTodo;
            });
            saveState(state); // State'i localStorage'a kaydet
        }
        
    }
});

export const { addTodo, removeTodo, updateStatus } = todoSlice.actions;

export default todoSlice.reducer;
