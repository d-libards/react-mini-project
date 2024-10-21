import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context';

function Modal() {
  const { isModalOpen, toggleModal } = useGlobalContext();

  return (
    <div
      className={`modal-overlay ${isModalOpen ? 'show-modal' : ''}`}
      onClick={toggleModal}
    >
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={toggleModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
}
export default Modal;
