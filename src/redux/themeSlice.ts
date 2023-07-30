import { createSlice } from '@reduxjs/toolkit'

type themeType = {
    sunnyTheme: boolean
}

export const initialState: themeType = {
    sunnyTheme: true,
}

export const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.sunnyTheme = !state.sunnyTheme
        },
    },
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer
