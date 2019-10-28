# Senior Web Developer Take-Home

A registration system for an upcoming trade show for <b>SuperThings
Extravaganza</b>.

### Required

-   MongoDB

## Instructions

### MongoDB

If MongoDB is not installed, follow this [installation guide](https://treehouse.github.io/installation-guides/mac/mongo-mac.html)

Start up Mongo by opening a terminal window and run:
`~/mongodb/bin/mongod`

While that is running, open a second terminal window to access the DB shell with `~/mongodb/bin/mongo`

Create a new db `use helios`

Create a new collection `db.createCollection('customers')`

### API

Run `npm install` to install all dependencies

Run `npm run start` which will start the `nodemon` watch process for the API and the dashboard.

#### POST

Make `POST` to `http://localhost:5000/` with the schema as query params

#### Schema

```
{
    fullName: string
    email: string
    dateOfBirth: date
    favoriteFiveIntegers: array of integers
    emailOptIn: boolean
    timeOfRegistration: timestamp
}
```

#### Dashboard

View real-time health of API at `http://localhost:5000/status`

<b>NOTE:</b> The `master` branch has been updated with a from scratch solution for the dashboard. With the time limitations, it is more stripped down but showcases the development logic that could be built upon to add more robust features like other community solutions.

The first pass of this was done with a community solution using [express-status-monitor](https://github.com/RafalWilinski/express-status-monitor). However, that has suddenly stopped working, even their example files abstracted out of this project are broken. So I suspect there is a problem with a dependency and I'm sure it will be resolved soon. Switch to the `community-dashboard` to see the original implementation.
