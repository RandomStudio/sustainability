import styles from './Links.module.css';
import Image from '../Image/Image';

const Links = ({ links, title }) => (
	<div className={styles.articles}>
		<h3 className={styles.title}>{title ?? 'Some useful articles'}</h3>
		<div className={styles.container}>
			{links?.map(({ description, image, link, title }) => (
				<article className={styles.article} key={link}>
					<div className={styles.imageFrame}>
						<Image
							alt={title}
							className={styles.image}
							decoding="async"
							loading="lazy"
							sizes={[220, 350]}
							src={`/images/${image}`}
						/>
					</div>
					<a href={link} className={styles.subtitle}><h3>{title}</h3></a>
					<p className={styles.copy}>{description}</p>
				</article>
			))}
			<div className={styles.spacer} />
		</div>
	</div>
)

export default Links;
