import { lupa } from '../../public/iconsAndLogos'
import './SearchBar.scss'
const SearchBar = () => {
    return (
        <form className='search-header'>
            <input
                type="search"
                placeholder='¿Qué estás buscando?'
            />
            <button aria-label='search' type='submit' ><img src={lupa} alt='search_lupa' /></button>
        </form>
    )
}

export default SearchBar