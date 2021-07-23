import styles from "./Modal.module.css";
import { forwardRef } from "react";

const Modal = forwardRef(({ children, className, isOpen, setIsOpen }, ref) => {
  return (
    isOpen && (
      <div
        ref={ref}
        className={`${styles.modal} ${className ?? ""}`}
        onClick={() => setIsOpen(false)}
      >
        <div className={styles.wrapper}>
          <div className={styles.content}>{children}</div>
        </div>
        <img
          className={styles.close}
          onClick={() => setIsOpen(false)}
          src="/close.svg"
        />
      </div>
    )
  );
});

export default Modal;
