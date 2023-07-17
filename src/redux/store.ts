import { configureStore } from '@reduxjs/toolkit'
import unsplashReducer from './unsplashSlice'

export const store = configureStore({
    reducer: {
        unsplash: unsplashReducer,
    },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
