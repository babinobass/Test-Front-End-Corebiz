import { menu, logo_black } from '../../public/iconsAndLogos'
import Cart from '../Cart/Cart'
import SearchBar from '../SearchBar/SearchBar'
import MyAccount from '../MyAccount/MyAccount'
import './Header.scss'

const Header = () => {

    return (
        <header className='header-container'>
            <button className='btn-header' aria-label='menu_navbar'><img src={menu} alt='menu_icon' /></button>
            <img className='header-logo' src={logo_black} alt='logo_corebiz' />
            <SearchBar />
            <MyAccount />
            <Cart />
        </header>
    )
}
export default Header