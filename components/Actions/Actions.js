import Action from './Action/Action';
import styles from './Actions.module.css';

const Actions = ({ children, image }) => (
	<div className={styles.actions}>
		<h3 className={styles.title}>Actions</h3>
		<Action copy="Use VR prototyping where possible to reduce waste" />
		<Action copy="Use modular design if it reduces the project’s footprint" />
		<Action copy="Design for post-use, for example opting for reusable materials or rental" />
		<Action copy="Consider sustainability while ideating during the concept phase" />
		<Action copy="Propose a new action..." isContact />
	</div>
)

export default Actions;
