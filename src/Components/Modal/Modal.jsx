import { useEffect } from 'react'

function Modal({ onClose, onOpen }) {
  useEffect(() => {
    window.addEventListener('keydown', onImageClick)
    return () => {
      window.removeEventListener('keydown', onImageClick)
    }
  })

  const onImageClick = (e) => {
    if (e.code === 'Escape') {
      onClose()
    }
  }

  const onBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose()
    }
  }

  return (
    <div className="Overlay" onClick={onBackdropClick}>
      <div className="Modal">
        <img src={onOpen} alt={onOpen} />
      </div>
    </div>
  )
}

export default Modal
