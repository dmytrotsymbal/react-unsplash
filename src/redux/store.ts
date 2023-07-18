import { configureStore } from '@reduxjs/toolkit'
import unsplashReducer from './unsplashSlice'
import paginationSlice from './paginationSlice'

export const store = configureStore({
    reducer: {
        unsplash: unsplashReducer,
        pagination: paginationSlice,
    },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
