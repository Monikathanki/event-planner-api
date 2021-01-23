# event Planner

Live App: [https://event-planner-app.vercel.app](url)



### Summary
Event planner app where user can plan their event. add create team and add team member. 

1. User create team 
2. add team member
3. create event



## Technologies

- Node and Express
- Authentication via JWT
- RESTful API

## Testing

- Supertest (integration)
- Mocha and Chai (unit)

## Database
- Postgres
- Knex.js

## Production

Deployed via Heroku

### API Endpoints

## User Router

- /api/users
  - GET - gets all users
  - POST - creates a new user

## events Router
- /api/events
  - GET - gets all events
  - POST - creates a new event

## events/:id Router
- /api/events/:id 
  - GET - gets event by id 
  - DELETE - deletes a event by id 
  - PATCH - updates a event by id 
  - PUT - marks event completed

## teams Router
- /api/teams
  - GET - gets all teams
  - POST - create a new team

## teams/:id Router
- /api/teams/:id
 - GET - gets teams by id

## team-members Router
 -/api/team-members
  - GET - gets all team-members
  - POST - create a new team-member
