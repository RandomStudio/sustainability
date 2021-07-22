import styles from "./Modal.module.css";

const Modal = ({ children, className, isOpen, setIsOpen }) =>
  isOpen && (
    <div className={`${styles.modal} ${className ?? ""}`}>
      <div className={styles.contents}>{children}</div>
      <div onClick={() => setIsOpen(false)}>Close</div>
    </div>
  );

export default Modal;
