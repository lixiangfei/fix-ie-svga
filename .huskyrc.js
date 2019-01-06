module.exports = {
	hooks: {
		'pre-commit': 'pretty-quick --staged',
		'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS'
	}
};
