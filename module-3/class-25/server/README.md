# Todo API

An Express CRUD API that stores todos in the local [`todos.json`](./todos.json) file.

## Run

```bash
npm install
npm start
```

The server runs at `http://localhost:3000` by default.

## Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/todos` | Get all todos |
| `GET` | `/todos/:id` | Get one todo |
| `POST` | `/todos` | Create a todo |
| `PUT` | `/todos/:id` | Update a todo |
| `DELETE` | `/todos/:id` | Delete a todo |

Create or update a todo with JSON such as:

```json
{
  "title": "Learn Express",
  "completed": false
}
```
