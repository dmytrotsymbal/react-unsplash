import { IconButton } from '@mui/material'
import './Header.scss'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import SearchIcon from '@mui/icons-material/Search'

type Props = {}
const Header = (props: Props) => {
    return (
        <div className="Header">
            <div className="leftSizeHeader">
                <img
                    className="headerLogo"
                    src="https://png.pngtree.com/png-vector/20190508/ourmid/pngtree-gallery-vector-icon-png-image_1028015.jpg"
                    alt="headerLogo"
                />

                <button className="HeaderHomeButton">Home</button>
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
                <IconButton>
                    <NotificationsIcon />
                </IconButton>

                <IconButton>
                    <ThumbUpAltIcon />
                </IconButton>
            </div>
        </div>
    )
}
export default Header
