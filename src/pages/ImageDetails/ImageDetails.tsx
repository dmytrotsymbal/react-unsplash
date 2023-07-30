import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CustomLoader from 'Components/CustomLoader/CustomLoader'
import './ImageDetails.scss'

type Image = {
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
}

const ImageDetails = () => {
    const { id } = useParams<{ id: string }>()
    const [image, setImage] = useState<Image | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await axios.get(
                    `https://api.unsplash.com/photos/${id}?client_id=s2iDMNtNY-yGTP-Q8T1X3dNDY8Dw3vzuBE6T1ia07hg`
                )
                setImage(response.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }

        fetchImage()
    }, [id])

    if (loading) {
        return <CustomLoader />
    }

    if (!image) {
        return <div>Error</div>
    }

    return (
        <div className="ImageDetailsPage">
            <div style={{ width: '95%', margin: 'auto' }}>
                <h4 style={{ textAlign: 'center' }}>Image Details</h4>
                <p style={{ textAlign: 'center' }}>{image.user.username}</p>
                <img
                    className="BigImg"
                    src={image.urls.regular}
                    alt="Unsplash"
                />
            </div>
        </div>
    )
}

export default ImageDetails
