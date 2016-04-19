var setup = require('./src/setup');
var fs = require('fs');
var listOfHooks = fs.readdirSync('./hooks');

module.exports = {
	install: setup.install,
	uninstall: setup.uninstall,
	listOfHooks: listOfHooks
};
