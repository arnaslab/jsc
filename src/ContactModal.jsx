import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { getContact } from './request';
import CloseIcon from '@material-ui/icons/Close';

export default function ContactModal(props) {
  const { open, onClose, onAddContact } = props;
  const [ contacts, setContacts ] = useState();
  
  useEffect(() => {
    getContact()
    .then(data => setContacts(data.results))
  }, [open])

  return (
    <Dialog
        open={open}
        onClose={onClose}
    >
      <div>
        <div className="dialog-header">
          <b>Pilih kontak</b>
          <CloseIcon onClick={onClose} />
        </div>
        <div className="contact-container">
        {contacts && contacts.map((item, key) => (
          <div key={key} className="contact-item" onClick={() => onAddContact(item)}>
            <img src={item.picture.thumbnail} alt="contact-thumbnail"/>
            <span style={{ marginLeft: 10 }}>{item.name.first} {item.name.last}</span>
          </div>
        ))}
        </div>
      </div>
    </Dialog>
  );
}
