import { user } from '../../public/iconsAndLogos'
import './MyAccount.scss'

const MyAccount = () => {
    return (
        <button aria-label='Mi cuenta' className='btn-myAccount'>
            <img src={user} alt='user' />
            <p>Mi Cuenta</p>
        </button>
    )
}

export default MyAccount