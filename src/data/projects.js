const projects = [
  {
    id: 1,
    title: "Local Event Finder",
    description: "A web-based API for discovering and booking local events.",
    fullDescription: "The Local Event Finder and Ticket Booking API helps users discover nearby events, book tickets, and leave reviews. Built with Node.js, Express, and MongoDB, it includes models for users, events, bookings, locations, and reviews. The API is structured with routes, controllers, and a global error handler, and is organized into dev/test/prod environments. This project demonstrates backend design, database modeling, and robust error handling.",
    tech: ["Node.js", "Express", "MongoDB", "Mongoose"],
    code: "https://github.com/Delcan-f/Local-Event-Finder",
    demo: "",
    image: "/images/event-finder.png",
    codeSnippets: [
      `// Example Event model
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  date: { type: Date, required: true },
  venue: { type: mongoose.Schema.Types.ObjectId, ref: "Location", required: true },
  description: { type: String, trim: true },
});

module.exports = mongoose.model("Event", eventSchema);`,
      `// Example Event controller
const Event = require("../models/Event");

exports.createEvent = async (req, res, next) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (err) {
    next(err);
  }
};`,
      `// Main Router
const express = require("express");
const router = express.Router();

router.use("/users", require("./userRoutes"));
router.use("/events", require("./eventRoutes"));
router.use("/bookings", require("./bookingRoutes"));
router.use("/locations", require("./locationRoutes"));
router.use("/reviews", require("./reviewRoutes"));

module.exports = router;`
    ],
    challenges: "The main challenges included managing relationships between users, bookings, and events, and ensuring error handling remained consistent across routes."
  },
  {
    id: 2,
    title: "Golf Game Tracker",
    description: "An API for tracking golf games, player scores, and statistics.",
    fullDescription: "The Golf Game Tracker API allows users to log golf games, record scores, and view performance statistics. It is built with Node.js, Express, and MongoDB, and deployed via Render with MongoDB Atlas. The project uses Jest and Supertest for automated testing and features a CI/CD pipeline using GitHub Actions. This project highlights backend API development, test-driven development, and continuous deployment workflows.",
    tech: ["Node.js", "Express", "MongoDB", "Mongoose", "Jest", "Supertest", "Render", "GitHub Actions"],
    code: "https://github.com/Delcan-f/Golf-Game-Tracker-API",
    demo: "",
    image: "/images/golf-tracker.png",
    codeSnippets: [
      `// Example Game model
const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  players: [{ name: String, score: Number }],
});

module.exports = mongoose.model("Game", gameSchema);`,
      `// Jest + Supertest example
const request = require("supertest");
const app = require("../server");

describe("POST /games", () => {
  it("should create a new game", async () => {
    const response = await request(app).post("/games").send({
      date: "2025-01-01",
      players: [{ name: "Alice", score: 72 }]
    });
    expect(response.statusCode).toBe(201);
    expect(response.body.players[0].name).toBe("Alice");
  });
});`,
      `# GitHub Actions CI/CD (ci.yml)
name: CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Use Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 20
      - run: npm install
      - run: npm test -- --coverage`
    ],
    challenges: "The biggest challenge was configuring a CI/CD pipeline that ran automated tests and deployed only after successful builds."
  },
  {
    id: 3,
    title: "Task Tracker App",
    description: "A Dockerized task management app with MongoDB integration.",
    fullDescription: "The Task Tracker App is a full-stack project designed for managing tasks with a Node.js/Express backend and MongoDB for persistence. The app supports creating, fetching, and deleting tasks, with an API fully tested using Jest and Supertest. The project is containerized with Docker and includes separate configurations for development and production environments using Docker Compose. This demonstrates my ability to design maintainable APIs, write tests for reliability, and configure Docker for multi-environment workflows.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Docker", "Jest", "Supertest"],
    code: "https://github.com/Delcan-f/Task-Tracker-Docker",
    demo: "",
    image: "/images/task-tracker.png",
    codeSnippets: [
      `// Controller: create a new task
const createTask = async (request, response) => {
  try {
    const { title, description, status } = request.body;
    const newTask = await Task.create({ title, description, status });
    response.status(201).json(newTask);
  } catch (err) {
    response.status(400).json({ error: err.message });
  }
};`,
      `// Jest/Supertest: POST /tasks
describe('POST /tasks', () => {
  it('should create a new task', async () => {
    const newTask = { 
      title: 'Test Task', 
      description: 'Test description', 
      status: 'in-progress' 
    };
    const response = await request(app).post('/tasks').send(newTask);
    expect(response.statusCode).toBe(201);
    expect(response.body).toMatchObject(newTask);
  });
});`,
      `# docker-compose.dev.yml
version: "3.9"
services:
  app:
    build:
      context: .
    container_name: task-tracker-app-dev
    ports:
      - "3000:3000"
    env_file:
      - .env.development
    depends_on:
      - mongo
    volumes:
      - .:/app
      - /app/node_modules

  mongo:
    image: mongo:6.0
    container_name: mongodb-dev
    ports:
      - "27017:27017"
    volumes:
      - mongo-data-dev:/data/db

volumes:
  mongo-data-dev:`
    ],
    challenges: "The biggest challenges were configuring multi-environment Docker Compose setups and ensuring test reliability with Jest and Supertest while working with a live MongoDB instance."
  },
  {
    id: 4,
    title: "Downloads Folder Organiser",
    description: "A Python script that organises a cluttered Downloads folder into categorised subfolders.",
    fullDescription: "The Downloads Folder Organiser is a Python script that automatically scans the Downloads directory and sorts files into subfolders such as Images, Documents, Archives, Videos, Audio, and Scripts. It uses only Python's built-in modules (os, shutil, pathlib), making it lightweight and dependency-free. This project demonstrates my ability to build practical automation tools with Python.",
    tech: ["Python 3", "os", "shutil", "pathlib"],
    code: "https://github.com/Delcan-f/downloads-organiser",
    demo: "",
    image: "/images/downloads-organiser.png",
    codeSnippets: [
      `# Categorise file by extension
def categorise_file(file_name):
    ext = os.path.splitext(file_name)[1].lower()
    for category, extensions in CATEGORIES.items():
        if ext in extensions:
            return category
    return "Others"`,
      `# Organise Downloads folder
def organise_downloads():
    print(f"Scanning folder: {DOWNLOADS_PATH}")
    for item in os.listdir(DOWNLOADS_PATH):
        item_path = os.path.join(DOWNLOADS_PATH, item)
        if os.path.isfile(item_path):
            category = categorise_file(item)
            target_folder = os.path.join(DOWNLOADS_PATH, category) 
            os.makedirs(target_folder, exist_ok=True)
            new_path = os.path.join(target_folder, item)
            print(f"Moving: {item} → {category}/")
            shutil.move(item_path, new_path)`,
      `# Run script
if __name__ == "__main__":
    organise_downloads()
    print("Downloads folder has been organised.")`
    ],
    challenges: "The main challenge was ensuring the script handled all file types gracefully while avoiding overwriting or moving existing folders in the Downloads directory."
  },
  {
    id: 5,
    title: "Hiking & Trail Management API",
    description: "A Flask API for managing hikers, trails, equipment, and trail reviews.",
    fullDescription: "This Hiking & Trail Management API is a Flask-based project that allows users to manage hikers, trails, hiking equipment, and trail reviews. The API is structured with Blueprints for modular controllers, supports CRUD operations for all models, and uses Marshmallow for validation and serialization. PostgreSQL is used for persistent storage, and CLI commands are included for database creation, seeding, and dropping tables. This project demonstrates RESTful API design, database relationships, data validation, and Python backend development.",
    tech: ["Python", "Flask", "SQLAlchemy", "Marshmallow", "PostgreSQL"],
    code: "https://github.com/Delcan-f/hikingapp",
    demo: "",
    image: "/images/hiking.png",
    codeSnippets: [
      `# Example CLI Command to seed database
@db_commands.cli.command("seed")
def seed_tables():
    hikers = [Hiker(first_name="John", last_name="Smith", email="johnsmith@email.com", phone_number="0456789123")]
    db.session.add_all(hikers)
    db.session.commit()
    print("Tables seeded")`,
      `# Example Equipment Controller
@equipments_bp.route("/<int:equipment_id>")
def get_equipment(equipment_id):
    stmt = db.select(Equipment).filter_by(id=equipment_id)
    equipment = db.session.scalar(stmt)
    if equipment:
        return equipment_schema.dump(equipment)
    else:
        return {"message": f"Equipment with id {equipment_id} does not exist"}, 404`,
      `# Example Trail Model
class Trail(db.Model):
    __tablename__ = "trails"
    id = db.Column(db.Integer, primary_key=True)
    trail_name = db.Column(db.String(100), nullable=False, unique=True)
    location = db.Column(db.String(100), nullable=False)
    distance = db.Column(db.Integer, nullable=False)
    difficulty = db.Column(db.Integer, nullable=False)
    hike_reviews = db.relationship("HikeReview", back_populates="trails", cascade="all, delete")
    trail_equipments = db.relationship("TrailEquipment", back_populates="trails", cascade="all, delete")`
    ],
    challenges: "The main challenges included setting up correct database relationships between hikers, trails, equipment, and reviews, implementing validation with Marshmallow, and handling edge cases for CRUD operations in a Flask backend."
  }
];

export default projects;
