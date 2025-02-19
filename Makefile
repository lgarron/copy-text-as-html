.PHONY: build
build: setup
	bun run script/build.ts

.PHONY: setup
setup:
	bun install --frozen-lockfile

.PHONY: dev
dev: setup
	bun run script/dev.ts

.PHONY: lint
lint: setup
	npx @biomejs/biome check

.PHONY: format
format: setup
	npx @biomejs/biome check --write

.PHONY: clean
clean:
	rm -rf ./dist

.PHONY: reset
reset: clean
	rm -rf ./node_modules

.PHONY: prepublishOnly
prepublishOnly: clean build

.PHONY: deploy
deploy: build
	bun x @cubing/deploy

.PHONY: open
open:
	open "https://garron.net/app/copy-text-as-html/"
