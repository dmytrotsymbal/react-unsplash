import { configureStore } from '@reduxjs/toolkit'
import unsplashReducer from './unsplashSlice'
import loadMoreSlice from './loadMoreSlice'
import likesSlice from './likesSlice'
import likesCountSlice from './likesCountSlice'
import favoritesSlice from './favoritesSlice'
import unsplashMobileSlice from './unsplashMobileSlice'

export const store = configureStore({
    reducer: {
        unsplash: unsplashReducer,
        unsplashMobile: unsplashMobileSlice,
        //---------------------------------------------------
        loadMore: loadMoreSlice,
        productsLikeState: likesSlice,
        likesCountState: likesCountSlice,
        favoritesState: favoritesSlice,
    },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
