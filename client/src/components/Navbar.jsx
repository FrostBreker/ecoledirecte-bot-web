import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return <div>
        <nav>
            <ul>
                <li class="deroulant">Menu
                    <ul class="sous">
                        <li><h4><Link className="link" to="/">Home</Link></h4></li>
                        <li><h4><Link className="link" to="/login">Login</Link></h4></li>
                    </ul>
                </li>
            </ul>
        </nav>
        
        
    </div>
}

export default Navbar;