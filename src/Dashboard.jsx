// src/Dashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaBookmark,
  FaEnvelope,
  FaFileAlt,
  FaUsers,
  FaHotel,
  FaBuilding,
  FaThLarge,
  FaBell,
  FaSignOutAlt
} from 'react-icons/fa';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { id: 1, icon: <FaFileAlt />, number: '125', label: 'Formulaires', subtitle: 'Formulaires soumis', color: '#9B59B6' },
    { id: 2, icon: <FaEnvelope />, number: '40', label: 'Messages', subtitle: 'Messages reçus', color: '#1ABC9C' },
    { id: 3, icon: <FaUsers />, number: '600', label: 'Utilisateurs', subtitle: 'Utilisateurs actifs', color: '#F39C12' },
    { id: 4, icon: <FaEnvelope />, number: '25', label: 'E-mails', subtitle: 'E-mails envoyés', color: '#E74C3C' },
    { id: 5, icon: <FaHotel />, number: '40', label: 'Hôtels', subtitle: 'Hôtels enregistrés', color: '#9B59B6' },
    { id: 6, icon: <FaBuilding />, number: '02', label: 'Entités', subtitle: 'Entités partenaires', color: '#3498DB' },
  ];

  return (
    <div className="dashboard-layout">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <FaBookmark className="sidebar-logo-icon" />
          <span className="sidebar-logo-text">RED PRODUCT</span>
        </div>

        <nav className="sidebar-nav">
          <p className="nav-section-title">Principal</p>

          <button className="nav-item active" onClick={() => navigate('/dashboard')}>
            <FaThLarge className="nav-icon" />
            <span>Dashboard</span>
          </button>

          <button className="nav-item" onClick={() => navigate('/hotels')}>
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
          <h1 className="page-title">Dashboard</h1>

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

            <button
              className="logout-btn"
              onClick={() => navigate('/')}
            >
              <FaSignOutAlt />
            </button>
          </div>
        </header>

        {/* CONTENT */}
        <div className="dashboard-content">
          <div className="welcome-section">
            <h2 className="welcome-title">Bienvenue sur RED Product</h2>
            <p className="welcome-subtitle">Gérez vos données efficacement</p>
          </div>

          <div className="stats-section">
            <div className="stats-grid">
              {stats.map(stat => (
                <div key={stat.id} className="stat-card">
                  <div className="stat-icon" style={{ backgroundColor: stat.color }}>
                    {stat.icon}
                  </div>
                  <div className="stat-info">
                    <h3 className="stat-number">
                      {stat.number} <span className="stat-label">{stat.label}</span>
                    </h3>
                    <p className="stat-subtitle">{stat.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;