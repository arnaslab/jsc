import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { getContact } from './request';

const useStyles = makeStyles((theme) => ({
  modal: {
    width: '100vw',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center'
  },
  dialogHeader: {
    height: 50,
    width: '100%'
  },
  contactItem: {

  }
}));

export default function ContactModal(props) {
  const classes = useStyles();
  const { open, onClose } = props;
  const [ contacts, setContacts ] = useState();
  
  useEffect(() => {
    getContact()
    .then(data => setContacts(data.results))
  }, [])
  
  return (
    <div
        className={classes.modal}
        style={ open ? { display: 'flex' } : { display: 'none' }}
    >
      <div>
        <div className={classes.dialogHeader}>
          <span>Pilih kontak</span>
        </div>
        <div className="contact-container">
        {contacts && contacts.map(item => (
          <div className="contact-item">
            <img src={item.picture.thumbnail} />
            <span>{item.name.first} {item.name.last}</span>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
