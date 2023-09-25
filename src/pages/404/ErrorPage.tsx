import { useAppSelector } from 'redux/hooks'
import './ErrorPage.scss'

type Props = {}

const ErrorPage = (props: Props) => {
    const sunnyTheme = useAppSelector((state) => state.theme.sunnyTheme)
    return (
        <div
            className={
                sunnyTheme ? 'error404-container' : 'error404-container_dark'
            }
        >
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you are looking for does not exist.</p>
        </div>
    )
}

export default ErrorPage
