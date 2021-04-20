import styles from './Hero.module.css';
import Image from '../Image/Image';

const Hero = ({ children, className, hasNavigation, image, isIntro }) => (
	<div className={`${styles.hero} ${isIntro ? styles.isIntro : ''} ${hasNavigation ? styles.hasNavigation : ''} ${className}`}>
		<div className={styles.copy}>
			{children}
		</div>
		<div className={styles.image}>
			<Image decoding="async" loading="lazy" sizes={[450, 720, 1024, 1280, 2048]} src={image} />
		</div>
	</div>
)

Hero.defaultProps = {
	isIntro: false,
}

export default Hero;