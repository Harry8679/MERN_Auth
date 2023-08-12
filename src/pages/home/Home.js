import React from 'react'
import './Home.scss';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <h1>Hi From Home</h1>
      <Footer />
    </div>
  )
}

export default Home;