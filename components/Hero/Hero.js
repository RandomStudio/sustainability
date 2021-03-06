import styles from './Hero.module.css';
import Image from '../Image/Image';

const Hero = ({ alt, children, className, hasNavigation, image, isIntro }) => (
	<div className={`${styles.hero} ${isIntro ? styles.isIntro : ''} ${hasNavigation ? styles.hasNavigation : ''} ${className}`}>
		<div className={styles.copy}>
			{children}
		</div>
		<div className={styles.image}>
			<Image alt={alt} decoding="async" loading="lazy" sizes={[450, 720, 1024, 1280]} src={image} />
		</div>
	</div>
)

Hero.defaultProps = {
	isIntro: false,
}

export default Hero;
