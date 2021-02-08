import styles from './Section.module.css';

const Section = ({ children }) => (
	<div className={styles.frame}>
		{children}
	</div>
)

export default Section;