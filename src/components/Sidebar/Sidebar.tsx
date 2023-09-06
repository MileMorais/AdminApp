import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHomeAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <main>
            <header className='header'>
                <div className='header-toggle'>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </header>

            <aside className='sidebar'>
                <nav className='nav'>
                    <div>
                        <Link to='/' className='nav-logo'>
                            <FontAwesomeIcon icon={faHomeAlt} />
                        </Link>

                        <div className='nav-list'>

                        </div>

                    </div>
                </nav>
            </aside>
        </main>
    )
};

export default Sidebar;