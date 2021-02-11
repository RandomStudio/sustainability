import styles from './Header.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header = () => {
	const [links, setLinks] = useState([]);

	useEffect(() => {
		const addNav = ({ detail: { id, title }}) => {
			setLinks(l => [...l, { id, isAbove: false, title }])
		}
		
		const removeNav = ({ detail: { id }}) => {
			setLinks(l => l.filter(link => id !== link.id))
		}
		
		const changeNav = ({ detail: { id, isAbove }}) => {
			if (links.length < 1) {
				return;
			}
			const clonedLinks = [...links];
			clonedLinks.find(link => id === link.id).isAbove = isAbove;

			const filteredLinks = clonedLinks.filter(({ isAbove }) => !isAbove);
			setLinks(clonedLinks);
			window.dispatchEvent(new CustomEvent('navStateChange', {
				detail: {
					activeId: filteredLinks[0].id,
				}
			}))
		}
	
		window.addEventListener('addNav', addNav);
		window.addEventListener('removeNav', removeNav);
		window.addEventListener('changeNav', changeNav);

		return () => {
			window.removeEventListener('addNav', addNav);
			window.removeEventListener('removeNav', removeNav);
			window.removeEventListener('changeNav', changeNav);
		}
	}, [links]);

	return (
		<header className={styles.header}>
			<nav className={styles.menu}>
				{
					links.length === 0 ? (
						<Link href="/">Sustainability Toolkit</Link>
					) : (
						links.map(({ id, title }) => <Link href={`#${id}`}>{title}</Link>)
					)
				}
			</nav>
			<Link href="/principles">Goals & Principles</Link>
		</header>
	)
}

export default Header;