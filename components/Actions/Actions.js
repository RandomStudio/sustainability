import Action from './Action/Action';
import styles from './Actions.module.css';

const Actions = ({ actions }) => (
	<div className={styles.actions}>
		<h3 className={styles.title}>Actions</h3>
		{actions.map(action => <Action copy={action} />)}
		<Action copy="Propose a new action..." isContact />
	</div>
)

export default Actions;
