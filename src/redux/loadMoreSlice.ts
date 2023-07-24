import { createSlice } from '@reduxjs/toolkit'

type loadMoreType = {
    imagesPerPageNumber: number
}

const initialState: loadMoreType = {
    imagesPerPageNumber: 30,
}

const loadMoreSlice = createSlice({
    name: 'loadMore',
    initialState,
    reducers: {
        loadMore: (state) => {
            state.imagesPerPageNumber += 30
        },
    },
})

export const { loadMore } = loadMoreSlice.actions

export default loadMoreSlice.reducer
