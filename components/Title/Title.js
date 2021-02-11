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
				rootMargin: ['200px'],
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

const Title = ({ title }) => {
	const ref = useRef();
	const [isIntersecting, top] = useIntersectionObserver(ref);

	const isFixed = isIntersecting && top <= 0;
	return (
		<h2 className={`${styles.title} ${isFixed ? styles.isFixed : ''}`} ref={ref}>{title}</h2>
	);
}

export default Title;