import styles from './Header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Header = ({ setNavCheckedState }) => {
	const router = useRouter();
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

	const scrollToLink = (e, id) => {
		e.preventDefault();
		const el = document.getElementById(id);
		el.scrollIntoView({
			behavior: 'smooth',
		});
		setNavCheckedState(false);
		return false;
	}

	return (
		<>
			<header className={styles.header} style={{ '--links': links.length }}>
				<nav className={`${styles.menu} ${links.length > 0 ? styles.hasNav : ''}`}>
					{links.length > 0 ? links.map(({ id, title }) => (
						<Link href={`#${id}`} key={id}><a className={id === activeId ? styles.isActive : ''} onClick={e => scrollToLink(e, id)}>{title}</a></Link>
					))
					: <Link href="/">Sustainability Toolkit</Link>}
				</nav>
				<Link href="/principles"><a className={`${styles.principles} ${router.pathname === '/principles' ? styles.isActive : ''}`}>Goals & Principles</a></Link>
			</header>
			<label className={styles.close} htmlFor="navcheckbox"></label>
		</>
	)
}

export default Header;