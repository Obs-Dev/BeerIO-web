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
$ git clone https://useryourusername@bitbucket.org/carbondesignanddevelopment/beerio-web2.git
```
- Clone the submodule

```
$ git submodule update --init --recursive
```
- Rename .env.example to .env in the root project location
- Run docker in the laradock directory: 

```
$ cd laradock
$ docker-compose up  mysql apache2
```

- For javascript(Vue): 

```
$ npm run watch
```

- Run and seed migrations in the laradock folder via bash inside the workspace


```
$ cd laradock
$ docker-compose exec workspace bash
$ composer update //only have to run on first time
$ php artisan migrate --seed //only have to run on first time
$ php artisan passport:install //only have to run on first time
```


- Visit http://localhost/

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* email: r.kazokas@carbondd.com or ryan.kazokas@gmail.com
