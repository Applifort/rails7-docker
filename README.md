## Ruby on Rails boilerplate: Docker + Rails 7 + React

This biolerplate to create Rails 7 app with React on the board. [Esbuild](https://esbuild.github.io/) to build JS without Webpacker

### Specs

- Ruby on Rails 7
- Docker, docker-compose
- Ruby 3
- React
- Material Ui
- Jss for styles
- Esbuild
- Eslint

### Prerequirements

You need the following software to be installed on your system:

- [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://gitlab.com/help/topics/git/index.md)

All the other software will be installed via Docker container for future use automatically

### How to run

0. Clone the repo and navigate to the target folder.

        $ git@github.com:Applifort/rails7-docker.git
        $ cd rails7-docker

1. Build containers at the command prompt:

        $ make build

2. Now run container

        $ make run_and_bind
        
        Now we are inside the container. Install gems and created db

        $ bundle install
        $ rails db:create db:migrate

        Now exit from container

        $ exit

3. Run up

        $ make start

