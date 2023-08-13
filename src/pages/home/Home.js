import React from 'react'
import './Home.scss';
import loginImage from '../../assets/login.svg';

const Home = () => {
  return (
    <div>
        <section className="container hero">
            <div className="hero-text">
                <h2>Meilleur Système de Connexion avec les technologies MERN</h2>
                <p>
                    Avec les technologies MERN (Mongo Express React Node) on peut faire des applications Web. Et dans ces applications web, 
                    on peut faire de supers manières de faire des Authentifications et Autorisations.
                </p>
                <p>
                    Pour cela, on va Implémenter des systèmes tels que l'Inscription pour un Utilisateur, ainsi que beaucoup d'autres choses telles que :
                    la Connexion, la Modification du Mot de Passe, Connexion avec les Réseaux sociaux, Notifications par Email et des Permissions ...
                </p>
                <div className="hero-buttons --flex-start">
                    <button className="--btn --btn-danger">Inscription</button>
                    <button className="--btn --btn-primary">Connexion</button>
                </div>
            </div>
            <div className="hero-image">
                <img src={loginImage} alt="Authentification" />
            </div>
        </section>
    </div>
  )
}

export default Home;
