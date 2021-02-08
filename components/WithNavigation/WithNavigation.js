import styles from './WithNavigation.module.css';
import { Children as ReactChildren, cloneElement } from 'react';

const WithNavigation = ({ children }) => {
	const createNavigationTitleEl = (id, title) => <h2 id={id}>{title}</h2>
	
	const [titles, clonedChildren] = ReactChildren.toArray(children).reduce((result, child) => {
		const { id, title } = child.props;

		const Child = cloneElement(child, {
			...child.props,
			titleEl: createNavigationTitleEl(id, title)
		})
		return [
			[...result[0], [id, title]],
			[...result[1], Child]
		];
	}, [[], []]);

	return (
		<div className={styles.frame}>
			{clonedChildren}
		</div>
	)
}

export default WithNavigation;