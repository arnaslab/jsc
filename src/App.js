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

  const handleDeteleContact = (key) => {
    setSelectedContacts([
      ...selectedContacts.slice(0, key),
      ...selectedContacts.slice(key+1, selectedContacts.length)
    ])
    setDetail(false);
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
      {selectedContacts.map((item, key) => (
        <div id="selected-contact-item" onClick={() => setDetail(key)}>
          <img src={item.picture.thumbnail} />
          <span>{item.name.first} {item.name.last}</span>
        </div>
      ))}
      </div> 
      <ContactDetail 
        open={typeof detail === 'number'} 
        item={selectedContacts[detail]}
        onClose={() => setDetail(false)}
        onDelete={() => handleDeteleContact(detail)}
      />
    </>
  );
}

export default App;
