import React, { useState } from 'react';
import './ChangePassword.scss';
import Card from '../../components/card/Card';
import profileImg from '../../assets/avatarr.png';
import PageMenu from '../../components/pageMenu/PageMenu';
import PasswordInput from '../../components/passwordInput/PasswordInput';

const initialState = {
    oldPassword: '',
    password: '',
    password2: ''
}

const ChangePassword = () => {
  const [formData, setFormData] = useState(initialState);

  const { oldPassword, password, password2 } = formData;

  const handleImageChange = () => {};
  const handleInputChange = () => {};
  return (
    <section>
      <div className="container">
        <PageMenu />
        <h2 className='--flex-center'>Modifier votre mot de passe</h2>
        <div className="--flex-center change-password">
            <Card cardClass={"card"}>
              <>
                <form>
                  <p>
                    <label htmlFor="">Mot de passe actuel</label>
                    <PasswordInput placeholder='Votre actuel mot de passe' value={oldPassword} name='oldPassword' onChange={handleInputChange} />
                  </p>
                  <p>
                    <label htmlFor="">Nouveau mot de passe</label>
                    <PasswordInput placeholder='Votre nouveau mot de passe' value={password} name='password' onChange={handleInputChange} />
                  </p>
                  <p>
                    <label htmlFor="">Confirmer votre mot de passe</label>
                    <PasswordInput placeholder='Confirmez votre mot de passe' value={password2} name='password2' onChange={handleInputChange} />
                  </p>
                  <button className="--btn --btn-danger --btn-block">Mise à jour du mot de passe</button>
                </form>
              </>
            </Card>
          </div>
        {/* <div className="--flex-start change-password">
            <Card className={'card'}>
                <>
                <form>
                    <p>
                        <label htmlFor="">Mot de passe actuel</label>
                        <PasswordInput placeholder='Mot de Passe' value={oldPassword} name='oldPassword' onChange={handleInputChange} />
                        <label htmlFor="">Nouveau mot de passe</label>
                        <PasswordInput placeholder='Nouveau mot de passe' value={password} name='password' onChange={handleInputChange} />
                        <label htmlFor="">Confirmer votre mot de passe</label>
                        <PasswordInput placeholder='Confirmez votre mot de passe' value={password2} name='password2' onChange={handleInputChange} />
                    </p>
                    <button className="--btn --btn-danger --btn-block">Mise à jour du mot de passe</button>
                </form>
                </>
            </Card>
        </div> */}
      </div>
    </section>
  )
}

export default ChangePassword;
