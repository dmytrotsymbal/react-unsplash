import { Badge, IconButton } from '@mui/material'
import './Header.scss'
import './Header-Dark.scss'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import SearchIcon from '@mui/icons-material/Search'
import { Link } from 'react-router-dom'
import TemporaryDrawer from 'Components/AdaptiveMenu/AdativeMenu'
import { useAppSelector } from 'redux/hooks'
import ThemeButton from 'Components/ThemeButton/ThemeButton'

type Props = {}
const Header = (props: Props) => {
    const favoritesImages = useAppSelector(
        (state) => state.favoritesState.images
    )

    const sunnyTheme = useAppSelector((state) => state.theme.sunnyTheme)

    return (
        <header className={sunnyTheme ? 'Header' : 'Header-dark'}>
            <div className="leftSizeHeader">
                <img
                    className="headerLogo"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
                    alt="headerLogo"
                />

                <Link to="/">
                    <button className="HeaderHomeButton">Home</button>
                </Link>
                <Link to="/mobiles">
                    <button className="HeaderMobileButton">Mobiles</button>
                </Link>
            </div>

            <div className="middleSizeHeader">
                <div className="searchInputContainer">
                    <SearchIcon className="searchIcon" />
                    <input
                        className="searchInput"
                        type="text"
                        placeholder="Search"
                    />
                </div>
            </div>

            <div className="rightSizeHeader">
                <ThemeButton />

                <IconButton>
                    <NotificationsIcon
                        className={sunnyTheme ? '' : 'NotificationsIconDark'}
                    />
                </IconButton>

                <Link to="/favorites">
                    <Badge
                        badgeContent={favoritesImages.length}
                        color="primary"
                    >
                        <IconButton>
                            <ThumbUpAltIcon
                                className={
                                    sunnyTheme ? '' : 'ThumbUpAltIconDark'
                                }
                            />
                        </IconButton>
                    </Badge>
                </Link>
            </div>

            <div className="adaptiveMenu">
                <TemporaryDrawer />
            </div>
        </header>
    )
}
export default Header
