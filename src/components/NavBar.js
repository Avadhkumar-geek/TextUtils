import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function NavBar(props) {

    return (
        <>
            <div>
                <nav className="navbar">
                    <div>
                        <Link className="navbar-brand ms-5" to='/'>
                            <img src={require('./logo192.png')} alt="" width="30" height="30" />
                        </Link>
                    </div>
                    <ul className='link'>
                        <li>
                            <Link className='link' to={'/'} >Home</Link>
                        </li>
                        <li>
                            <Link className='link' to={'/'} >About</Link>
                        </li>

                    </ul>
                    <div className="form-check form-switch me-5">
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch"
                            id="flexSwitchCheckDefault" />
                        <label className="form-check-label" style={props.mode} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
                </nav>
            </div>

        </>
    );
}

export default NavBar;