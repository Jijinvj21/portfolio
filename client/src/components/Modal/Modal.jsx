import "./Modal.scss";

function Modal({ children, className }) {
  return (
    <div className="custom-modal container">
      <div className="modal-overlay"></div>
      <div className={`modal-container ${className}`}>{children}</div>
    </div>
  );
}

export default Modal;
