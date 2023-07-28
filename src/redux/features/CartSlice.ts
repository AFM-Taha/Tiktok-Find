'use clint'

import { createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";

export interface CartState {
    cart: any[];
    totalPrice: number
}



const initialState: CartState = {
    cart: [],
    totalPrice: 0
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isExist = state.cart.find((c: any) => c.id === action.payload.id)

            if (isExist) {
                toast.error('This product already added!')
                return
            } else {
                state.cart = [...state.cart, { ...action.payload }]
                toast.success('Successfully added')
            }

        },
        removeOne: (state, action) => {
            const removeOne = state.cart.filter((c: any) => c.id !== action.payload)
            state.cart = removeOne
            toast.error('Removed')
        },
        removeAll: (state) => {
            state.cart = []
            toast.error('Cart Clear')
        },
        quantityIncreaseByOne: (state, action) => {
            const itemIndex = state.cart.findIndex((item) => item.id === action.payload);
            const mainCart = state.cart
            mainCart[itemIndex].quantity = mainCart[itemIndex].quantity + 1
        },
        quantityDecreaseByOne: (state, action) => {
            const itemIndex = state.cart.findIndex((item) => item.id === action.payload);
            const mainCart = state.cart

            if (mainCart[itemIndex].quantity < 2) {
                return
            }

            mainCart[itemIndex].quantity = mainCart[itemIndex].quantity - 1
        },
        countTotalPrice: (state) => {
            // Total Price
            let totalP = 0
            for (const item of state.cart) {
                const oneProductPrice = item.price * item.quantity
                totalP += oneProductPrice
            }
            state.totalPrice = totalP
        }

    }
})

export const { addToCart, removeOne, removeAll, quantityIncreaseByOne, quantityDecreaseByOne, countTotalPrice } = cartSlice.actions

export default cartSlice.reducer