import styles from './Tile.module.css';

const Tile = ({ copy, isContact, title }) => {
	const Component = isContact ? 'a' : 'div';
	const classNames = `${styles.tile} ${title ? styles.hasTitle : ''} ${isContact ? styles.isContact : ''}`;
	return (
	<Component className={classNames} {...(isContact ? { href: 'mailto:sustainability@randomstudio' } : {})}>
		{title && <h3 className={styles.title}>{title}</h3>}
		<p className={styles.copy}>{copy}</p>
	</Component>
	);
}

export default Tile;