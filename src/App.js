import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Layout from './layout/Layout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Forgot from './pages/auth/Forgot';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout><Home /></Layout>} path='/' />
          <Route element={<Login />} path='/connexion' />
          <Route element={<Register />} path='/inscription' />
          <Route element={<Forgot />} path='/mot-de-passe-oublie' />
        </Routes>
      </Router>
    </>
  );
}

export default App;
