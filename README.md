## Usage
```
var hookInstaller = require('devex-git-hooks');

hookInstaller.install('commit-msg');
hookInstaller.uninstall('commit-msg');
console.log(hookInstaller.listOfHooks);
```
## hooks list
* [commit-msg](hooks/commit-msg)
Checks for ticker mathcing in commit message and branch name