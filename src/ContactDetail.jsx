import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';

export default function ContactModal(props) {
  const { open, onClose, item = {}, onDelete } = props;
  
  return (
    <Dialog
        open={open}
        onClose={onClose}
    >
    {open &&
      <div>
        <div className="dialog-header">
          <b>Kontak Detail</b>
          <CloseIcon onClick={onClose} />
        </div>
        <img src={item.picture.large} style={{ width: '100%', height: '100%' }} />
        <div style={{ padding: 10 }}>
          <b>{item.name.first} {item.name.last}</b>
          <div className="info-container">
            <div className="info-warpper">
              <span className="info-text">Lahir</span><span>{item.dob.date}</span>
            </div>
            <div className="info-warpper">
              <span className="info-text">Jenis kelamin</span>
              <span>{item.gender === 'male' ? 'Laki-laki' : 'Perempuan'}</span>
            </div>
          </div>
          <div className="info-container">
            <div className="info-warpper">
              <span className="info-text">Surel</span><span>{item.email}</span>
            </div>
            <div className="info-warpper">
              <span className="info-text">Telepon</span><span>{item.phone}</span>
            </div>
            <div className="info-warpper">
              <span className="info-text">Seluler</span><span>{item.cell}</span>
            </div>
          </div>
          <div className="info-container">
            <div className="info-warpper">
              <span className="info-text">Tempat Tinggal</span>
              <span>{item.location.street.number} {item.location.street.name} {item.location.city} {item.location.state} {item.location.postcode}</span>
            </div>
            <div>
              <span className="info-text">Koordinat</span>
              <span>{item.location.coordinates.latitude}, {item.location.coordinates.longitude}</span></div>
          </div>
        </div>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'flex-end', 
          borderTop: 'solid 1px #bbbbbb',
          padding: 10 
        }}>
            <Button
              variant="contained"
              onClick={onDelete}
              startIcon={<DeleteIcon />}
              style={{ backgroundColor: '#da3847', color: '#ffffff' }}
            >
              Hapus Kontak
            </Button>
          </div>
      </div>
    }
    </Dialog>
  );
}
