# VS User-API

*REST API to get usernames for the exam in distributed systems (Verteilte Systeme)*

It is possible to get all users or a single user by name or id.


# Data model

```
    {
        "id": <user_id: int>,
        "user": <user_name: string>,
        "role": <admin | user: string>
    }
```

# API Reference

## Get all users
`HTTP GET` <br>
https://vs-user.eu-gb.mybluemix.net/api/v1/user

**Response:** Array of all JSON user objects

<hr>

## Get single user by name
`HTTP GET` <br>
https://vs-user.eu-gb.mybluemix.net/api/v1/user/name/`<user_name>`

**Response:** Single JSON user object

<hr>

## Get single user by id
`HTTP GET` <br>
https://vs-user.eu-gb.mybluemix.net/api/v1/user/id/`<user_id>`

**Response:** Single JSON user object

# Known issues
Currently, if you try to request a single user object with an invalid `<user_name>` or `<user_id>` you will neither get a `HTTP Error 404` nor a message `User not found`. Your Client is then waiting for a response, which will not be delivered.