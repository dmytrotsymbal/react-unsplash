import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks'
import './AdaptiveMenu.scss'

type Anchor = 'top' | 'left' | 'bottom' | 'right'

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    })

    const sunnyTheme = useAppSelector((state) => state.theme.sunnyTheme)
    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return
            }

            setState({ ...state, [anchor]: open })
        }

    const list = (anchor: Anchor) => (
        <Box
            sx={{
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List className={sunnyTheme ? 'sideBar' : 'sideBar-dark'}>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Link
                                className={sunnyTheme ? 'link' : 'link-dark'}
                                to="/"
                            >
                                Home
                            </Link>
                        </ListItemIcon>
                        <ListItemText />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Link
                                className={sunnyTheme ? 'link' : 'link-dark'}
                                to="/mobiles"
                            >
                                Mobile wallpapers
                            </Link>
                        </ListItemIcon>
                        <ListItemText />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Link
                                className={sunnyTheme ? 'link' : 'link-dark'}
                                to="/favorites"
                            >
                                Favorites
                            </Link>
                        </ListItemIcon>
                        <ListItemText />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
        </Box>
    )

    return (
        <div>
            {(['right'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                        <MenuIcon
                            className={
                                sunnyTheme ? 'MenuIcon' : 'MenuIcon-dark'
                            }
                        />
                    </Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    )
}
