build:
	docker-compose build
run_and_bind:
	docker-compose run --rm web bash
start:
	docker-compose up
bind:
	docker-compose exec web bash

rubylint:
	bundle exec rubocop
rubylintfix:
	bundle exec rubocop --auto-correct-all
