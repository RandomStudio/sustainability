import styles from './Header.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header = () => {
	const [activeId, setActiveId] = useState(null);
	const [links, setLinks] = useState([]);

	useEffect(() => {
		const addNav = ({ detail: { id, title }}) => {
			setLinks(l => [...l, { id, isAbove: l.length === 0, title }])
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
			setActiveId(filteredLinks[0].id);
	
			window.dispatchEvent(new CustomEvent('navStateChange', {
				detail: {
					activeId: filteredLinks[0].id
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
		<>
			<header className={styles.header} style={{ '--links': links.length }}>
				<nav className={`${styles.menu} ${links.length > 0 ? styles.hasNav : ''}`}>
					{links.length > 0 ? links.map(({ id, title }) => <Link href={`#${id}`}><a className={id === activeId ? styles.active : ''}>{title}</a></Link>) : <Link href="/">Sustainability Toolkit</Link>}
				</nav>
				<Link href="/principles" className={styles.principles}>Goals & Principles</Link>
			</header>
			<label className={styles.close} for="navcheckbox"></label>
		</>
	)
}

export default Header;