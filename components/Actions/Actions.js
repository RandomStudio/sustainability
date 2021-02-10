import Tile from './Tile/Tile';
import styles from './Actions.module.css';

const Actions = ({ children, image }) => (
	<div className={styles.actions}>
		<h3 className={styles.title}>Actions</h3>
		<Tile copy="Use VR prototyping where possible to reduce waste" />
		<Tile copy="Use modular design if it reduces the project’s footprint" />
		<Tile copy="Design for post-use, for example opting for reusable materials or rental" />
		<Tile copy="Consider sustainability while ideating during the concept phase" />
	</div>
)

export default Actions;
