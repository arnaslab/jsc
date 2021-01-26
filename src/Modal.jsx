import React from 'react';

export default function Modal(props) {
  const { 
      title,
      open, 
      onClose, 
      children, 
      ...rest 
    } = props;
  
  return (
    <div
        className='modal'
        style={ open ? { display: 'flex' } : { display: 'none' }}
    >
    {open &&
      <div>
        <div className='dialog-header'>
          <span>{title}</span>
        </div>
        {children}
      </div>
    }
    </div>
  );
}
