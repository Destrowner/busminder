import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    bus: null,
}

const slice = createSlice({
    name: 'buses',
    initialState,
    reducers: {
        selectBus: (state, action) => {
            state.bus = action.payload
        },
        clearState: (state) => {
            state = Object.assign({}, initialState)
        },
    },
})

export const {
    selectBus,
    clearState,
} = slice.actions

export default slice
