import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo">
          <span className="bookmark-icon">🔖</span>
          <h1>RED PRODUCT</h1>
        </div>

        <div className="form-container">
          <h2>Connexion</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="exemple@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>

            <div className="forgot-link">
              <a href="/mot-de-passe-oublie">Mot de passe oublié?</a>
            </div>

            <button type="submit" className="btn-submit">
              Se connecter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;