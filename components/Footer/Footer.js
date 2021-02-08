import styles from './Footer.module.css';

const Footer = () => (
	<footer className={styles.footer}>
		<div className={styles.newsletter}>
			<h4 className={styles.subheading}>Newsletter</h4>
			<div className={styles.field}>
				<input className={styles.input} placeholder="enter your email address" type="email" />
				<button className={styles.submit}>
					<img src="/arrow.svg" />
				</button>
			</div>
		</div>
		<address className={styles.address}>
			<h4 className={styles.subheading}>Random Amsterdam</h4>
			<p>
				Westzaanstraat 10<br />
				1013 NG Amsterdam<br />
				The Netherlands<br />
				<a href="#" className={styles.directions}>
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
				<a href="#" className={styles.directions}>
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
)

export default Footer; 