import React, { useState } from 'react';
import styles from './auth.module.scss';
import Card from '../../components/card/Card';
import { MdPassword } from 'react-icons/md';
import { Link } from 'react-router-dom';
import PasswordInput from '../../components/passwordInput/PasswordInput';

const initialState = {
    password: '',
    password2: '',
};

const Reset = () => {
    const [formData, setFormData] = useState(initialState);
    const { password, password2 } = formData;


  const handleInputChange = () => {}

  const forgotPassword = () => {};
  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
            <div className="--flex-center">
                <MdPassword size={35} color='#999' />
            </div>
            <h2>Réinitialiser votre mot de passe</h2>

            <form onSubmit={forgotPassword}>
                <PasswordInput placeholder='Mot de Passe' value={password} name='password' onChange={handleInputChange} />
                <PasswordInput placeholder='Confirmez votre mot de passe' value={password2} name='password2' onChange={handleInputChange} />

                <button type='submit' className="--btn --btn-primary --btn-block">Réinitialisation</button>
                <div className={styles.links}>
                    <p><Link to='/'>- Accueil</Link></p>
                    <p><Link to='/connexion'>- Connexion</Link></p>
                </div>
            </form>

        </div>
      </Card>
    </div>
  )
}

export default Reset;
