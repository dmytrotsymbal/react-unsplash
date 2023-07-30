import MobilesList from './MobilesList'

type Props = {}
const Mobiles = (props: Props) => {
    return (
        <div style={{ width: '95%', margin: 'auto' }}>
            <h2 style={{ textAlign: 'center' }}>Mobiles wallpapers</h2>
            <MobilesList />
        </div>
    )
}
export default Mobiles
