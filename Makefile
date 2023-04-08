# Define variables
NODE_ENV ?= development

.PHONY: help
help:
	@echo "Available commands:"
	@echo "  install    Install dependencies"
	@echo "  start      Start the server"
	@echo "  dev        Start the server with nodemon"
	@echo "  test       Run the tests"
	@echo "  help       Print this help message"


start:
	@NODE_ENV=$(NODE_ENV) PORT=$(PORT) node ./server/app.js

dev:
	@NODE_ENV=development PORT=$(PORT) nodemon ./server/app.js

docker:
	@docker-compose up --build -d

test:
	npm test
