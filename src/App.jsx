  import { Routes, Route, useNavigate } from "react-router-dom";
  import { FaBookmark } from "react-icons/fa";
  import Dashboard from "./Dashboard";
  import HotelList from "./HotelList";
  import Signup from "./Signup";
  import Login from './Login';
  import ForgotPassword from './ForgotPassword';
  import Navbar from "./Navbar";
  import "./App.css";

  
  function App() {
    const navigate = useNavigate();

    // actions
    const handleLogin = (e) => {
      e.preventDefault();
      navigate("/dashboard");
    };

    const handleLogout = () => {
      navigate("/");
    };

    return (
      <Routes>

        {/* LOGIN */}
        <Route
          path="/"
          element={
            <div className="auth-container">
              <div className="auth-card">
                <div className="auth-logo">
                  <FaBookmark className="auth-logo-icon" />
                  <span className="auth-logo-text">RED PRODUCT</span>
                </div>

                <div className="auth-form-container">
                  <h2 className="auth-title">
                    Connectez-vous en tant que Admin
                  </h2>

                  <form className="auth-form" onSubmit={handleLogin}>
                    <input
                      type="email"
                      placeholder="E-mail"
                      className="auth-input"
                      
                    />
                    <input
                      type="password"
                      placeholder="Mot de passe"
                      className="auth-input"
                      
                    />

                    <button type="submit" className="auth-button">
                      Se connecter
                    </button>
                  </form>
                </div>

                <p className="auth-footer-outside">
                  <span
                    className="auth-link"
                    onClick={() => navigate("/forgot-password")}
                  >
                    Mot de passe oublié ?
                  </span>
                </p>

                <p className="auth-footer-outside">
                  Vous n'avez pas de compte ?{" "}
                  <span
                    className="auth-link"
                    onClick={() => navigate("/signup")}
                  >
                    S'inscrire
                  </span>
                </p>
              </div>
            </div>
          }
        />

        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <Dashboard
              onGoToHotels={() => navigate("/hotels")}
              onLogout={handleLogout}
            />
          }
        />

        {/* HOTELS */}
        <Route
          path="/hotels"
          element={
            <HotelList
              onGoToDashboard={() => navigate("/dashboard")}
              onLogout={handleLogout}
            />
          }
        />

        {/* FORGOT PASSWORD */}
        <Route
          path="/forgot-password"
          element={
            <div className="auth-container">
              <div className="auth-card">
                <h2>Mot de passe oublié</h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Email envoyé");
                    navigate("/");
                  }}
                >
                  <input
                    type="email"
                    placeholder="Votre email"
                    
                  />
                  <button type="submit">Envoyer</button>
                </form>
              </div>
            </div>
          }
        />

        {/* SIGNUP */}
        <Route
          path="/signup"
          element={
            <div className="auth-container">
              <div className="auth-card">
                <h2>Inscription</h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Inscription réussie");
                    navigate("/");
                  }}
                >
                  <input type="text" placeholder="Nom" />
                  <input type="email" placeholder="Email"/>
                  <input
                    type="password"
                    placeholder="Mot de passe"
                    
                  />
                  <button type="submit">S'inscrire</button>
                </form>
              </div>
            </div>
          }
        />
      </Routes>
    );
  }

  export default App;
