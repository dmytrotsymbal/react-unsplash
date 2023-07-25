import { configureStore } from '@reduxjs/toolkit'
import unsplashReducer from './unsplashSlice'
import paginationSlice from './paginationSlice'
import loadMoreSlice from './loadMoreSlice'
import likesSlice from './likesSlice'
import likesCountSlice from './likesCountSlice'
import favoritesSlice from './favoritesSlice'

export const store = configureStore({
    reducer: {
        unsplash: unsplashReducer,
        pagination: paginationSlice,
        loadMore: loadMoreSlice,
        productsLikeState: likesSlice,
        likesCountState: likesCountSlice,
        favoritesState: favoritesSlice,
    },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
