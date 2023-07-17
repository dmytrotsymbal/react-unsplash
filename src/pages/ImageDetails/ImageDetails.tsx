import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './ImageDetails.scss'

const ImageDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const [image, setImage] = useState<string | null>(null)

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await axios.get(
                    `https://api.unsplash.com/photos/${id}?client_id=s2iDMNtNY-yGTP-Q8T1X3dNDY8Dw3vzuBE6T1ia07hg`
                )
                setImage(response.data.urls.regular)
            } catch (error) {
                console.log(error)
            }
        }

        fetchImage()
    }, [id])

    if (!image) {
        return <div>Loading...</div>
    }

    return (
        <div className="ImageDetailsPage">
            <h4 style={{ textAlign: 'center' }}>Image Details</h4>
            <img className="BigImg" src={image} alt="Unsplash" />
        </div>
    )
}

export default ImageDetails
