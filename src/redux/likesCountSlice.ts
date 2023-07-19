import { createSlice } from '@reduxjs/toolkit'

type likesCountType = {
    likesCount: number
}

export const initialState: likesCountType = {
    likesCount: 0,
}

export const likesCountSlice = createSlice({
    name: 'likeCount',
    initialState,
    reducers: {
        addLikeCount: (state, action) => {
            state.likesCount += 1
        },
        removeLikeCount: (state, action) => {
            state.likesCount -= 1
        },
    },
})

export const { addLikeCount, removeLikeCount } = likesCountSlice.actions
export default likesCountSlice.reducer
