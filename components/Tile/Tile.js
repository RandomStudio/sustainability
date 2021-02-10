import styles from './Tile.module.css';

const Tile = ({ copy, title }) => (
	<div className={`${styles.tile} ${title ? styles.hasTitle : ''}`}>
		{title && <h3 className={styles.title}>{title}</h3>}
		<p className={styles.copy}>{copy}</p>
	</div>
)

export default Tile;