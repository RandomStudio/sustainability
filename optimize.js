const fs = require('fs');
const glob = require('glob');
const sharp = require('sharp');

const CACHE_DIR = './imageCache';
const DB_FILE = './imageLog.json';
const OUT_DIR = './out';

if (!fs.existsSync(CACHE_DIR)){
    fs.mkdirSync(CACHE_DIR);
}

const optimizeImage = async ([path, sizes]) => {
	const [extension, ...filename] = path.split('.').reverse();
	for await (size of sizes) {
		const original = sharp(OUT_DIR + path);
		
		const resized = original.width > size ? original.resize(size) : original;
		await resized.toFile(`${OUT_DIR}${filename}_${size}.${extension}`)
		await resized.webp().toFile(`${OUT_DIR}${filename}_${size}.webp`)
	}
	
}

const process = async () => { 
	const imageIndex = fs.readFileSync(DB_FILE);

	for await (entry of Object.entries(JSON.parse(imageIndex))) {
		optimizeImage(entry);
	}

	fs.unlinkSync(DB_FILE)
}

process();