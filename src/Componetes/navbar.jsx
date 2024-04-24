import {Link} from 'react-router-dom'

export default function Navbar() {

    return(
    <div className='Navbar'>
        <a>
                <Link to='/'>Home</Link>
        </a>
        <a>
                <Link to='/Sobre'>Sobre</Link>
        </a>
        <a>
                <Link to='/Contato'>Contato</Link>
        </a>
    </div>
    )
    }