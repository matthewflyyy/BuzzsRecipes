import React from 'react';



export function MessageDialog(props) {
  return (
    <div className='modal'>
      <div className='modal-message'>{props.message}</div>
      <button className='close' onClick={props.onHide}>
        Close
      </button>
    </div>
  );
}