var setup = require('./src/setup');
var fs = require('fs');
var path = require('path');
var listOfHooks = fs.readdirSync(path.join(__dirname ,'./hooks'));

module.exports = {
	install: setup.install,
	uninstall: setup.uninstall,
	listOfHooks: listOfHooks
};
