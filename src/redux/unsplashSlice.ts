import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export type Image = {
    id: string
    description: string | null
    alt_description: string | null
    urls: {
        regular: string
        small: string
    }
    updated_at: string
    user: {
        name: string | null
        username: string | null
        bio: string | null
        location: string | null
        portfolio_url: string //website link
        instagram_username: string | null
        twitter_username: string | null

        profile_image: {
            small: string
            medium: string
            large: string
        }
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

// export const fetchRandomImages = createAsyncThunk(
//     'unsplashRandom/fetchRandomImages',

//     async () => {
//         try {
//             const response = await axios.get(
//                 'https://api.unsplash.com/photos/random?client_id=s2iDMNtNY-yGTP-Q8T1X3dNDY8Dw3vzuBE6T1ia07hg&count=9'
//             )
//             return response.data
//         } catch (error) {
//             throw new Error('Failed to fetch images')
//         }
//     }
// )

export const fetchImages = createAsyncThunk(
    'unsplash/fetchImages',
    async (page: number) => {
        try {
            const response = await axios.get(
                `https://api.unsplash.com/photos?page=${page}&client_id=s2iDMNtNY-yGTP-Q8T1X3dNDY8Dw3vzuBE6T1ia07hg&per_page=30`
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

        //--------------------------------------------------------------------

        // .addCase(fetchRandomImages.pending, (state) => {
        //     state.status = 'loading'
        //     state.error = null
        // })

        // .addCase(
        //     fetchRandomImages.fulfilled,
        //     (state, action: PayloadAction<Image[]>) => {
        //         state.status = 'succeeded'
        //         state.images = action.payload
        //     }
        // )

        // .addCase(fetchRandomImages.rejected, (state, action) => {
        //     state.status = 'failed'
        //     state.error = action.error.message ?? 'Failed to fetch images'
        // })
    },
})

export default unsplashSlice.reducer

// https://api.unsplash.com/photos/random?client_id=s2iDMNtNY-yGTP-Q8T1X3dNDY8Dw3vzuBE6T1ia07hg&count=30
