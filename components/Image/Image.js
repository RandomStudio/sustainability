// Quick and messy approach to creating a list of all srcs and sizes required at build time
let currentData = {}
let fs;

if (typeof window === 'undefined') {
	fs = require('fs');
	try {
		// Note: this happens at build time so path is relative to project root
		if (fs.existsSync('./imageLog.json')){
			currentData = JSON.parse(fs.readFileSync('./imageLog.json'));
		}
	} catch(error) {
		console.log('Imagelog corrupt or missing. Continuing')
		fs.writeFileSync('./imageLog.json', '{}');
	}
}

const addToLog = (src, sizes) => {
	const updatedData = {
		...currentData,
		[src]: sizes,
	};
	currentData = updatedData;
	fs.writeFileSync('./imageLog.json', JSON.stringify(updatedData));
}

const Image = ({ sizes, src, ...props }) => {
	if (!sizes || process.env.NODE_ENV === 'development') {
		return (
			<img src={src} {...props} />
		)
	}

	if (typeof window === 'undefined' && src) {
		addToLog(src, sizes);
	}

	const [extension, ...filename] = src.split('.').reverse();

	const srcSet = sizes.map(size => [
		`${filename}_${size}.webp ${size}w`,
		`${filename}_${size}.${extension} ${size}w`,
	]);

	return (
		<picture>
			<source type="image/webp" srcset={srcSet.map(srcs => srcs[0]).join(', ')} />
			<source srcset={srcSet.map(srcs => srcs[1]).join(', ')} />
			<img src={`${filename}_${sizes[0]}.${extension}`} {...props} />
		</picture>
	
	)
}
export default Image;