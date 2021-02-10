import styles from './Articles.module.css';

const Articles = ({ image }) => (
	<div className={styles.articles}>
		<h3 className={styles.title}>Some useful articles</h3>
		<div className={styles.container}>
			<article className={styles.article}>
				<div className={styles.imageFrame}>
					<img className={styles.image} src={image} />
				</div>
				<h3 className={styles.subtitle}>In a perfect world</h3>
				<p className={styles.copy}>My students’ wishes for more sustainable design practices.</p>
			</article>
			<article className={styles.article}>
				<div className={styles.imageFrame}>
					<img className={styles.image} src={image} />
				</div>
				<h3 className={styles.subtitle}>Software is Polluting the World</h3>
				<p className={styles.copy}>Sustainable UX: A design approach to reducing carbon emissions.</p>
			</article>
			<article className={styles.article}>
				<div className={styles.imageFrame}>
					<img className={styles.image} src={image} />
				</div>
				<h3 className={styles.subtitle}>Ethical Design</h3>
				<p className={styles.copy}>We design and build ethical technology that respects human rights, effort, and experience.</p>
			</article>
			<article className={styles.article}>
				<div className={styles.imageFrame}>
					<img className={styles.image} src={image} />
				</div>
				<h3 className={styles.subtitle}>Product Design for Sustainability</h3>
				<p className={styles.copy}>How products we build today can make the world more sustainable tomorrow.</p>
			</article>
			<article className={styles.article}>
				<div className={styles.imageFrame}>
					<img className={styles.image} src={image} />
				</div>
				<h3 className={styles.subtitle}>Circular Design Guide</h3>
				<p className={styles.copy}>Explore methods that help you understand, define, make, and release circular innovations.</p>
			</article>
		</div>
	</div>
)

export default Articles;