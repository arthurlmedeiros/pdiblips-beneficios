.PHONY: lint build test

lint:
	cd ../.. && npm run lint -- --filter=beneficios

build:
	cd ../.. && npm run build

test:
	cd ../.. && npm test -- --filter=beneficios
