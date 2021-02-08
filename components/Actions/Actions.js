import Tile from '../Tile/Tile';
import styles from './Actions.module.css';

const Actions = ({ children, image }) => (
	<div className={styles.actions}>
		<h3 className={styles.title}>Actins</h3>
		<Tile />
	</div>
)

export default Actions;