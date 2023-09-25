import { useAppSelector } from 'redux/hooks'
import './Footer.scss'

type Props = {}
const Footer = (props: Props) => {
    const sunnyTheme = useAppSelector((state) => state.theme.sunnyTheme)
    return (
        <footer className={sunnyTheme ? 'footer' : 'footer-dark'}>
            © 2023 React Gallery by
            <a
                href="https://github.com/dmytrotsymbal"
                target="_blank"
                rel="noreferrer"
            >
                <span>Dmytro</span>
            </a>
        </footer>
    )
}
export default Footer
