import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import tasksReducer from "./tasks/tasksSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        tasks: tasksReducer,
    },
    });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;