module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {
			features: {
				customProperties: {
					warnings: false,
					noValueNotifications: false
				}
			}
		},
		'postcss-cssential': {
			output: `./hugo/layouts/partials/util/criticalstyles.html`,
			cssComment: '!critical',
			htmlComment: 'criticalcss',
			removeOriginal: true
		},
    'cssnano': {
			preset: 'default',
			autoprefixer: false
		}
  }
}