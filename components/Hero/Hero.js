import styles from './Hero.module.css';

const Hero = ({ children, image, isReversed }) => (
	<div className={`${styles.hero} ${isReversed ? styles.isReversed : ''}`}>
		<div className={styles.copy}>
			{children}
		</div>
		<img className={styles.image} src={image} />
	</div>
)

Hero.defaultProps = {
	isReversed: false,
}

export default Hero;