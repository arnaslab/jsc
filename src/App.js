import React, { useState } from 'react';
import './App.css';
import ContactModal from './ContactModal';
import ContactDetail from './ContactDetail';
import Header from './Header';

const App = () => {

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
      <Header onModalOpen={() => setModalOpen(true)}/>
      <ContactModal 
        open={modalOpen} 
        onClose={() => setModalOpen(false)}
        onAddContact={handleAddContact}
      />
      <div className="selected-contact-container">
      {selectedContacts.map((item, key) => (
        <div key={key} className="selected-contact-item" onClick={() => setDetail(key)}>
          <img src={item.picture.thumbnail} alt="contact-thumbnail" />
          <span style={{ marginLeft: 10 }}>{item.name.first} {item.name.last}</span>
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
