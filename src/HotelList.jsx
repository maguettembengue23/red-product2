import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  FaBookmark,
  FaThLarge,
  FaHotel,
  FaBell,
  FaSignOutAlt,
  FaArrowLeft,
  FaImage,
} from "react-icons/fa";
import "./Dashboard.css";
import "./HotelList.css";

const HotelList = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate('/');
  };

  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: "Hôtel Terrou-Bi",
      address: "Boulevard Martin Luther King Dakar, 11500",
      price: "25.000 XOF",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
    },
    {
      id: 2,
      name: "King Fahd Palace",
      address: "Rue des Almadies, Dakar",
      price: "20.000 XOF",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400",
    },
    {
      id: 3,
      name: "Radisson Blu Hotel",
      address: "Rue de la Corniche D, Dakar 16868",
      price: "22.000 XOF",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400",
    },
    {
      id: 4,
      name: "Pullman Dakar Teranga",
      address: "Place de l'Indépendance, Dakar",
      price: "30.000 XOF",
      image:
        "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400",
    },
    {
      id: 5,
      name: "Hôtel Lac Rose",
      address: "Lac Rose, Dakar",
      price: "25.000 XOF",
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400",
    },
    {
      id: 6,
      name: "Hôtel Saly",
      address: "Mbour, Sénégal",
      price: "20.000 XOF",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400",
    },
    {
      id: 7,
      name: "Palm Beach Resort & Spa",
      address: "BP64, Saly 23000",
      price: "22.000 XOF",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400",
    },
    {
      id: 8,
      name: "Pullman Dakar Teranga",
      address: "Place de l'Indépendance, Dakar",
      price: "30.000 XOF",
      image:
        "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=400",
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    price: "",
    currency: "XOF",
    image: "",
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({
        ...form,
        image: URL.createObjectURL(file),
      });
    }
  };

  const handleSaveHotel = () => {
    if (!form.name || !form.address || !form.price) return;

    setHotels([
      ...hotels,
      {
        id: Date.now(),
        name: form.name,
        address: form.address,
        price: `${form.price} ${form.currency}`,
        image:
          form.image ||
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
      },
    ]);

    setForm({
      name: "",
      address: "",
      email: "",
      phone: "",
      price: "",
      currency: "XOF",
      image: "",
    });

    setShowModal(false);
  };

  // STYLES INLINE POUR FORCER LES CHANGEMENTS
  const hamburgerStyle = {
    position: 'fixed',
    top: '10px',  // ENCORE PLUS PROCHE
    left: '10px',  // ENCORE PLUS PROCHE
    zIndex: 1001,
    background: '#4a5568',
    border: 'none',
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'none',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4px',
    padding: 0,
    boxShadow: '0 2px 10px rgba(74, 85, 104, 0.3)',
  };

  const createHotelBtnStyle = {
    background: '#4a5568',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
  };

  const logoutBtnStyle = {
    background: 'transparent',
    border: '1px solid #e5e7eb',
    color: '#6b7280',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    padding: '10px 15px',
    borderRadius: '8px',
    fontSize: '14px',
  };

  return (
    <div className="dashboard-layout">
      {/* BOUTON HAMBURGER - Avec styles inline */}
      <button 
        className={`hamburger ${isSidebarOpen ? 'active' : ''}`}
        onClick={toggleSidebar}
        style={hamburgerStyle}
        aria-label="Menu"
      >
        <span style={{ display: 'block', width: '20px', height: '2.5px', background: 'white', borderRadius: '2px' }}></span>
        <span style={{ display: 'block', width: '20px', height: '2.5px', background: 'white', borderRadius: '2px' }}></span>
        <span style={{ display: 'block', width: '20px', height: '2.5px', background: 'white', borderRadius: '2px' }}></span>
      </button>

      {/* OVERLAY */}
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}

      {/* SIDEBAR */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <FaBookmark className="sidebar-logo-icon" />
          <span className="sidebar-logo-text">RED PRODUCT</span>
        </div>

        <nav className="sidebar-nav">
          <p className="nav-section-title">PRINCIPAL</p>

          <button className="nav-item" onClick={() => navigate('/dashboard')}>
            <FaThLarge className="nav-icon" />
            <span>Dashboard</span>
          </button>

          <button className="nav-item active">
            <FaHotel className="nav-icon" />
            <span>Liste des hôtels</span>
          </button>
        </nav>

        <div className="sidebar-user">
          <img src="https://i.pravatar.cc/40" alt="User" className="user-avatar" />
          <div className="user-info">
            <p className="user-name">Magatte Mbengue</p>
            <p className="user-status">
              <span className="status-dot"></span>
              en ligne
            </p>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <main className="main-content">
        <header className="top-header">
          <h1 className="page-title">Liste des hôtels</h1>

          <div className="header-actions">
            <div className="search-box">
              <input type="text" placeholder="Recherche" />
            </div>

            <button className="notification-btn">
              <FaBell />
              <span className="notification-badge">3</span>
            </button>

            <img
              src="https://i.pravatar.cc/40?img=2"
              alt="Profile"
              className="profile-avatar"
            />

            {/* BOUTON LOGOUT - Avec styles inline */}
            <button
              className="logout-btn"
              onClick={handleLogout}
              style={logoutBtnStyle}
              title="Déconnexion"
            >
              <FaSignOutAlt />
            </button>
          </div>
        </header>

        <div className="hotels-content">
          <div className="hotels-header">
            <h2>
              Hôtels <span>{hotels.length}</span>
            </h2>
            {/* BOUTON CRÉER HÔTEL - Avec styles inline */}
            <button
              className="create-hotel-btn"
              onClick={() => setShowModal(true)}
              style={createHotelBtnStyle}
            >
              + Créer un nouveau hôtel
            </button>
          </div>

          <div className="hotels-grid">
            {hotels.map((hotel) => (
              <div key={hotel.id} className="hotel-card">
                <img src={hotel.image} alt={hotel.name} />
                <div className="hotel-info">
                  <p>{hotel.address}</p>
                  <h3>{hotel.name}</h3>
                  <strong>{hotel.price} / nuit</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-large">
            <h3 className="modal-title">
              <FaArrowLeft onClick={() => setShowModal(false)} />
              CRÉER UN NOUVEAU HÔTEL
            </h3>

            <div className="modal-form">
              <div>
                <label>Nom de l'hôtel</label>
                <input
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label>Adresse</label>
                <input
                  value={form.address}
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
                />
              </div>

              <div>
                <label>E-mail</label>
                <input
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label>Numéro de téléphone</label>
                <input
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                />
              </div>

              <div>
                <label>Prix par nuit</label>
                <input
                  value={form.price}
                  onChange={(e) =>
                    setForm({ ...form, price: e.target.value })
                  }
                />
              </div>

              <div>
                <label>Devise</label>
                <select
                  value={form.currency}
                  onChange={(e) =>
                    setForm({ ...form, currency: e.target.value })
                  }
                >
                  <option value="XOF">XOF</option>
                  <option value="Euro">Euro</option>
                  <option value="Dollar">Dollar</option>
                </select>
              </div>
            </div>

            <div className="upload-box">
              <FaImage />
              <p>Ajouter une photo</p>
              <input type="file" onChange={handleImageUpload} />
            </div>

            <div className="modal-actions">
              <button className="btn-save" onClick={handleSaveHotel}>
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelList;