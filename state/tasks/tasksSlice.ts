import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '@/src/API';
import { generateClient } from "aws-amplify/api";
import { listTasks, getTask } from "../../src/graphql/queries";
import { RootState } from '../store';

const client = generateClient()

const initialState: Task[] = []

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(taskList.fulfilled, (state, action) => {
            return action.payload
        })
    }
});

export const taskList = createAsyncThunk(
    'tasks/taslList',
    async () => {
        const response = await client.graphql({
            query: listTasks
        })
        return response.data.listTasks.items
    }
);

export const selectAllTasks = (state: RootState) => state.tasks
export const selectTaskById = (state: RootState, id: string) => state.tasks.find(task => task.id === id)
export default tasksSlice.reducer;