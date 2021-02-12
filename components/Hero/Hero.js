import styles from './Hero.module.css';

const Hero = ({ children, className, hasNavigation, image, isReversed }) => (
	<div className={`${styles.hero} ${isReversed ? styles.isReversed : ''} ${hasNavigation ? styles.hasNavigation : ''} ${className}`}>
		<div className={styles.copy}>
			{children}
		</div>
		<div className={styles.image}>
			<img decoding="async" loading="lazy" src={image} />
		</div>
	</div>
)

Hero.defaultProps = {
	isReversed: false,
}

export default Hero;