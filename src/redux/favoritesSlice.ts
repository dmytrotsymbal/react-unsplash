import { createSlice } from '@reduxjs/toolkit'
import { Image } from 'types/ImageTypes'

type likesType = {
    images: Image[]
}

export const initialState: likesType = {
    images: [],
}

export const likesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorites: (state, action) => {
            state.images.push(action.payload)
        },
        removeFromFavorites: (state, action) => {
            state.images = state.images.filter(
                (image) => image.id !== action.payload
            )
        },
    },
})

export const { addToFavorites, removeFromFavorites } = likesSlice.actions
export default likesSlice.reducer
