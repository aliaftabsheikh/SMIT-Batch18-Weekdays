const express = require("express");
const fs = require("fs");
const path = require("path");
const { randomUUID } = require("crypto");

const app = express();
const PORT = 3000;
const dataFilePath = path.join(__dirname, "todos.json");

app.use(express.json());

function readTodos() {
  const fileContents = fs.readFileSync(dataFilePath, "utf8");
  const todos = JSON.parse(fileContents);

  if (!Array.isArray(todos)) {
    throw new Error("todos.json must contain an array.");
  }

  return todos;
}

function saveTodos(todos) {
  fs.writeFileSync(dataFilePath, JSON.stringify(todos, null, 2));
}

function findTodo(todos, id) {
  return todos.find((todo) => todo.id === id);
}

function isValidTitle(title) {
  return typeof title === "string" && title.trim().length > 0;
}

app.get("/todos", (req, res, next) => {
  try {
    res.json(readTodos());
  } catch (error) {
    next(error);
  }
});

app.get("/todos/:id", (req, res, next) => {
  try {
    const todo = findTodo(readTodos(), req.params.id);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found." });
    }

    res.json(todo);
  } catch (error) {
    next(error);
  }
});

app.post("/todos", (req, res, next) => {
  try {
    const { title, completed = false } = req.body;

    if (!isValidTitle(title)) {
      return res.status(400).json({ message: "A non-empty title is required." });
    }

    if (typeof completed !== "boolean") {
      return res.status(400).json({ message: "Completed must be a boolean." });
    }

    const todos = readTodos();
    const todo = {
      id: randomUUID(),
      title: title.trim(),
      completed,
    };

    todos.push(todo);
    saveTodos(todos);

    res.status(201).json(todo);
  } catch (error) {
    next(error);
  }
});

app.put("/todos/:id", (req, res, next) => {
  try {
    const { title, completed } = req.body;

    if (title === undefined && completed === undefined) {
      return res.status(400).json({ message: "Provide a title or completed value to update." });
    }

    if (title !== undefined && !isValidTitle(title)) {
      return res.status(400).json({ message: "Title must be a non-empty string." });
    }

    if (completed !== undefined && typeof completed !== "boolean") {
      return res.status(400).json({ message: "Completed must be a boolean." });
    }

    const todos = readTodos();
    const todo = findTodo(todos, req.params.id);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found." });
    }

    if (title !== undefined) {
      todo.title = title.trim();
    }

    if (completed !== undefined) {
      todo.completed = completed;
    }

    saveTodos(todos);
    res.json(todo);
  } catch (error) {
    next(error);
  }
});

app.delete("/todos/:id", (req, res, next) => {
  try {
    const todos = readTodos();
    const todoIndex = todos.findIndex((todo) => todo.id === req.params.id);

    if (todoIndex === -1) {
      return res.status(404).json({ message: "Todo not found." });
    }

    const [deletedTodo] = todos.splice(todoIndex, 1);
    saveTodos(todos);

    res.json(deletedTodo);
  } catch (error) {
    next(error);
  }
});

app.use((error, req, res, next) => {
  if (error instanceof SyntaxError && "body" in error) {
    return res.status(400).json({ message: "Request body must be valid JSON." });
  }

  console.error(error);
  res.status(500).json({ message: "Unable to process todos." });
});

app.listen(PORT, () => {
  console.log(`Todo API is running at http://localhost:${PORT}`);
});
