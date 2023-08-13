import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Layout from './layout/Layout';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout><Home /></Layout>} path='/' />
        </Routes>
      </Router>
    </>
  );
}

export default App;
