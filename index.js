
// Import modules
const express = require('express');

// Setup express framework
const app = express();

//app.use(bodyParser.urlencode( {extend: true} ));
app.use(express.json());

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
        user: "Schwarz",
        role: "user"
    }
];

// Return all users
app.get('/api/v1/user', function(req, res, next) {
    res.json(users);
});

// Return single user
app.get('/api/v1/user/:id', function(req, res, next) {
    users.forEach(function(user) {
        if(req.params.id == user.id) {
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