import { IconButton } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toggleTheme } from 'redux/themeSlice'

type Props = {}
const ThemeButton = (props: Props) => {
    const sunnyTheme = useAppSelector((state) => state.theme.sunnyTheme)

    const dispatch = useAppDispatch()

    return (
        <>
            <IconButton onClick={() => dispatch(toggleTheme())}>
                {sunnyTheme ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
        </>
    )
}
export default ThemeButton
