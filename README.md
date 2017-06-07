# Beerio Web Version #

This is the web app version of the beerIO application.

### What is this repository for? ###

* Anyone that will be working on the BeerIO project

### Dependencies ###
- [GIT](https://git-scm.com/download/)
- [Docker and Docker-Compose](https://docs.docker.com/engine/installation/)
- [NPM](https://docs.docker.com/engine/installation/)

### How do I get set up? ###

- Clone the repo

```
#!php
$ git clone https://Carbondesigndevelopment@bitbucket.org/carbondesignanddevelopment/beerio-web2.git
```
- Clone the submodule

```
#!php
$ git submodule update --init --recursive
```
- Rename .env.example to .env in the root project location
- Run docker: 

```
#!php
$ docker-compose up  mysql apache2
```

- For javascript(Vue): 

```
#!javascript
$ npm run watch
```

- Run and seed migrations in the laradock folder via bash inside the workspace


```
#!php
$ cd laradock
$ docker-compose exec workspace bash
$ composer update //only have to run on first time
$ php artisan migrate
$ php artisan migrate --seed //only have to run on first time
```


- Visit http://localhost/

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* email: r.kazokas@carbondd.com