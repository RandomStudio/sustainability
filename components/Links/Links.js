import styles from './Links.module.css';

const Links = ({ links }) => (
	<div className={styles.articles}>
		<h3 className={styles.title}>Some useful articles</h3>
		<div className={styles.container}>
			{links.map(({ description, image, link, title }) => (
				<article className={styles.article} key={link}>
					<div className={styles.imageFrame}>
						<picture>
							<source srcset={`/images/${image}.webp`} type="image/webp" />
							<source srcset={`/images/${image}.jpg`} type="image/jpeg" />
							<img className={styles.image} alt={title} decoding="async" loading="lazy" src={`/images/${image}.jpg`} />
						</picture>
					</div>
					<a href={link} className={styles.subtitle}><h3>{title}</h3></a>
					<p className={styles.copy}>{description}</p>
				</article>
			))}
		</div>
	</div>
)

export default Links;
