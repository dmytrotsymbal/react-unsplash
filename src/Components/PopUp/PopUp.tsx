import { Dialog, DialogContent, DialogActions, Button } from '@mui/material'
import { Image } from 'redux/unsplashSlice'
import InstagramIcon from '@mui/icons-material/Instagram'
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser'
import TwitterIcon from '@mui/icons-material/Twitter'

import './PopUp.scss'
import { Link } from 'react-router-dom'

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

                            <p className="AuthorInfoHeaderName">
                                Author: {image.user.name}
                            </p>

                            <p className="AuthorInfoHeaderLocation">
                                {image.user.location}
                            </p>

                            <div className="authorLinks">
                                <a
                                    style={{
                                        textDecoration: 'none',
                                        color: 'black',
                                    }}
                                    target="_blank"
                                    href={`https://www.instagram.com/${image.user.instagram_username}/`}
                                    rel="noreferrer"
                                >
                                    <InstagramIcon />
                                </a>

                                <a
                                    style={{
                                        textDecoration: 'none',
                                        color: 'black',
                                    }}
                                    target="_blank"
                                    href={image.user.portfolio_url}
                                    rel="noreferrer"
                                >
                                    <OpenInBrowserIcon />
                                </a>

                                <a
                                    style={{
                                        textDecoration: 'none',
                                        color: 'black',
                                    }}
                                    target="_blank"
                                    href={`https://twitter.com/${image.user.twitter_username}/`}
                                    rel="noreferrer"
                                >
                                    <TwitterIcon />
                                </a>
                            </div>

                            <p className="authorInfoTotalPhotos">
                                Total photos: {image.user.total_photos}
                            </p>
                        </div>

                        <div className="AuthorInfoMain">
                            <p className="AuthorInfoMainBio">
                                {image.user.bio}
                            </p>

                            <div className="AuthorMainPhotoInfo">
                                <p className="PhotoAltDescription">
                                    {image.alt_description}
                                </p>
                                <p className="PhotoDescription">
                                    {image.description}
                                </p>
                                <p className="PhotoDate">
                                    Realise date:
                                    {dateObject.toLocaleDateString()}
                                </p>

                                <Link to={`/image/${image.id}`}>
                                    <div className="PhotoImageContainer">
                                        <img
                                            className="PhotoImage"
                                            src={image.urls.regular}
                                            alt="urls.regular"
                                        />

                                        <h3 className="ClickToFull">
                                            Click to get full image
                                        </h3>
                                    </div>
                                </Link>
                            </div>
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
