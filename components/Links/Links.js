import styles from './Links.module.css';

const Links = ({ links }) => (
	<div className={styles.articles}>
		<h3 className={styles.title}>Some useful articles</h3>
		<div className={styles.container}>
			{links.map(({ description, image, link, title }) => (
				<article className={styles.article} id={link}>
					<div className={styles.imageFrame}>
						<img decoding="async" loading="lazy"
							className={styles.image}
							src={`/images/${image}`}
							alt={title}
						/>
					</div>
					<a href={link} className={styles.subtitle}><h3>{title}</h3></a>
					<p className={styles.copy}>{description}</p>
				</article>
			))}
		</div>
	</div>
)

export default Links;