install: #при первом клонирование репозитория
	npm ci

publish: #публикация пакета
	npm publish --dry-run

lint: #запустить eslint
	npx eslint .

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8