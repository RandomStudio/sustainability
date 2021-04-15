import styles from './Hero.module.css';

const Hero = ({ children, className, hasNavigation, image, isIntro }) => (
	<div className={`${styles.hero} ${isIntro ? styles.isIntro : ''} ${hasNavigation ? styles.hasNavigation : ''} ${className}`}>
		<div className={styles.copy}>
			{children}
		</div>
		<div className={styles.image}>
			<img decoding="async" loading="lazy" src={image} />
		</div>
	</div>
)

Hero.defaultProps = {
	isIntro: false,
}

export default Hero;