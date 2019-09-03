.PHONY: build
build:
	npx parcel build --public-url "./" index.html

.PHONY: dev
dev:
	npx parcel serve index.html

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
