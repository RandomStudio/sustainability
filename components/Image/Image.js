const Image = ({ sizes, src, ...props }) => {
	if (!sizes || process.env.NODE_ENV === 'development') {
		return (
			<img src={src} {...props} />
		)
	}

	const [extension, ...filename] = src.split('.').reverse();

	const srcSet = sizes.map(size => [
		`${filename}_${size}.webp ${size}w`,
		`${filename}_${size}.${extension} ${size}w`,
	]);

	if (typeof window === 'undefined') {
		const fs = require('fs');
		let currentJson = '{}';

		// Note: this happens at build time so path is relative to project root
		if (fs.existsSync('./imageLog.json')){
			currentJson = fs.readFileSync('./imageLog.json');
		}

		const currentData = JSON.parse(currentJson);
		const updatedData = JSON.stringify({
			...currentData,
			[src]: sizes,
		});

		fs.writeFileSync('./imageLog.json', updatedData);
	}

	return (
		<picture>
			<source type="image/webp" srcset={srcSet.map(srcs => srcs[0]).join(', ')} />
			<source srcset={srcSet.map(srcs => srcs[1]).join(', ')} />
			<img src={`${filename}_${sizes[0]}.${extension}`} {...props} />
		</picture>
	
	)
}
export default Image;