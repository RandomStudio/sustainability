import styles from './Hero.module.css';

const Hero = ({ children, image }) => (
	<div className={styles.hero}>
		<div className={styles.copy}>
			{children}
		</div>
		<img className={styles.image} src={image} />
	</div>
)

export default Hero;