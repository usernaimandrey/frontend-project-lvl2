install: #при первом клонирование репозитория
	npm ci

brain-games: #запуск игры
	node bin/brain-games.js

publish: #публикация пакета
	npm publish --dry-run

lint: #запустить eslint
	npx eslint .

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8