import styles from "./Action.module.css";
import ReactMarkdown from "react-markdown";
import Modal from "../../Modal/Modal";

const Action = ({ copy, markdown, isContact, title }) => {
  const hasMarkdown = markdown?.length > 0;

  const Component = isContact ? "a" : "div";
  const classNames = `${styles.tile} ${title ? styles.hasTitle : ""} ${
    isContact ? styles.isContact : ""
  }`;
  return (
    <Component
      className={classNames}
      {...(isContact ? { href: "mailto:sustainability@random.studio" } : {})}
    >
      {title && <h3 className={styles.title}>{title}</h3>}
      <p className={styles.copy}>{copy}</p>
      {hasMarkdown && (
        <Modal>
          <ReactMarkdown children={markdown} />
        </Modal>
      )}
    </Component>
  );
};

export default Action;
