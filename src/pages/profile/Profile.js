import React, { useState } from 'react';
import './Profile.scss';
import Card from '../../components/card/Card';
import profileImg from '../../assets/avatarr.png';
import PageMenu from '../../components/pageMenu/PageMenu';

const initialState = {
    name: '',
    email: 'rudolph.ebang@gmail.com',
    phone: '',
    bio: '',
    photo: '',
    role: '',
    isVerified: false
}

const Profile = () => {
  const [profile, setProfile] = useState(initialState);

  const handleImageChange = () => {};
  const handleInputChange = () => {};
  return (
    <section>
      <div className="container">
        <PageMenu />
        <h2>Profil</h2>
        <div className="--flex-start profile">
            <Card className={'card'}>
                <>
                <div className='profile-photo'>
                    <div className="profile-photo">
                        <img src={profileImg} alt="profileImg" />
                        <h3>Role: Abonné(e)</h3>
                    </div>
                </div>
                <form>
                    <p>
                        <label htmlFor="">Modifier la photo :</label>
                        <input type="file" accept='image/*' name='image' onChange={handleImageChange} />
                        <input type="text" name='name' onChange={handleInputChange} value={profile.name} />
                        <input type="email" name='email' onChange={handleInputChange} value={profile.email} disabled />
                        <input type="text" name='phone' onChange={handleInputChange} value={profile.phone} />
                        <label htmlFor="">Biographie</label>
                        <textarea name="bio" value={profile.bio} onChange={handleInputChange} cols="30" rows="10"></textarea>
                    </p>
                    <button className="--btn --btn-primary --btn-block">Mise à jour du profile</button>
                </form>
                </>
            </Card>
        </div>
      </div>
    </section>
  )
}

export default Profile;
