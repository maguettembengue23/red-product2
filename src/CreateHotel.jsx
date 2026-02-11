import React, { useState } from 'react';
import './CreateHotel.css';

const CreateHotel = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    nom: '',
    adresse: '',
    email: '',
    telephone: '',
    prixParNuit: '',
    devise: 'F XOF',
    photo: null
  });

  const [photoPreview, setPhotoPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        photo: file
      });
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button className="back-button" onClick={onClose} type="button">
            <span>←</span> CRÉER UN NOUVEAU HÔTEL
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Nom de l'hôtel</label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                placeholder="CAP Marnane"
                required
              />
            </div>

            <div className="form-group">
              <label>Adresse</label>
              <input
                type="text"
                name="adresse"
                value={formData.adresse}
                onChange={handleChange}
                placeholder="Les îles du saloum, Mar Lodj"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="information@gmail.com"
                required
              />
            </div>

            <div className="form-group">
              <label>Numéro de téléphone</label>
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                placeholder="+221 77 777 77 77"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Prix par nuit</label>
              <input
                type="text"
                name="prixParNuit"
                value={formData.prixParNuit}
                onChange={handleChange}
                placeholder="25,000 XOF"
                required
              />
            </div>

            <div className="form-group">
              <label>Devise</label>
              <select
                name="devise"
                value={formData.devise}
                onChange={handleChange}
                className="select-devise"
              >
                <option value="F XOF">F XOF</option>
                <option value="Euro">Euro</option>
                <option value="Dollar">Dollar</option>
              </select>
            </div>
          </div>

          <div className="form-group photo-upload">
            <label>Ajouter une photo</label>
            <div className="photo-upload-area">
              {photoPreview ? (
                <img src={photoPreview} alt="Preview" className="photo-preview" />
              ) : (
                <div className="photo-placeholder">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" fill="#ccc"/>
                  </svg>
                  <p>Ajouter une photo</p>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="photo-input"
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-save">
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateHotel;