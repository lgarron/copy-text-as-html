# This Makefile is a wrapper around the scripts from `package.json`.
# https://github.com/lgarron/Makefile-scripts

# Note: the first command becomes the default `make` target.
NPM_COMMANDS = build dev lint format clean prepack

.PHONY: $(NPM_COMMANDS)
$(NPM_COMMANDS):
	npm run $@

# We write the npm commands to the top of the file above to make shell autocompletion work in more places.
DYNAMIC_NPM_COMMANDS = $(shell node -e 'console.log(Object.keys(require("./package.json").scripts).join(" "))')
UPDATE_MAKEFILE_SED_ARGS = "s/^NPM_COMMANDS = .*$$/NPM_COMMANDS = ${DYNAMIC_NPM_COMMANDS}/" Makefile
.PHONY: update-Makefile
update-Makefile:
	if [ "$(shell uname -s)" = "Darwin" ] ; then sed -i "" ${UPDATE_MAKEFILE_SED_ARGS} ; fi
	if [ "$(shell uname -s)" != "Darwin" ] ; then sed -i"" ${UPDATE_MAKEFILE_SED_ARGS} ; fi

.PHONY: deploy
deploy: build
	rsync -avz \
		--exclude .DS_Store \
		./dist/ \
		garron.net:~/garron.net/app/copy-text-as-html/
	echo "\nDone deploying. Go to https://garron.net/app/copy-text-as-html/\n"

.PHONY: open
open:
	open "https://garron.net/app/copy-text-as-html/"
