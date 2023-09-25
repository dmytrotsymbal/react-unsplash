export type Image = {
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

// const photosArray: Image[] = []

// export const getProductsObject = (array: Image[]) =>
//     array.reduce(
//         (object, product) => ({
//             ...object,
//             [product.id]: product,
//         }),
//         {}
//     )

// export const fetchPhotosFromAPI = async (): Promise<Image[]> => {
//     try {
//         const response = await fetch(
//             'https://api.unsplash.com/photos?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9'
//         )

//         if (response.ok) {
//             const photos = await response.json()
//             return photos as Image[]
//         } else {
//             console.error(
//                 'Error fetching photos from Unsplash:',
//                 response.status
//             )
//             throw new Error('Failed to fetch photos from Unsplash')
//         }
//     } catch (error) {
//         console.error('Error fetching photos from Unsplash:', error)
//         throw error
//     }
// }

// console.log(fetchPhotosFromAPI())

// export default photosArray
