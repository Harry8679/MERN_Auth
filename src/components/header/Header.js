import React from 'react';
import './Header.scss';
import { BiLogIn } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const activeLink = ({ isActive }) => (isActive ? 'active': '');

const Header = () => {

  const navigate = useNavigate();
  
  const goHome = () => {
    navigate('/');
  };
    
  return (
    <header className='header'>
      <nav>
        <div className="logo" onClick={goHome}>
            <BiLogIn size={35} />
            <span>EMARH</span>
        </div>

        <ul className="home-links">
            <li className='--flex-center'>
                <FaUserCircle size={20} />
                <p className="--color-white">
                    Hi Emarh |
                </p>
            </li>
            <li>
                <button className="--btn --btn-primary">
                    <Link to='/connexion'>Connexion</Link>
                </button>
            </li>
            <li>
                <NavLink to='/profil' className={activeLink}>Profil</NavLink>
            </li>
            <li>
                <button className="--btn --btn-secondary">
                    <Link to='/connexion'>Déconnexion</Link>
                </button>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
