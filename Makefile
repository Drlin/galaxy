install:
	@npm install

lint:
	@npm run lint

cleandist:
	rm -rf ./dist

build: install lint
	@npm run build

dev:
	@npm run dev