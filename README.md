# **Sarify API**

## Introduction

This API renders music data, with various genres. Each object in this API includes the track's song title, artist, cover art URL, genre, and duration. This API has yet to include actual music, but in the future will be added once the legalities are situated.

---

## Base URL and Endpoints

Requests to this API will be made through this base URL, hosted via Heroku: **https://sarify-backend.herokuapp.com/sarify/tracks/**

Endpoints:

- `GET /sarify/tracks` - Responds with all tracks from the Sarify resource
- `POST /sarify/tracks` - Creates a new data entry to the Sarify resource, and responds with that data entry
- `PUT /sarify/tracks/:id` - Updates an existing data entry within the Sarify resource, and responds with that updated data entry
- `DELETE /sarify/tracks/:id` - Deletes a data entry from the Sarify resource, and responds with the data that was just deleted
- `GET /sarify/tracks/:id` - Responds with data set requested according to the id of the data set

---

## Notes on Authentication

The following routes are auth protected:

- `POST /sarify/tracks`
- `PUT /sarify/tracks/:id`
- `DELETE /sarify/tracks/:id`

You can access thesw routes by sending a JSON web token using Google Firebase (logging in).

---

## JSON data

This is how the data sets from the Satify resource will be shown in the response data:

```
 {
     _id: String,
     title: String,
     artist: String,
     coverArt: String,
     project: String,
     genre: String,
     duration: String,
     createdAt: String,
     udpatedAt: String,
 }
```
