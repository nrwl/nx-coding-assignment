# Server

The server application is the API for the client to access ticket and user data.

When you run `yarn start`, the API is available at http://localhost:4200/api.

## Endpoints

### Fetch tickets

Request:

```text
GET /api/tickets
```

Sample Response:

```json
[
  {
    "id": 1,
    "description": "Install a monitor arm",
    "assigneeId": 1,
    "completed": false
  },
  {
    "id": 2,
    "description": "Move the desk to the new location",
    "assigneeId": 1,
    "completed": false
  }
]
```

### Fetch single ticket

Request:

```text
GET /api/tickets/:id
```

Sample Response:

```json
{
  "id": 1,
  "description": "Install a monitor arm",
  "assigneeId": 1,
  "completed": false
}
```

### Fetch users

Request:

```text
GET /api/users
```

Sample Response:

```json
[
  {
    "id": 1,
    "name": "Alice"
  },
  {
    "id": 2,
    "name": "Bob"
  },
  {
    "id": 3,
    "name": "Chris"
  },
  {
    "id": 4,
    "name": "Daisy"
  },
  {
    "id": 5,
    "name": "Ed"
  }
]
```

### Fetch single user

Request:

```text
GET /api/users/:id
```

Sample Response:

```json
{
  "id": 1,
  "name": "Alice"
}
```

### Assign user to ticket

Request:

```text
PUT /api/tickets/:ticketId/assign/:userId
```

Response:

```text
204 No Content
```

### Mark ticket as complete

Request:

```text
PUT /api/tickets/:id/complete
```

Response:

```text
204 No Content
```

### Mark ticket as incomplete

Request:

```text
DELETE /api/tickets/:id/complete
```

Response:

```text
204 No Content
```
