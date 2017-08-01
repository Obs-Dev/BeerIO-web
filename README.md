# Beerio Web Version #
[![Build Status](https://travis-ci.org/ryankazokas/beerio-web.svg?branch=master)](https://travis-ci.org/ryankazokas/beerio-web)

This is the web app version of the beerIO application. 
The staging server for web application is here: [BeerIO Staging Server](beerio-stage.carbondd.com)

### What is this repository for? ###

* Anyone that will be working on the BeerIO Web project and API

### Dependencies ###
- [GIT](https://git-scm.com/download/)
- [Docker and Docker-Compose](https://docs.docker.com/engine/installation/)
- [NPM](https://nodejs.org/en/download/)

### How do I get set up? ###

- Fork and clone the repo
- Once you have it cloned on your machine, update the submodule

```
$ git submodule update --init --recursive
```
- Rename .env.example to .env in the root project location
- Run docker in the laradock directory: 

```
$ cd laradock
$ docker-compose up  mysql apache2
```

- Run NPM Install on the initial run.
```
$ npm install
```

- Run webpack to bundle javascript files
```
$ npm run watch
```

- Open a new terminal and run and seed migrations in the laradock folder via bash inside the docker workspace


```
$ cd laradock
$ docker-compose exec workspace bash
$ composer update //only have to run on first time
$ php artisan migrate --seed //only have to run on first time
$ php artisan passport:install //only have to run on first time
$ php artisan key:generate //only have to run on first time
```

!Important:
Inside the docker container run this in the /var/www/storage directory
```
sudo chmod 0600 storage/oauth*
sudo chown laradock:laradock storage/oauth*
```


- Visit http://localhost/

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* email: r.kazokas@carbondd.com or ryan.kazokas@gmail.com
