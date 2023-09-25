import './ErrorPage.scss'

type Props = {}

const ErrorPage = (props: Props) => {
    return (
        <div className="error404-container">
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you are looking for does not exist.</p>
        </div>
    )
}

export default ErrorPage
