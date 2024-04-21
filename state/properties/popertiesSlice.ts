import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Properties } from '@/src/API';
import { generateClient } from "aws-amplify/api";
import { listProperties } from "../../src/graphql/queries";
import { RootState } from '../store';

const client = generateClient()

const initialState: Properties[] = []

const propertiessSlice = createSlice({
    name: 'properties',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(porpertiesList.fulfilled, (state, action) => {
            return action.payload
        })
    }
});

export const porpertiesList = createAsyncThunk(
    'properties/propertiesList',
    async () => {
        const response = await client.graphql({
            query: listProperties
        })
        return response.data.listProperties.items
    }
);

export const selectAllProperties = (state: RootState) => state.properties
export default propertiessSlice.reducer;