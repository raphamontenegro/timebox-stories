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



# CLIENT

## ROUTES 

### MVP

- / - The homepage
- routerLink /auth/login
- routerLink /auth/signup
- routerLink /stories
- routerLink - /stories?time=${length}
- routerLink /stories/:id

### BACKLOG

- routerLink /auth/pocket -- connects with Pockets API trhough Passport
- routerLink /auth/medium -- connects with Mediums API through Passport
- routerLink /stories/add-story -- creates a new story and adds it to the the story list
- routerLink /user/:id -- returns a list all the stories that the user has


## SERVICES

### MVP

- auth.login(user)
- auth.signup(user)
- auth.logout()
- auth.me()
- stories.getOne(id)
- stories.getList()

### BACKLOG

- auth.startOauth(provider)
- stories.save(story)


# SERVER
 
## ROUTES
 
### MVP

- POST /auth/signup --  creates a new account
- POST /auth/login -- connects the user to his/her account
- POST /auth/logout -- removes user from session
- GET /auth/me -- returns current user in session (if any)

- GET /stories -- returns a json with the the story list
- GET /stories?time=${length} - returns a list of stories with the same length
- GET /stories/:id -- returns a json with one story

### BACKLOG

- POST /stories  -- saves a story in the database
- GET /user/:id

- todo research routes for OAuth
  - POST /auth/pocket
  - POST /auth/medium


## MODELS

```
User {
  username: {
    type: string,
    required: true
  },
  email: {
    type: string,
    required: true
    unique: true
  },
  password: {
    type: string,
    required: true
  }
}
```

```
Story {
  text: {
    type: String,
    required: true
    },
	length:  {
		type: String,
		required: true
	},
	read: {
		type: boolean
	},
	tags: {
		type: String
	},
	owner: {
		type: ObjectId,
    required: true
  }
   /* source {
        type: String,
        required: true
      } */  
}
```


Continues on the next episode...

