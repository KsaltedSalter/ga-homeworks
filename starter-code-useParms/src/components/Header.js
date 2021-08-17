import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => (
    <header className="App-header">Natter
    
        <div>
            <nav>
                <ul>
                    <li>
                        <Link className="link" to="/buzzwords">Buzzwords</Link>
                    </li>
                    <li>
                        <Link className="link" to="/nats">Nats</Link>
                    </li>
                    <li>
                        <Link className="link" to="/profile">Profile</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
)

export default Header;