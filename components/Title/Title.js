import { useEffect, useState, useRef } from 'react';
import styles from './Title.module.css';


const useIntersectionObserver = (ref) => {
	// State and setter for storing whether element is visible
	const [intersectionState, setIntersectionState] = useState([]);
	
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIntersectionState([entry.isIntersecting, entry.boundingClientRect.top]);
			},
			{
				rootMargin: ['-200px'],
				threshold: [0]
			}
		);

		if (ref.current) {
			observer.observe(ref.current);
		}
		return () => {
			observer.unobserve(ref.current);
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