import styles from './Accordion.module.css';

const Accordion = ({ children, className, id, title }) => (
	<div className={`${styles.accordion} ${className ?? ''}`}>
		<input className={styles.checkbox} id={id} type="checkbox" />
		<label htmlFor={id} className={styles.title}>{title}</label>
		<div className={styles.contents}>
			{children}
		</div>
	</div>
)

export default Accordion;