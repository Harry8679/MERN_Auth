import React, { useState } from 'react';
import styles from './auth.module.scss';
import Card from '../../components/card/Card';
import { BiLogIn } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import PasswordInput from '../../components/passwordInput/PasswordInput';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = () => {}

  const loginUser = () => {};
  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
            <div className="--flex-center">
                <BiLogIn size={35} color='#999' />
            </div>
            <h2>Connexion</h2>
            <div className="--flex-center">
                <button className="--btn --btn-google">Connexion avec Google</button>
            </div>
            <br />
            <p className="--text-center --fw-bold">Ou</p>

            <form onSubmit={loginUser}>
                <input type="email" placeholder='Email' required name='email' value={email} onChange={handleInputChange} />
                {/* <input type="password" placeholder='Mot de passe' required name='password' value={password} onChange={handleInputChange} /> */}
                <PasswordInput placeholder='Mot de Passe' value={password} name='password' onChange={handleInputChange} />

                <button type='submit' className="--btn --btn-primary --btn-block">Connexion</button>
            </form>
            <Link to='/mot-de-passe-oublie'>Mot de passe oublié</Link>

            <span className={styles.register}>
                <Link to='/'>Accueil</Link>
                <p> &nbsp;Pas encore de compte? &nbsp;</p>
                <Link to='/inscription'>Inscription</Link>
            </span>
        </div>
      </Card>
    </div>
  )
}

export default Login;
