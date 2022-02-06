start:
	docker-compose up

bind:
	docker-compose exec web bash

rblint:
	bundle exec rubocop
rblintfix:
	bundle exec rubocop --auto-correct-all
