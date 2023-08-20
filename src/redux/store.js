import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slises/filterSlice'
import cartSlice from './slises/cartSlice'

export const store = configureStore({
    reducer: {
        filterSlice,
        cartSlice
    },
})