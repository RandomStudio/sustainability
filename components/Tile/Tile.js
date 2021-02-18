import styles from './Tile.module.css';

const Tile = ({ copy, isOutline, title }) => (
	<div className={`${styles.tile} ${title ? styles.hasTitle : ''} ${isOutline ? styles.isOutline : ''}`}>
		{title && <h3 className={styles.title}>{title}</h3>}
		<p className={styles.copy}>{copy}</p>
	</div>
)

Tile.defaultProps = {
	isOutline: false,
}

export default Tile;