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
        total_photos: number

        profile_image: {
            small: string
            medium: string
            large: string
        }
    }
    likes: number
    height: number
    width: number
}
