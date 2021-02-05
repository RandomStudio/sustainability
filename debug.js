import '@babylonjs/core/Debug/debugLayer';
import '@babylonjs/inspector';
import Stats from 'stats.js';

let stats;
let isInspectorVisible = false;

export const setupStats = () => {
	stats = new Stats();
	stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
	document.body.appendChild(stats.dom);
};

export const refreshStats = () => {
	if (!stats) {
		return;
	}

	stats.begin();
	stats.end();
};

export const toggleDebugTools = (scene) => {
	if (isInspectorVisible) {
		scene.debugLayer.hide();
		isInspectorVisible = false;

		return;
	}

	scene.debugLayer.show({
		overlay: true,
	});

	isInspectorVisible = true;
};
