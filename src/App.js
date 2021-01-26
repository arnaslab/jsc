import React, { useState } from 'react';
import './App.css';
import ContactModal from './ContactModal';


function App() {

  const [ modalOpen, setModalOpen ] = useState(false);
  const [ selectedContacts, setSelectedContacts ] = useState([]);

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
      />
      <div>
      {selectedContacts.map((item) => (
        <div className="contact-item">
          <img src={item.picture.thumbnail} />
          <span>{item.name.first} {item.name.last}</span>
        </div>
      ))}
      </div> 
    </>
  );
}

export default App;
