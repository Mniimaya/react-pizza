import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalPrice: 0,
    products: [],

}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct(state, action) {
            const findProduct = state.products.find(obj => obj.id === action.payload.id);

            if (findProduct) {
                findProduct.count++
            } else {
                state.products.push(
                    {
                        ...action.payload,
                        count: 1
                    }
                );
            }

            state.totalPrice = state.products.reduce((sum, obj) => {
                return sum + (obj.price * obj.count)
            }, 0)
        },
        revoveProduct(state, action) {
            state.products = state.products.filter(obj => obj.id !== action.payload);
        },
        clearProducts(state) {
            state.products = [];
        },
        minusProduct(state, action) {
            const findProduct = state.products.find(obj => obj.id === action.payload.id);

            if (findProduct && findProduct.count > 0) {
                findProduct.count--
            }
        }
    }
})

export const { addProduct, revoveProduct, clearProducts, minusProduct } = cartSlice.actions;
export default cartSlice.reducer;
