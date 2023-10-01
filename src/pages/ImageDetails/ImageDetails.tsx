import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CustomLoader from 'Components/CustomLoader/CustomLoader'
import './ImageDetails.scss'
import { useAppSelector } from 'redux/hooks'
import { Image } from 'types/ImageTypes'

const ImageDetails = () => {
    const { id } = useParams<{ id: string }>()
    const [image, setImage] = useState<Image | null>(null)
    const [loading, setLoading] = useState(true)

    const sunnyTheme = useAppSelector((state) => state.theme.sunnyTheme)

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
        <div
            className={
                sunnyTheme ? 'ImageDetailsPage' : 'ImageDetailsPage_dark'
            }
        >
            <div style={{ width: '95%', margin: 'auto' }}>
                <h4>Image Details</h4>
                <p>
                    Author:
                    <a
                        href={`https://www.instagram.com/${image.user.instagram_username}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <b>@{image.user.username}</b>
                    </a>
                </p>
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
