import styles from "./Action.module.css";
import Modal from "../../Modal/Modal";

const Action = ({ copy, markdown, isContact, title }) => {
  if (markdown?.length > 0) {
    console.log(markdown);
  }

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
      <Modal />
    </Component>
  );
};

export default Action;
