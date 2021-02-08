import styles from './Articles.module.css';

const Articles = ({ image }) => (
	<div className={styles.articles}>
	<article className={styles.article}>
		<div className={styles.imageFrame}>
			<img className={styles.image} src={image} />
		</div>
		<h3 className={styles.title}>Title</h3>
		<p className={styles.copy}>Washington might be stuck when it comes to smart sustainability policy—but cities and states aren’t, and neither are companies. Here are six local ideas for making it work.</p>
	</article>
		<article className={styles.article}>
			<div className={styles.imageFrame}>
				<img className={styles.image} src={image} />
			</div>
			<h3 className={styles.title}>Title</h3>
			<p className={styles.copy}>Washington might be stuck when it comes to smart sustainability policy—but cities and states aren’t, and neither are companies. Here are six local ideas for making it work.</p>
		</article>
		<article className={styles.article}>
			<div className={styles.imageFrame}>
				<img className={styles.image} src={image} />
			</div>
			<h3 className={styles.title}>Title</h3>
			<p className={styles.copy}>Washington might be stuck when it comes to smart sustainability policy—but cities and states aren’t, and neither are companies. Here are six local ideas for making it work.</p>
		</article>
	</div>
)

export default Articles;