import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: localStorage.getItem("items")
        ? JSON.parse(localStorage.getItem("items"))
        : [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
            localStorage.setItem("items", JSON.stringify(state.items))
        },
        removeItem: (state, action) => {
            // state.items.pop();
            const removeItem = state.items.filter((item) => item.card.info.id !== action.payload);
            state.items = removeItem;
            localStorage.setItem("items", JSON.stringify(state.items))
        },
        clearCart: (state, action) => {
            state.items.length = 0;
            localStorage.removeItem("items")
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;