# Deployment
Front-end: https://cl-museum-app.netlify.app/
Back-end: https://cl-museum-app-be.fly.dev/


# deployment to fly.io
- add tables to elephantsql with seed data
- fly.io -> follow directions to create app, then [set secrets](https://fly.io/docs/reference/secrets/#setting-secrets) with elephantsql postgres link
```
$ flyctl secrets set DATABASE_URL=postgres://example.com/mydb 
```

- netlify -> add environment varialbe `REACT_APP_API_URL=` deployed fly.io link without backslash
- add environment variable `CI` with value of `false` (lowercase)

# Museum App

This museum app is a full-stack app with full CRUD operations, built using the PERN stack.

Backend tables/relationships:
For an individual user - interested in: dinosaur name. This means that one user can have many dinosaurs they are interested in.

## Features
- Full CRUD app (Create, Read, Update, Delete)

#### Back-end
- PostgreSQL
- Express.js
- Node.js

#### Front-end
- React
- Bootstrap CSS


# Resources
[Random name generator](https://www.behindthename.com/random/)

## Author
This is a personal project by Christina Loiacono.