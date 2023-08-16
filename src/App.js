import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Layout from './layout/Layout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Forgot from './pages/auth/Forgot';
import Reset from './pages/auth/Reset';
import LoginWithCode from './pages/auth/LoginWithCode';
import Verify from './pages/auth/Verify';
import Profile from './pages/profile/Profile';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout><Home /></Layout>} path='/' />
          <Route element={<Login />} path='/connexion' />
          <Route element={<Register />} path='/inscription' />
          <Route element={<Forgot />} path='/mot-de-passe-oublie' />
          <Route element={<Reset />} path='/reinitialiser-votre-mot-de-passe/:resetToken' />
          <Route element={<LoginWithCode />} path='/connexion-avec-code/:email' />
          <Route element={<Layout><Verify /></Layout>} path='/verification/:verificationToken' />
          <Route element={<Layout><Profile /></Layout>} path='/profil' />
        </Routes>
      </Router>
    </>
  );
}

export default App;
