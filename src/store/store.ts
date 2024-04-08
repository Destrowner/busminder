import { configureStore } from '@reduxjs/toolkit'

import {
    bus,
    buses,
} from './reducers'

export const store = configureStore({
    reducer: {
        bus: bus.reducer,
        buses: buses.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
