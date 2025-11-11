Sticky Notes Board

A smart and interactive sticky notes app built with React, featuring auto-arranging notes, drag-and-drop movement, and collision detection to prevent overlap.

🚀 Features

✅ Smart Placement Algorithm — Each note automatically finds a free space without overlapping existing ones.
✅ Drag and Drop — Move notes freely around the board.
✅ Real-Time Position Tracking — Each note remembers its updated position after being dragged.
✅ Dynamic Creation — Instantly add new notes using the input box.
✅ No Overlap Guarantee — Notes never overlap, thanks to geometric collision detection.
✅ Clean UI — Simple and distraction-free layout for focusing on your notes.

🧠 Tech Stack
Category	Technology
Frontend	React.js (with Hooks & Functional Components)
Language	JavaScript (ES6+)
Styling	CSS
Logic	Custom collision detection and grid-based placement algorithm
🧩 Project Structure
📦 sticky-notes-board
├── src/
│   ├── components/
│   │   ├── Sticky_Notes.jsx      # Main component for managing notes
│   │   ├── Card.jsx              # Individual draggable note card
│   ├── utils.js                  # All helper functions (collision, space finding)
│   ├── assets/
│   │   └── sticky_note.png       # Sticky note background
│   ├── App.js                    # Root React component
│   └── index.js                  # Entry point
├── public/
│   └── index.html
├── package.json
└── README.md

⚙️ Installation & Setup

Follow these steps to run the project locally 👇

# Clone the repository
git clone https://github.com/<your-username>/sticky-notes-board.git

# Navigate into the folder
cd sticky-notes-board

# Install dependencies
npm install

# Start the development server
npm start


Your app will start on http://localhost:3000
 🌐

🧮 Core Logic Explained
🟨 1. Collision Detection

Each note is treated as a rectangle defined by {x, y, width, height}.
Before placing or moving a new note, it checks against all existing notes using:

function check_is_free(a, b) {
  // Returns true if rectangles 'a' and 'b' do not overlap
}

🟩 2. Free Space Finder

If no random location is free, a systematic grid scan finds the next available slot:

function check_if_free_space_available(occupied) {
  // Iterates row-by-row to find a free position
}

🎨 UI Preview
Action	Description
➕ Add Note	Type text and click Add
🎯 Auto-placement	Note finds a non-overlapping position
🖱️ Drag Note	Move notes anywhere (no collision allowed)

Each note behaves like a draggable sticky pinned on a board 🧷

🧑‍💻 Author

👤 Sambhav Jain
📧 sambhavjain8840@gmail.com

💼 Passionate MERN Stack Developer | React | Node.js | MongoDB

🌟 Future Improvements

🔹 Persistent storage using localStorage or MongoDB
🔹 Color themes for notes
🔹 Editable and deletable notes
🔹 Responsive layout for mobile devices

🏆 Contributing

Contributions are welcome!

Fork this repo

Create a new branch:

git checkout -b feature/your-feature-name


Commit your changes and push

Open a pull request 🚀

📜 License

This project is licensed under the MIT License – feel free to use and modify it.

✨ If you like this project, give it a ⭐ on GitHub — it motivates a lot!
