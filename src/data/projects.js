const projects = [
  {
    id: 1,
    title: "Local Event Finder",
    description: "The Local Event Finder allows users to discover and book local events in their area.", // short summary
    fullDescription: "The Local Event Finder is a full-stack web application that allows users to discover and book local events in their area. The app features a robust back-end built with Node.js, Express, and MongoDB, supporting complex relationships between users, events, bookings, reviews, and locations. Users can browse events, book tickets, and leave reviews, while administrators can manage events, locations, and user accounts through a RESTful API. This project demonstrates my ability to build a scalable API, handle relational data with Mongoose, and implement secure and structured endpoints.",
    tech: ["Node.js", "Express", "MongoDB", "Mongoose", "JavaScript", "REST API"],
    code: "https://github.com/yourusername/local-event-finder",
    demo: "",
    image: "/images/event-finder.png",
    codeSnippets: [
      `// Create a new booking
async function createBooking(req, res) {
    const { userId, eventId, locationId } = req.body;
    if (!userId || !eventId || !locationId) {
        return res.status(400).json({ error: "Required fields missing" });
    }
    try {
        const newBooking = await Booking.create({
            bookingUser: userId,
            bookingEvent: eventId,
            bookingLocation: locationId,
            bookingStatus: "Pending"
        });
        res.status(201).json(newBooking);
    } catch (err) {
        res.status(500).json({ error: "Error creating booking" });
    }
}`,
      `// Fetch all bookings for a user
async function getBookings(req, res) {
    try {
        const bookings = await Booking.find().populate('bookingUser').populate('bookingEvent');
        res.status(200).json(bookings);
    } catch (err) {
        res.status(500).json({ error: "Error fetching bookings" });
    }
}`,
      `// Update booking status
async function updateBooking(req, res) {
    const { bookingId } = req.params;
    const { bookingStatus } = req.body;
    try {
        const updatedBooking = await Booking.findByIdAndUpdate(
            bookingId, 
            { bookingStatus }, 
            { new: true }
        );
        res.status(200).json(updatedBooking);
    } catch (err) {
        res.status(500).json({ error: "Error updating booking" });
    }
}`
    ],
    challenges: "Managing relationships between users, events, and bookings in MongoDB required careful schema design and use of .populate() to fetch related data efficiently."
  },
  {
    id: 2,
    title: "Golf Game Tracker API",
    description: "A backend service for tracking golf games, scores, and statistics.", // short summary
    fullDescription: "A backend service for tracking golf games, scores, and statistics. Built with Node.js, Express, and MongoDB, deployed with CI/CD pipelines.",
    tech: ["Node.js", "Express", "MongoDB", "CI/CD"],
    code: "https://github.com/yourname/golf-game-tracker",
    demo: "",
    image: "/images/golf-tracker.png"
  },
  {
    id: 3,
    title: "Task Tracker App",
    description: "A Dockerized task management app with MongoDB integration.", // short summary
    fullDescription: "A Dockerized task management app with MongoDB integration. Includes multi-environment Docker setup for development and production.",
    tech: ["React", "Node.js", "MongoDB", "Docker"],
    code: "https://github.com/yourname/task-tracker",
    demo: "",
    image: "/images/task-tracker.png"
  }
];

export default projects;
