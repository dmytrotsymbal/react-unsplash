import { Dialog, DialogContent, DialogActions, Button } from '@mui/material'
import { Image } from 'redux/unsplashSlice'
import InstagramIcon from '@mui/icons-material/Instagram'
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser'
import TwitterIcon from '@mui/icons-material/Twitter'
import './PopUp.scss'

type Props = {
    image: Image
    handleClose: () => void
    open: boolean
}
const PopUp = ({ image, handleClose, open }: Props) => {
    //format data to normal----------------------------

    const dateString = image.updated_at
    const dateObject = new Date(dateString)

    //-------------------------------------------------

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                className="PopUpBackground"
            >
                <DialogContent className="PopUpWindow">
                    <div className="AuthorInfo">
                        <div className="AuthorInfoHeader">
                            <img
                                src={image.user.profile_image.large}
                                alt="authorImage"
                            />

                            <h5>@{image.user.username}</h5>

                            <p>Author: {image.user.name}</p>
                        </div>

                        <div className="AuthorInfoMain">
                            <div className="AuthorMainAddInfo">
                                <p>{image.user.location}</p>
                                <p>{image.user.bio}</p>
                            </div>

                            <div className="AuthorMainPhotoInfo">
                                <img
                                    style={{
                                        maxWidth: '550px',
                                    }}
                                    src={image.urls.regular}
                                    alt="urls.regular"
                                />
                                <p>{image.alt_description}</p>
                                <p>{image.description}</p>

                                <p>{dateObject.toLocaleDateString()}</p>
                            </div>
                        </div>

                        <div className="authorLinks">
                            <a
                                target="_blank"
                                href={`https://www.instagram.com/${image.user.instagram_username}/`}
                                rel="noreferrer"
                            >
                                <InstagramIcon />
                            </a>

                            <a
                                target="_blank"
                                href={image.user.portfolio_url}
                                rel="noreferrer"
                            >
                                <OpenInBrowserIcon />
                            </a>

                            <a
                                href={`https://twitter.com/${image.user.twitter_username}/`}
                            >
                                <TwitterIcon />
                            </a>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
export default PopUp
