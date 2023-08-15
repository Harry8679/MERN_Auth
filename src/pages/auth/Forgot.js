import React, { useState } from 'react';
import styles from './auth.module.scss';
import Card from '../../components/card/Card';
import { AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Forgot = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = () => {}

  const forgotPassword = () => {};
  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
            <div className="--flex-center">
                <AiOutlineMail size={35} color='#999' />
            </div>
            <h2>Mot de passe oublié</h2>

            <form onSubmit={forgotPassword}>
                <input type="email" placeholder='Email' required name='email' value={email} onChange={handleInputChange} />

                <button type='submit' className="--btn --btn-primary --btn-block">Connexion</button>
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

export default Forgot;
