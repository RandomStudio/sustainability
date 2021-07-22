import styles from "./Modal.module.css";

const Modal = ({ children, className }) => (
  <div className={`${styles.modal} ${className ?? ""}`}>
    <div className={styles.contents}>{children}</div>
  </div>
);

export default Modal;
