import React, { useState } from 'react';
import styles from './auth.module.scss';
import Card from '../../components/card/Card';
import { TiUserAddOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import PasswordInput from '../../components/passwordInput/PasswordInput';

const initialState = {
    name: '',
    email: '',
    password: '',
    password2: '',
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);

  const { name, email, password, password2 } = formData;

  const handleInputChange = () => {}

  const loginUser = () => {};
  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
            <div className="--flex-center">
                <TiUserAddOutline size={35} color='#999' />
            </div>
            <h2>Inscription</h2>

            <form onSubmit={loginUser}>
                <input type="text" placeholder='Nom' required name='name' value={name} onChange={handleInputChange} />
                <input type="email" placeholder='Email' required name='email' value={email} onChange={handleInputChange} />
                {/* <input type="password" placeholder='Mot de passe' required name='password' value={password} onChange={handleInputChange} /> */}
                <PasswordInput placeholder='Mot de Passe' value={password} name='password' onChange={handleInputChange} />
                <PasswordInput placeholder='Confirmez votre mot de passe' value={password2} name='password2' onChange={handleInputChange} />

                <button type='submit' className="--btn --btn-primary --btn-block">Inscription</button>
            </form>
            <Link to='/forgot'>Mot de passe oublié</Link>

            <span className={styles.register}>
                <Link to='/'>Accueil</Link>
                <p> &nbsp;Vous avez déjà un compte? &nbsp;</p>
                <Link to='/connexion'>Connexion</Link>
            </span>
        </div>
      </Card>
    </div>
  )
}

export default Register;
