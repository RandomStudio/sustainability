import { useEffect, useState, useRef } from 'react';
import styles from './Title.module.css';
import { TOP_OFFSET_WHEN_MEDIUM } from '../../styles/variables';

const useIntersectionObserver = (ref) => {
	// State and setter for storing whether element is visible
	const [intersectionState, setIntersectionState] = useState([]);
	
	useEffect(() => {
		if (!ref?.current) {
			return undefined;
		}
		let refRef = ref.current;
		const observer = new IntersectionObserver(
			([entry]) => {
				setIntersectionState([entry.isIntersecting, entry.boundingClientRect.top]);
			},
			{
				rootMargin: ['0px'],
				threshold: [0]
			}
		);

		observer.observe(refRef);
		return () => {
			observer.unobserve(refRef);
		};
	}, []);

	return intersectionState;
}

const Title = ({ className, id, isOnRight, title }) => {
	const ref = useRef();
	const [isIntersecting, top] = useIntersectionObserver(ref);
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		const onActiveStateChange = ({ detail: { activeId } }) => {
			setIsActive(activeId === id);
		}
	
		window.dispatchEvent(new CustomEvent('addNav', {
			detail: {
				id,
				title
			}
		}));

		window.addEventListener('navStateChange', onActiveStateChange);
		
		return () => {
			window.dispatchEvent(new CustomEvent('removeNav', {
				detail: {
					id,
					title
				}
			}));
			window.removeEventListener('navStateChange', onActiveStateChange);
		}
	}, []);

	const isAbove = !isIntersecting && top <= 0;
	useEffect(() => {
		window.dispatchEvent(new CustomEvent('changeNav', {
			detail: {
				id,
				isAbove
			}
		}));
	}, [isIntersecting]);

	return (
		<label className={`${className} ${styles.title} ${isActive ? `${styles.isActive} activeTitle` : ''} ${isAbove ? styles.isAbove : ''}`} htmlFor="navcheckbox" ref={ref}>
			<h2 id={id}>
				{title}
			</h2>
		</label>
	);
}

export default Title;