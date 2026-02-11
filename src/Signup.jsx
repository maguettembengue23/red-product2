import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { FaBookmark } from "react-icons/fa";

function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inscription réussie !");
    navigate("/");
  };

  return (
    <div className="auth-bg">
      <div className="auth-container">
        <div className="auth-logo">
          <FaBookmark className="logo-icon" />
          <span>RED PRODUCT</span>
        </div>

        <div className="auth-card">
          <h3>Inscrivez-vous en tant que Admin</h3>

          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nom" required />
            <input type="email" placeholder="E-mail" required />
            <input type="password" placeholder="Mot de passe" required />

            <div className="checkbox">
              <input type="checkbox" required />
              <label>Accepter les termes et la politique</label>
            </div>

            <button type="submit">S'inscrire</button>
          </form>
        </div>

        <p className="auth-footer">
          Vous avez déjà un compte ?{" "}
          <span onClick={() => navigate("/")}>Se connecter</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
