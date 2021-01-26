import React, { useState } from 'react';
import './App.css';
import ContactModal from './ContactModal';
import ContactDetail from './ContactDetail';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Header = (props) => {
  const isLarge = useMediaQuery('(min-width:600px)');
  const { onModalOpen } = props;

  return (
    <div className="header">
    <b style={{ color: '#ffffff' }}>Kelola Kontak</b>
    <Button 
        variant="contained"
        onClick={onModalOpen}
        startIcon={<AddIcon />}
        style={{ backgroundColor: '#28a745', color: '#ffffff' }}
    >
        {isLarge ? 'Tambah Kontak' : ''}
    </Button>
    </div>
  );
}

export default Header;
