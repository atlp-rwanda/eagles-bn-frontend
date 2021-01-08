import React from 'react'
import Popup from 'reactjs-popup';
function tripStatus() {
    <Popup trigger={<button>Trigger</button>} position="top left">
    {close => (
      <div>
        Content here
        <a className="close" onClick={close}>
          &times;
        </a>
      </div>
    )}
  </Popup>
}

export default tripStatus
