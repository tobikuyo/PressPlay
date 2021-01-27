# Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

Start Server:

`npm start` or `npm run server` (to use nodemon)

To Visit App:

`localhost:8000/api`

<br>

### Auth Endpoints

<details>
<summary>POST: /auth/register - register a new user</summary>
<br>
Expected Body

```JSON
{
    "name": "Tobi",
    "email": "tobi@mail.com",
    "password": "password"
}
```

Expected Response

```JSON
{
    "user_id": "9ekfbwwr489u4298"
}

```

</details>
<details>
<summary>POST: /auth/login - log in a user</summary>
<br>
Expected Body

```JSON
{
    "email": "tobi@mail.com",
    "password": "password"
}
```

Expected Response

```JSON
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}

```

</details>

<br>

### Movie Endpoints

<details>
<summary>GET: /auth/movie - get all saved movies</summary>

Expected Response

```JSON
[
    {
        "_id": "2948",
    "title": "Shawshank Redemption",
    "overview": "You should watch it",
    "backdrop": "/tXHpvlr5F7gV5DwgS7M5HBrUi2C.jpg",
    "poster": "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    "cast": [
        {
            "name": "Tim Robbins",
            "profile_path": "/hsCu1JUzQQ4pl7uFxAVFLOs9yHh.jpg"
            }
        ]
    }
]

```

</details>
<details>
<summary>POST: /auth/movie - add a movie</summary>
<br>
Expected Body

```JSON
{
    "_id": "2948",
    "title": "Shawshank Redemption",
    "overview": "You should watch it",
    "backdrop": "/tXHpvlr5F7gV5DwgS7M5HBrUi2C.jpg",
    "poster": "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    "cast": [
        {
           "name": "Tim Robbins",
           "profile_path": "/hsCu1JUzQQ4pl7uFxAVFLOs9yHh.jpg"
        }
    ]
}
```

Expected Response

```JSON
{
    "_id": "2948",
    "title": "Shawshank Redemption",
    "overview": "You should watch it",
    "backdrop": "/tXHpvlr5F7gV5DwgS7M5HBrUi2C.jpg",
    "poster": "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    "cast": [
        {
           "name": "Tim Robbins",
           "profile_path": "/hsCu1JUzQQ4pl7uFxAVFLOs9yHh.jpg"
        }
    ]
}

```

</details>
<details>
<summary>DELETE: /auth/movie/:id - remove a movie</summary>

</details>

<br>

### Database

<details>
    <summary>Image of Database Layout</summary>
    <br>

![Database](schema.png)

</details>
