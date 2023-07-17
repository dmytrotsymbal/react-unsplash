import { Card } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import { Link } from 'react-router-dom'
import { Image } from 'utils/photosArray'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import { useState } from 'react'

type PhotoProps = {
    image: Image
}

const Photo = ({ image }: PhotoProps) => {
    const [like, setLike] = useState<boolean>(false)

    const toggleLike = () => {
        setLike(!like)
    }

    return (
        <>
            <Card className="PhotoElement">
                <img src={image.urls.small} alt="PhotoElementImg" />
                <button onClick={toggleLike} className="likesButton">
                    {like ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}

                    {like ? image.likes + 1 : image.likes}
                </button>
                <CardContent>
                    <Link
                        style={{ textDecoration: 'none' }}
                        to={`/image/${image.id}`}
                    >
                        <p className="CardLink">{image.alt_description}</p>
                    </Link>

                    <p>
                        Author: <span>{image.user.name}</span>
                    </p>
                </CardContent>
            </Card>
        </>
    )
}

export default Photo
