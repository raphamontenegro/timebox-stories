

# MVP

As a user I want to sign up so that I open an account.



As a user I want to log in so that I can access my account.



As a user I want to be able to choose the timebox of my stories so that I get the perfect reading time.



As a "blind "user I want the app to read out loud the stories so that I can get to know what it is about.



# BACKLOG

As a user I want to connect with Pocket so that I can access my selected files.

As a user I want to sign up and log in with Pocket.

As a user I want to be able to pick another story so that I can skip a story I don't like.

As a user I want to be able to choose the stories by tags so that I can get the theme/subject I prefer.

As a  "color blind" user I want to be able to be able to use the app normally so that I can profit from its full potential.

As a user, if the timebox is longer than 45 minutes, I want the app to recommend me a nice place to chill so that I can read more comfortably.

As a user I want to be able to choose the language of the app so that I can understand better the features.
As a user I want the app to recognize the language of my phone so that I can understand better the features.

As a user I want to have stories outside of Pocket so that I can read random stuff.

As a user I want to be able to do social login so that I can access the app quickly.

As a user, a distant future, I want to be able to buy e-books from Amazon so that I can enhance my reading possibilities.



# ROUTES


## CLIENT 

#### MVP

- / - The homepage
- routerLink /auth/login
- routerLink /auth/signup
- routerLink /storypicker
- routerLink /storypicker/:id

#### BACKLOG

- routerLink /auth/pocket -- connects with Pockets API trhough Passport
- routerLink /auth/medium -- connects with Mediums API through Passport
- routerLink /stories/add-story -- creates a new story and adds it to the the story list
- routerLink /user/:id -- returns a list all the stories that the user has


 ## SERVER
 
 #### MVP
POST /auth/signup --  creates a new account
POST /auth/Login -- connects the user to his/her account
GET /storypicker -- returns a json with the the story list
GET /stories/:id -- returns a json with one story

#### BACKLOG

POST /stories  -- saves a story in the database
POST /auth/pocket
POST /auth/medium
GET /user/:id







Continues on the next episoded...









# ANGULAR DEFAULT



# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
