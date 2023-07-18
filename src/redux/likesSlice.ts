import { createSlice } from '@reduxjs/toolkit'

type likesType = {
    [id: string]: boolean
}

export const initialState: likesType = {}

export const likesSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        addLike: (state, action) => ({
            ...state,
            [action.payload]: true,
        }),

        removeLike: (state, action) => ({
            ...state,
            [action.payload]: false,
        }),
    },
})

export const { addLike, removeLike } = likesSlice.actions
export default likesSlice.reducer
