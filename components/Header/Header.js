import styles from './Header.module.css';
import Link from 'next/link';

const Header = () => (
	<header className={styles.header}>
		<nav className={styles.menu}>
			<Link href="/">Sustainability Toolkit</Link>
		</nav>
		<Link href="/principles">Goals & Principles</Link>
	</header>
)

export default Header;