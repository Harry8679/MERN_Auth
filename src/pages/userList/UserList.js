import React from 'react';
import './UserList.scss';
import PageMenu from '../../components/pageMenu/PageMenu';
import UserStats from '../../components/userStats/UserStats';
import Search from '../../components/search/Search';
import { FaTrashAlt } from 'react-icons/fa';

const UserList = () => {
  return (
    <section>
      <div className="container">
        <PageMenu />
        <UserStats />

        <div className="user-list">
            <div className="table">
                <div className="--flex-between">
                    <h3>Tous les utilisateurs</h3>
                    <span><Search /></span>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>s/n</th>
                            <th>Nom</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Changer de rôle</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>EBANG</td>
                            <td>ebang.mezui@wizards.us</td>
                            <td>Admin</td>
                            <td>Changer de rôle</td>
                            <td>
                                <span>
                                    <FaTrashAlt size={20} color='red' />
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </section>
  )
}

export default UserList;
