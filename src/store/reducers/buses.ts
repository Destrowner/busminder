import {
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit'

import API from '../api'

export const fetchBuses: any = createAsyncThunk(
    'buses/fetchBuses',
    async () => {
        try {
            const buses = await API.fetchBuses()

            return buses
        } catch (error) {
            return []
        }
    },
)

const initialState = {
    buses: [],
    isLoading: false,
}

const slice = createSlice({
    name: 'buses',
    initialState,
    reducers: {
        clearState: (state) => {
            state = Object.assign({}, initialState)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBuses.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchBuses.fulfilled, (state, action) => {
                state.buses = action.payload
                state.isLoading = false
            })
            .addCase(fetchBuses.rejected, (state, action) => {
                state.buses = action.payload
                state.isLoading = false
            })
    },
})

export const { clearState } = slice.actions

export default slice
