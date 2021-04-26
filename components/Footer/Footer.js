import styles from './Footer.module.css';
import Newsletter from './Newsletter/Newsletter.js';

const Footer = () => {
	const handleSubmit = async event => {
	  event.preventDefault();
	  setError('');
  
	  try {
		const response = await fetch(
		  `https://random-studio.netlify.app/.netlify/functions/addToNewsletterList?email=${email}`,
		);
  
		if (response.ok) {
		  setIsSuccessful(true);
		} else {
		  const body = await response.json();
		  setError(body.errorMessage);
		}
	  } catch (responseError) {
		console.log(responseError);
		setError('Failed to submit. Please check email and try again.');
	  }
  
	  return false;
	};
  
	return (
		<footer className={styles.footer}>
			<Newsletter className={styles.newsletter} />
			<address className={`${styles.address} ${styles.amsterdam}`}>
				<h4 className={styles.subheading}>Random Amsterdam</h4>
				<p>
					Westzaanstraat 10<br />
					1013 NG Amsterdam<br />
					The Netherlands<br />
					<a href="https://goo.gl/maps/7rGuGBBfhms" className={styles.directions}>
						Directions
					</a><br />
					<a href="tel:+31207797735" className={styles.telephone}>
						+31 20 779 7735
					</a><br />
					<a href="mailto:hello@random.studio">
						hello@random.studio
					</a>
				</p>
			</address>
			<address className={styles.address}>
				<h4 className={styles.subheading}>Random Paris</h4>
				<p>
					174 Quai de Jemmapes<br />
					75010 Paris<br />
					France<br />
					<a href="https://goo.gl/maps/8JhU7KsTLAaZZtGA9" className={styles.directions}>
						Directions
					</a><br />
					<a href="tel:+33140364144" className={styles.telephone}>
						+33 (0) 1 40 36 41 44
					</a><br />
					<a href="mailto:morgan.maccari@random.studio">
					morgan.maccari@random.studio
					</a>
				</p>
			</address>
		</footer>
	);
};

export default Footer; 