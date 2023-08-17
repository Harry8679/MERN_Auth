import React from 'react';
import './UserStats.scss';
import { FaUsers } from 'react-icons/fa';
import { BiUserCheck, BiUserMinus, BiUserX } from 'react-icons/bi';
import InfoBox from '../infoBox/InfoBox';

// Icons
const icon1 = <FaUsers size={40} color='#fff' />;
const icon2 = <BiUserCheck size={40} color='#fff' />;
const icon3 = <BiUserMinus size={40} color='#fff' />;
const icon4 = <BiUserX size={40} color='#fff' />;

const UserStats = () => {
  return (
    <div className='user-summary'>
      <h3 className='--mt'>Stats des Utilisateurs</h3>
      <div className="info-summary">
        <InfoBox icon={icon1} title="Tous les Utilisateurs" count='20' bgColor='card1' />
        <InfoBox icon={icon2} title="Profil vérifié" count='7' bgColor='card2' />
        <InfoBox icon={icon3} title="Profil non vérifié" count='9' bgColor='card3' />
        <InfoBox icon={icon4} title="Suspendus" count='4' bgColor='card4' />
      </div>
    </div>
  )
}

export default UserStats
