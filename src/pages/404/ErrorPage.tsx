import { useAppSelector } from 'redux/hooks'
import './ErrorPage.scss'
import { Link } from 'react-router-dom'

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

            <Link to="/" className="link">
                <button
                    className={
                        sunnyTheme ? 'error404-button' : 'error404-button_dark'
                    }
                >
                    Go to Home
                </button>
            </Link>
        </div>
    )
}

export default ErrorPage
