import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slises/filterSlice'
export const store = configureStore({
    reducer: {
        filterSlice
    },
})