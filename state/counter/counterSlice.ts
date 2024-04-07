import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
    updateCount?: number;
    updating?: string | boolean;
}

const initialState: CounterState = {
    value: 0,
    updateCount: 0,
    updating: 'false',
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
            state.updateCount = state.updateCount ? state.updateCount + 1 : 1;
        },
        decrement: (state) => {
            state.value -= 1;
            state.updateCount = state.updateCount ? state.updateCount + 1 : 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
            state.updateCount = state.updateCount ? state.updateCount + 1 : 1;
        },
        reset: (state) => {
            state.value = 0;
            state.updateCount = 0;
        }
    },
    extraReducers: (builder) => {

        builder.addCase(incrementAsync.pending, (state) => {
            state.updating = 'true';
        })
        .addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
            state.value += action.payload;
            state.updateCount = state.updateCount ? state.updateCount + 1 : 1;
            state.updating = 'false';
        });

        builder.addCase(decrementAsync.pending, (state) => {
            state.updating = 'true';
        })
        .addCase(decrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
            state.value -= action.payload;
            state.updateCount = state.updateCount ? state.updateCount + 1 : 1;
            state.updating = 'false';
        });
    },
});

export const incrementAsync = createAsyncThunk(
    'counter/incrementAsync',
    async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 10000));
        return amount;
    }
);

export const decrementAsync = createAsyncThunk(
    'counter/decrementAsync',
    async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 10000));
        return amount;
    }
);

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;
export default counterSlice.reducer;