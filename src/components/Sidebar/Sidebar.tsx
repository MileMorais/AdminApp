import React, {useState} from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDollarSign, faGaugeHigh, faHomeAlt, faHotel, faImage, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const [show, setShow] = useState(false)

    return (
        <main className={show ? 'space-toggle' : ''}>
            <header className={`header ${show ? 'space-toggle' : null}`}>
                <div className='header-toggle' onClick={() => setShow(!show)}>
                    <FontAwesomeIcon icon={faBars} className='' />
                </div>
            </header>

            <aside className={`sidebar ${show ? 'show' : null }`}>
                <nav className='nav'>
                    <div>
                        <Link to='/' className='nav-logo'>
                            <FontAwesomeIcon icon={faHomeAlt} className='nav-logo-icon' />
                            <span className='nav-logo-name'>Página Inicial</span>
                        </Link>

                        <div className='nav-list'>
                            <Link to='/dashboard' className='nav-link active'>
                                <FontAwesomeIcon icon={faGaugeHigh} className='nav-link-icon' />
                                <span className='nav-link-name'>Dashboard</span>
                            </Link>
                            <Link to='/hotel' className='nav-link'>
                                <FontAwesomeIcon icon={faHotel} className='nav-link-icon' />
                                <span className='nav-link-name'>Hotel</span>
                            </Link>
                            <Link to='/gallery' className='nav-link'>
                                <FontAwesomeIcon icon={faImage} className='nav-link-icon' />
                                <span className='nav-link-name'>Galeria</span>
                            </Link>
                            <Link to='/transaction' className='nav-link'>
                                <FontAwesomeIcon icon={faDollarSign} className='nav-link-icon' />
                                <span className='nav-link-name'>Transação</span>
                            </Link>
                        </div>
                    </div>

                    <Link to='/logout' className='nav-link'>
                        <FontAwesomeIcon icon={faSignOut} className='nav-link-icon' />
                        <span className='nav-link-name'>Sair</span>
                    </Link>
                </nav>
            </aside>

            <h1>Conteúdo</h1>
        </main>
    );
};

export default Sidebar;