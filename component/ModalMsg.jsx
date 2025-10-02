import React from 'react'

const ModalMsg = ({onClose, children}) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>✖</button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  )
}

export default ModalMsg