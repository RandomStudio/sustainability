import styles from "./Modal.module.css";

const Modal = ({ children, className, isOpen, setIsOpen }) =>
  isOpen && (
    <div
      className={`${styles.modal} ${className ?? ""}`}
      onClick={() => setIsOpen(false)}
    >
      <div className={styles.wrapper}>
        <div className={styles.content}>{children}</div>
        <img
          className={styles.close}
          onClick={() => setIsOpen(false)}
          src="/close.svg"
        />
      </div>
    </div>
  );

export default Modal;
