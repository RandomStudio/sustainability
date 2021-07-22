import { useState } from "react";
import Action from "./Action/Action";
import styles from "./Actions.module.css";

const Actions = ({ actions, id, markdowns, hasSubmit, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(markdowns, id);

  return (
    <div className={styles.actions}>
      <h3 className={styles.title}>{title ?? "Actions"}</h3>
      <div className={styles.wrapper}>
        {actions?.map(({ copy }, index) => (
          <Action copy={copy} key={index} />
        ))}
        {hasSubmit && <Action copy="Propose a new action..." isContact />}
      </div>
    </div>
  );
};

Actions.defaultProps = {
  hasSubmit: true,
};
export default Actions;
