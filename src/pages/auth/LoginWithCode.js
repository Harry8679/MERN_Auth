import React, { useState } from 'react';
import styles from './auth.module.scss';
import Card from '../../components/card/Card';
import { GrInsecure } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const LoginWithCode = () => {
  const [loginCode, setLoginCode] = useState('');

//   const handleInputChange = () => {}

  const enterAccessCode = () => {};
  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
            <div className="--flex-center">
                <GrInsecure size={35} color='#999' />
            </div>
            <h2>Entrez le Code d'Accès</h2>

            <form onSubmit={enterAccessCode}>
                <input type="email" placeholder="Code d'accès" required name='accessCode' value={loginCode} onChange={(e) => setLoginCode(e.target.value)} />

                <button type='submit' className="--btn --btn-primary --btn-block">Procéder à la Connexion</button>
                <span className='--flex-center'>Le code vous a été envoyé par email. Vérifier vos emails</span>
                <div className={styles.links}>
                    <p><Link to='/'>- Accueil</Link></p>
                    <p className='v-link --color-primary'>- Renvoyer le Code</p>
                </div>
            </form>

        </div>
      </Card>
    </div>
  )
}

export default LoginWithCode;
