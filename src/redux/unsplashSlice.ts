import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { Image } from 'types/ImageTypes'

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
    async (imagesPerPage: number) => {
        try {
            // Создаем пустой массив для хранения изображений
            const images: Image[] = []

            // Устанавливаем начальное значение страницы в 1
            let page = 1

            // Запускаем цикл, который будет запрашивать изображения до тех пор,
            // пока общее количество загруженных изображений не превысит imagesPerPage
            while (images.length < imagesPerPage) {
                // Отправляем GET запрос к API Unsplash, указывая номер страницы (page) и количество изображений на странице (imagesPerPage)
                const response = await axios.get(
                    `https://api.unsplash.com/photos?page=${page}&client_id=s2iDMNtNY-yGTP-Q8T1X3dNDY8Dw3vzuBE6T1ia07hg&per_page=${imagesPerPage}`
                )

                // Проверяем, если API не вернул изображения (response.data.length === 0),
                // значит, больше нет изображений для загрузки, и мы выходим из цикла
                if (response.data.length === 0) {
                    break
                }

                // Если есть изображения, добавляем их в массив images
                // Мы используем spread оператор (...)
                // чтобы добавить каждое изображение из response.data в массив images
                images.push(...response.data)

                // Увеличиваем значение страницы для получения следующей порции изображений
                page++
            }

            // Возвращаем массив изображений, ограниченный до imagesPerPage
            // Это делается для того, чтобы не загружать больше изображений,
            // чем указано в imagesPerPage
            return images.slice(0, imagesPerPage)
        } catch (error) {
            // Если произошла ошибка при запросе изображений, выбрасываем исключение
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
