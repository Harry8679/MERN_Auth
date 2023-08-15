import React, { useState, useEffect } from 'react';
import styles from './auth.module.scss';
import Card from '../../components/card/Card';
import { TiUserAddOutline } from 'react-icons/ti';
import { FaTimes } from 'react-icons/fa';
import { BsCheckAll } from 'react-icons/bs';
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

  const [uCase, setUCase] = useState(false);
  const [num, setNum] = useState(false);
  const [sChar, setSChar] = useState(false);
  const [passLength, setPassLength] = useState(false);

  const timesIcon = <FaTimes color='red' size={15} />;
  const checkIcon = <BsCheckAll color='green' size={15} />;

  const swithIcon = (condition) => {
    if (condition) {
        return checkIcon;
    }
    return timesIcon;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  useEffect(() => {
    // Check Lowercase and Uppercase
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        setUCase(true);
    } else {
        setUCase(false);
    }

    // Check for numbers
    if (password.match(/([0-9])/)) {
        setNum(true)
    } else {
        setNum(false)
    }

    // Check for the special characters
    if (password.match(/([!,@,#,$,%,^,&,*,_,~])/)) {
        setSChar(true);
    } else {
        setSChar(false);
    }

    // check for Password Length
    if (password.length > 5) {
        setPassLength(true);
    } else {
        setPassLength(false);
    }
  }, [password]);

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

                {/* Password Length Indicators */}
                <Card cardClass={styles.group}>
                    <ul className="form-list">
                        <li>
                            <span className={styles.indicator}>
                                {swithIcon(uCase)} &nbsp; Au moins une lettre en minuscule et en majuscule.
                            </span>
                        </li>
                        <li>
                            <span className={styles.indicator}>
                                {swithIcon(num)} &nbsp; Au moins un chiffre contenu entre 0 et 9.
                            </span>
                        </li>
                        <li>
                            <span className={styles.indicator}>
                                {swithIcon(sChar)} &nbsp; Au moins un caractère spécial (!@#$%^&*_,~).
                            </span>
                        </li>
                        <li>
                            <span className={styles.indicator}>
                                {swithIcon(passLength)} &nbsp; Au moins 6 caractères.
                            </span>
                        </li>
                    </ul>
                </Card>

                <button type='submit' className="--btn --btn-primary --btn-block">Inscription</button>
            </form>

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
