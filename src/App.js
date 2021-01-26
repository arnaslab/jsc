import React, { useState } from 'react';
import './App.css';
import ContactModal from './ContactModal';
import ContactDetail from './ContactDetail';

function App() {

  const [ modalOpen, setModalOpen ] = useState(false);
  const [ selectedContacts, setSelectedContacts ] = useState([]);
  const [ detail, setDetail ] = useState(false);

  const handleAddContact = (item) => {
    setSelectedContacts([
      ...selectedContacts,
      item
    ])
    setModalOpen(false);
  }

  return (
    <>
      <div className="header">
        <span className="tittle">Kelola Kontak</span>
        <button 
          className="button-add" 
          onClick={() => setModalOpen(true)}
        >
          Tambah Kontak
        </button>
      </div>
      <ContactModal 
        open={modalOpen} 
        onClose={() => setModalOpen(false)}
        onAddContact={handleAddContact}
      />
      <div id="selected-contact-container">
      {selectedContacts.map((item) => (
        <div id="selected-contact-item" onClick={() => setDetail(item)}>
          <img src={item.picture.thumbnail} />
          <span>{item.name.first} {item.name.last}</span>
        </div>
      ))}
      </div> 
      <ContactDetail 
        open={detail} 
        item={detail}
        onClose={() => setDetail(false)}
      />
    </>
  );
}

export default App;
