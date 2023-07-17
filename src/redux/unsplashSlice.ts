import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

interface Image {
    id: string
    description: string | null
    alt_description: string
    urls: {
        regular: string
        small: string
    }
    user: {
        name: string
        username: string
    }
    likes: number
}

interface UnsplashState {
    images: Image[]
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
}

const initialState: UnsplashState = {
    images: [],
    status: 'idle',
    error: null,
}

export const fetchImages = createAsyncThunk(
    'unsplash/fetchImages',
    async () => {
        try {
            const response = await axios.get(
                'https://api.unsplash.com/photos/random?client_id=s2iDMNtNY-yGTP-Q8T1X3dNDY8Dw3vzuBE6T1ia07hg&count=50'
            )
            return response.data
        } catch (error) {
            throw new Error('Failed to fetch images')
        }
    }
)

const unsplashSlice = createSlice({
    name: 'unsplash',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchImages.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(
                fetchImages.fulfilled,
                (state, action: PayloadAction<Image[]>) => {
                    state.status = 'succeeded'
                    state.images = action.payload
                }
            )
            .addCase(fetchImages.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message ?? 'Failed to fetch images'
            })
    },
})

export default unsplashSlice.reducer
