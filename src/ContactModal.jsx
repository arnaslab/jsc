import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { getContact } from './request';

export default function ContactModal(props) {
  const { open, onClose, onAddContact } = props;
  const [ contacts, setContacts ] = useState();
  
  useEffect(() => {
    getContact()
    .then(data => setContacts(data.results))
  }, [])
  
  return (
    <Dialog
        open={open}
        onClose={onClose}
    >
      <div>
        <div>
          <span>Pilih kontak</span>
        </div>
        <div className="contact-container">
        {contacts && contacts.map(item => (
          <div className="contact-item" onClick={() => onAddContact(item)}>
            <img src={item.picture.thumbnail} />
            <span>{item.name.first} {item.name.last}</span>
          </div>
        ))}
        </div>
      </div>
    </Dialog>
  );
}
