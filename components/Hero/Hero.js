import styles from './Hero.module.css';

const Hero = ({ children, className, hasNavigation, image, alt, isReversed }) => (
	<div className={`${styles.hero} ${isReversed ? styles.isReversed : ''} ${hasNavigation ? styles.hasNavigation : ''} ${className}`}>
		<div className={styles.copy}>
			{children}
		</div>
		<div className={styles.image}>
			<picture>
				<source srcset={`${image}.webp`} type="image/webp" />
  				<source srcset={`${image}.jpg`} type="image/jpeg" />
				<img alt={alt} decoding="async" loading="lazy" src={`${image}.jpg`} />
			</picture>
		</div>
	</div>
)

Hero.defaultProps = {
	isReversed: false,
}

export default Hero;
