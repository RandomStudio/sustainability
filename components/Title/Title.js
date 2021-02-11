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

const Title = ({ id, title }) => {
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

	useEffect(() => {
		window.dispatchEvent(new CustomEvent('changeNav', {
			detail: {
				id,
				isAbove: !isIntersecting && top <= 0
			}
		}));
	}, [isIntersecting]);

	return (
		<h2 className={`${styles.title} ${isActive ? styles.isActive : ''}`} ref={ref}>{title}</h2>
	);
}

export default Title;