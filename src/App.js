import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Home />} path='/' />
        </Routes>
      </Router>
    </>
  );
}

export default App;
