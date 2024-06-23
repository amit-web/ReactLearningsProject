import {configureStore} from '@reduxjs/toolkit';
import todoReducer from "../feature/todo/todoSlice"

//Singal source of truth :---->
export const store = configureStore({
    reducer:todoReducer
});

