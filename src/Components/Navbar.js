import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3">
                <div className="flex-row d-flex">
                    <a className="navbar-brand" href="#">Employee Record</a>
                </div>               
                <div className="navbar-collapse collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#" >Alert</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" >About</a>
                            
                        </li>                       
                    </ul>
                    
                </div>
            </nav>
        </div>
    );
};

export default Navbar;