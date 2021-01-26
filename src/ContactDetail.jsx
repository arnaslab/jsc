import React from 'react';
import Dialog from '@material-ui/core/Dialog';

export default function ContactModal(props) {
  const { open, item = {}, onDelete } = props;
  
  return (
    <Dialog
        open={open}
        onClose={onClose}
    >
    {open &&
      <div>
        <div className="detail-container">
          <img src={item.picture.large} />
          <div><span>{item.name.first} {item.name.last}</span></div>
          <div><span>Lahir {item.dob.date}</span></div>
          <div><span>Jenis kelamin {item.gender === 'male' ? 'Laki-laki' : 'Perempuan'}</span></div>
          <div><span>Surel {item.email}</span></div>
          <button onClick={onDelete}>Delete Contact</button>
        </div>
      </div>
    }
    </Dialog>
  );
}
