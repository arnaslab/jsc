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
  const { open, item = {} } = props;
  console.log(item);
  return (
    <div
        className={classes.modal}
        style={ open ? { display: 'flex' } : { display: 'none' }}
    >
    {open &&
      <div>
        <div className={classes.dialogHeader}>
          <span>Kontak Detail</span>
        </div>
        <div className="detail-container">
          <img src={item.picture.large} />
          <div><span>{item.name.first} {item.name.last}</span></div>
          <div><span>Lahir {item.dob.date}</span></div>
          <div><span>Jenis kelamin {item.gender === 'male' ? 'Laki-laki' : 'Perempuan'}</span></div>
          <div><span>Surel {item.email}</span></div>
          <button>Delete Contact</button>
        </div>
      </div>
    }
    </div>
  );
}
