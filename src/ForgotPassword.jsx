import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simuler l'envoi
    setMessage('Un e-mail de réinitialisation a été envoyé.');
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <div className="logo">
          <span className="bookmark-icon">🔖</span>
          <h1>RED PRODUCT</h1>
        </div>

        <div className="form-container">
          <h2>Mot de passe oublié?</h2>
          <p className="description">
            Entrez votre adresse e-mail ci-dessous et nous vous enverrons des instructions sur la façon de modifier votre mot de passe.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Votre e-mail</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="exemple@email.com"
                required
              />
            </div>

            {message && <div className="success-message">{message}</div>}

            <button type="submit" className="btn-submit">
              Envoyer
            </button>
          </form>

          <div className="back-to-login">
            Revenir à la{' '}
            <button onClick={() => navigate('/login')} className="link-button">
              connexion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;