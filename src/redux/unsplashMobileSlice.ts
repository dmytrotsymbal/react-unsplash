import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { Image } from 'types/ImageTypes'

export type MobileState = {
    mobileImages: Image[]
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
}

const initialState: MobileState = {
    mobileImages: [],
    status: 'idle',
    error: null,
}
export const fetchPhoneWallpapers = createAsyncThunk(
    'unsplash/fetchPhoneWallpapers',
    async (imagesPerPage: number) => {
        try {
            const mobileImages: Image[] = []
            let page = 1
            while (mobileImages.length < imagesPerPage) {
                const response = await axios.get(
                    `https://api.unsplash.com/photos?page=${page}&client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043&per_page=${imagesPerPage}`
                )
                if (response.data.length === 0) {
                    break
                }
                const filteredImages = response.data.filter((image: Image) => {
                    // Указываем соотношение сторон, которое считаем вертикальным (например, 9:16)
                    const aspectRatio = image.height / image.width
                    return aspectRatio > 1 // Вертикальные изображения имеют соотношение высоты к ширине больше 1
                })
                mobileImages.push(...filteredImages)
                page++
            }
            return mobileImages.slice(0, imagesPerPage)
        } catch (error) {
            throw new Error('Failed to fetch phone wallpapers')
        }
    }
)

const unsplashMobileSlice = createSlice({
    name: 'unsplashMobile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPhoneWallpapers.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(
                fetchPhoneWallpapers.fulfilled,
                (state, action: PayloadAction<Image[]>) => {
                    state.status = 'succeeded'
                    state.mobileImages = action.payload
                }
            )
            .addCase(fetchPhoneWallpapers.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message ?? 'Failed to fetch images'
            })
    },
})

export default unsplashMobileSlice.reducer

// https://api.unsplash.com/photos/random?client_id=s2iDMNtNY-yGTP-Q8T1X3dNDY8Dw3vzuBE6T1ia07hg&count=30
