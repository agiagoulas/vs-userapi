
// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Setup express framework
const app = express();

app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());
app.use(cors());

// Setup server port
let port = process.env.PORT || 9000;

// Setup users
const users = [
    {
        id: 0,
        user: "admin",
        role: "admin" 
    },
    {
        id: 1,
        user: "Bimazubute",
        role: "admin"
    },
    {
        id: 2,
        user: "Holzweißig",
        role: "admin"
    },
    {
        id: 2,
        user: "Schwarz",
        role: "user"
    }
];

// Return all users
app.get('/api/v1/user', function(req, res, next) {
    res.json(users);
});

// Return single user by id
app.get('/api/v1/user/id/:id', function(req, res, next) {
    users.forEach(function(user) {
        if(req.params.id == user.id) {
            res.json(user);
        }
    });
});

// Return single user by name
app.get('/api/v1/user/name/:name', function(req, res, next) {
    users.forEach(function(user) {
        if(req.params.name == user.user) {
            res.json(user);
        }
    });
});

// Start the node server
app.listen(port, function(error) {
    if(error) {
        console.log(error);
    }
});