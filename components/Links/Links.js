import styles from './Links.module.css';
import Image from 'next/image';

const Links = ({ links }) => (
	<div className={styles.articles}>
		<h3 className={styles.title}>Some useful articles</h3>
		<div className={styles.container}>
			{links.map(({ description, image, title }) => (
				<article className={styles.article}>
					<div className={styles.imageFrame}>
						<Image
							className={styles.image}
							src={`/images/${image}`}
							alt={title}
							layout="fill"
						/>
					</div>
					<h3 className={styles.subtitle}>{title}</h3>
					<p className={styles.copy}>{description}</p>
				</article>
			))}
		</div>
	</div>
)

export default Links;