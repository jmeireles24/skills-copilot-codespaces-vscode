// Create web server
// Create comments array
// Create GET /comments route to return comments array
// Create POST /comments route to add a comment to comments array
// Create GET /comments/:id route to return a single comment by id
// Create PUT /comments/:id route to update a single comment by id
// Create DELETE /comments/:id route to delete a single comment by id

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const comments = [
    { id: 1, username: 'taylorswift', comment: 'lol'},
    { id: 2, username: 'taylorswift', comment: 'lol'},
    { id: 3, username: 'taylorswift', comment: 'lol'},
    { id: 4, username: 'taylorswift', comment: 'lol'},
    { id: 5, username: 'taylorswift', comment: 'lol