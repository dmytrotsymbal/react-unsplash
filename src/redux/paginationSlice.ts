import { createSlice } from '@reduxjs/toolkit'

type Page = {
    pageNumber: number
}

const initialState: Page = {
    pageNumber: 1,
}

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        nextPage: (state) => {
            state.pageNumber += 1
        },
        prevPage: (state) => {
            state.pageNumber -= 1
        },
    },
})

export const { nextPage, prevPage } = paginationSlice.actions

export default paginationSlice.reducer
