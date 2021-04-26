module.exports = {
	plugins: [
		[
			"postcss-mixins",
			{
				mixinsFiles: './styles/mixins.pcss'
			}
		],
		"postcss-nested",
		[
			"postcss-simple-vars",
			{
				"variables": require("./styles/variables.js")
			}
		],
		"postcss-flexbugs-fixes",
		[
			"postcss-preset-env",
			{
				"autoprefixer": {
					"grid": false
				},
				"browsers": "> 0.5%, last 2 versions, not dead",
				"stage": 0,
				"features": {
					"custom-properties": false
				}
			}
		]
	]
}