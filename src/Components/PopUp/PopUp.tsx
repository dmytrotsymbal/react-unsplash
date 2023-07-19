import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from '@mui/material'
import { Image } from 'redux/unsplashSlice'

type Props = {
    image: Image
    handleClose: () => void
    open: boolean
}
const PopUp = ({ image, handleClose, open }: Props) => {
    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Info about the Photo</DialogTitle>
                <DialogContent>
                    <p>{image.alt_description}</p>
                    <p>{image.user.location}</p>
                    <div>
                        <img
                            src={image.user.profile_image.large}
                            alt="authorImage"
                        />
                    </div>
                    <p>Author: {image.user.name}</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
export default PopUp
