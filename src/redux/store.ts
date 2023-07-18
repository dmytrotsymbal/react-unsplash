import { configureStore } from '@reduxjs/toolkit'
import unsplashReducer from './unsplashSlice'
import paginationSlice from './paginationSlice'
import likesSlice from './likesSlice'

export const store = configureStore({
    reducer: {
        unsplash: unsplashReducer,
        pagination: paginationSlice,
        productsLikeState: likesSlice,
    },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
