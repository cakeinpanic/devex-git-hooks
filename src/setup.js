
'use strict';


var path = require('path');
var fs = require('fs');
var mkdirp = require('mkdirp');
var hooksFolder = getGitHooksFolder();
var gitInited = !!hooksFolder;

function getGitHooksFolder() {
	var gitPath = path.join(process.cwd(), '.git');
	var folderPath;
	try {
		fs.statSync(gitPath).isDirectory();
	} catch (e) {
		console.error('Could not find git repo  at ' + process.cwd());
		return null;
	}

	folderPath = path.join(gitPath, 'hooks');
	mkdirp(folderPath);

	return folderPath;
}


function installHook(hookName) {
	if (gitInited) {
		var hook = path.resolve(hooksFolder, hookName);
		var myHookFile = path.relative(hooksFolder, path.join(__dirname,'../hooks/' , hookName));
		var hookExists = fs.existsSync(hook);
		if (hookExists) {
			uninstallHook(hookName);
		}
		try {
			fs.symlinkSync(myHookFile, hook);
			console.log('Install hook at ' + hook);
		} catch (e) {
			throw e;
		}
	}
}


function uninstallHook(hookName) {
	if (gitInited) {
		var hook = path.resolve(hooksFolder, hookName);
		var hookExists = fs.existsSync(hook);

		if (hookExists) {
			try {
				fs.unlinkSync(hook);
				console.log('Uninstall hook at ' + hook);
			} catch (e) {
				throw e;
			}
		}
	}
}

module.exports = {
	install: installHook,
	uninstall: uninstallHook
};