# Task Manager API — BeTechified (Group 1) ✅

## Overview

**Task Manager API** is a simple RESTful service built as part of the BeTechified Backend Development bootcamp (Group 1). The API allows users to **create, read, update, and delete (CRUD)** tasks. Each task includes a **title**, **description**, and **status** (either `Pending` or `Completed`). The server is implemented in `app.js` and uses an in-memory data store for demonstration purposes.

---

## Problem Statement 💡

Participants were asked to build an API that lets users manage tasks with full CRUD support. The API should support:
- Creating tasks with a title and description
- Reading all tasks and individual tasks
- Updating the title, description or status of a task
- Deleting tasks

---

## Features ✨

- RESTful endpoints for task management
- Filtering endpoints for `Completed` and `Pending` tasks
- Simple validation: title and description are required when creating tasks
- Seeded sample data to try out the API immediately

---

## Tech Stack 🔧

- Node.js
- Express
- In-memory data store (array in `app.js`)

---

## Getting Started — Installation & Run ▶️

1. Clone the repository

```bash
git clone <repo-url>
cd Task_Manager_API--BeTechified-Group1
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in project root and set the `PORT` variable (e.g., `PORT=3000`). The server reads the port from `process.env.PORT`.

4. Start the server

```bash
node app.js
```

Server will be available at `http://localhost:<PORT>` (for example `http://localhost:3000`).

---

## API Endpoints 🧭

Base URL: `http://localhost:<PORT>`

- GET / — Welcome message
  - Response: 200 — "Welcome to the Task Management API"

- GET /tasks — Get all tasks
  - Response: 200 — JSON array of tasks

- GET /tasks/completed — Get tasks with status `Completed`
  - Response: 200 — JSON array of completed tasks

- GET /tasks/pending — Get tasks with status `Pending`
  - Response: 200 — JSON array of pending tasks

- GET /tasks/:id — Get a single task by id
  - Response: 200 — JSON object for the task, or 404 if not found

- POST /tasks — Create a new task
  - Request body (JSON):
    ```json
    {
      "title": "My task title",
      "description": "Task description",
      "status": "Pending" // optional, defaults to "Pending"
    }
    ```
  - Responses:
    - 201 — Task created (returns created task)
    - 400 — Missing `title` or `description`
    - 409 — Task already exists (title+status) — current implementation check

- PATCH /tasks/:id — Update a task (partial updates allowed)
  - Request body: any fields to update (e.g., `title`, `description`, `status`)
  - Responses:
    - 200 — Updated task
    - 404 — Task not found

- DELETE /tasks/:id — Delete a task
  - Responses:
    - 200 — Confirmation message
    - 404 — Task not found

---

## Examples (curl) 🧪

Get all tasks:

```bash
curl http://localhost:3000/tasks
```

Create a task:

```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"New Task","description":"Do something","status":"Pending"}'
```

Update a task:

```bash
curl -X PATCH http://localhost:3000/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"status":"Completed"}'
```

Delete a task:

```bash
curl -X DELETE http://localhost:3000/tasks/3
```

---

## Notes & Next Steps ⚠️

- The current implementation uses an in-memory array. For persistence, integrate a database (e.g., MongoDB, PostgreSQL).
- ID generation uses `tasks.length + 1`, which can produce duplicates if items are deleted — replace with a robust ID strategy (UUID or DB auto-increment) for production.
- Improve validation and error handling when needed.

---

## Contributing 🤝

This repo was built as part of the BeTechified backend cohort (Group 1). If you want to contribute, please:
- Fork the repo
- Create a branch with your feature/fix
- Open a pull request with a clear description of changes

**Contributors (Group 1):**

- [![Erickpython](https://github.com/Erickpython.png?size=40)](https://github.com/Erickpython) **Erickpython** — [https://github.com/Erickpython](https://github.com/Erickpython)
- [![Amarachi22](https://github.com/Amarachi22.png?size=40)](https://github.com/Amarachi22) **Amarachi22** — [https://github.com/Amarachi22](https://github.com/Amarachi22)
- [![Axcel-Designs](https://github.com/Axcel-Designs.png?size=40)](https://github.com/Axcel-Designs) **Axcel-Designs** — [https://github.com/Axcel-Designs](https://github.com/Axcel-Designs)
- [![Ib-source-collab](https://github.com/Ib-source-collab.png?size=40)](https://github.com/Ib-source-collab) **Ib-source-collab** — [https://github.com/Ib-source-collab](https://github.com/Ib-source-collab)
- [![opeyemiilori0-lang](https://github.com/opeyemiilori0-lang.png?size=40)](https://github.com/opeyemiilori0-lang) **opeyemiilori0-lang** — [https://github.com/opeyemiilori0-lang](https://github.com/opeyemiilori0-lang)

> Avatars are pulled from GitHub and will update automatically if contributors change their profile pictures.

---

## License 📄

This project is provided for educational purposes. Please add a license if you intend to share it publicly.

---

## Contact

If you have questions or want help extending this project, list your group contact details or GitHub handles here.
