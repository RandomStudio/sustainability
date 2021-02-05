import styles from './Accordion.module.css';

const Accordion = ({ children, id, title }) => (
	<div className={styles.accordion}>
		<input className={styles.checkbox} id={id} type="checkbox" />
		<label htmlFor={id} className={styles.title}>{title}</label>
		<div className={styles.contents}>
			{children}
		</div>
	</div>
)

export default Accordion;