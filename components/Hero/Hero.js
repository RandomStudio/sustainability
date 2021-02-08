import styles from './Hero.module.css';

const Hero = ({ children, className, image, isReversed }) => (
	<div className={`${styles.hero} ${isReversed ? styles.isReversed : ''} ${className}`}>
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