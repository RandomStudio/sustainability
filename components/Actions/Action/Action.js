import styles from './Action.module.css';

const Action = ({ copy, isContact, title }) => {
	const Component = isContact ? 'a' : 'div';
	const classNames = `${styles.tile} ${title ? styles.hasTitle : ''} ${isContact ? styles.isContact : ''}`;
	return (
		<Component className={classNames} {...(isContact ? { href: 'mailto:sutainability@random.studio' } : {})}>
			{title && <h3 className={styles.title}>{title}</h3>}
			<p className={styles.copy}>{copy}</p>
		</Component>
	);
}

export default Action;