# Rails 7 boilerplate

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
        $ cd bundle-infra

1. Build containers at the command prompt:

        $ docker-compose build

3. Run up

        $ docker-compose up
