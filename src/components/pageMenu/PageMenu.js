import React from 'react';
import { NavLink } from 'react-router-dom';

const PageMenu = () => {
  return (
    <div>
      <nav className='--btn-google --p --mb'>
        <ul className="home-links">
            <li>
                <NavLink to='/profil'>Profil</NavLink>
            </li>
            <li>
                <NavLink to='/modifier-votre-mot-de-passe'>Modifier le mot de passe</NavLink>
            </li>
            <li>
                <NavLink to='/liste-des-utilisateurs'>Utilisateurs</NavLink>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default PageMenu;
