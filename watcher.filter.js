module.exports = (path) => {
	const ignoredPaths = ['static/dist', 'node_modules', '.git', 'assets', 'css'];

	if (ignoredPaths.includes(path)) {
		return false;
	}

	return true;
};
