import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header>
            <Link className="logo" to="/"> Nintendo Wii GOAT</Link>
            <Link className='favoritos' to="/favoritos">Meus Jogos</Link>
        </header>
    )
}

export default Header;