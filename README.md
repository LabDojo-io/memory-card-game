# 🖼️ LabDojo Study Memory Game

A modern, responsive memory card game built with React, TypeScript, and Vite. Test your memory skills with beautiful landscape images across multiple difficulty levels.

## 🎮 Live Demo

**[Play Now →](https://labdojo-io.github.io/memory-card-game/)**

## ✨ Features

- 🧠 **4 Difficulty Levels** - 20, 30, 50, and 100 cards
- ⏱️ **Timer Tracking** - See how fast you can complete each game
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile
- 🎨 **Beautiful UI** - Smooth card flip animations and modern design
- 🖼️ **100 Unique Images** - Curated landscape photography from Picsum Photos
- 🏆 **Victory Screen** - Track your performance with time and move statistics
- 🎯 **Single Player** - Perfect for quick brain training sessions

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/labdojo-io/memory-card-game.git
cd memory-card-game

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Build the application
npm run build

# Preview the build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## 🎯 How to Play

1. **Choose Difficulty** - Select your preferred board size (20-100 cards)
2. **Start Game** - Click "New Game" to begin
3. **Find Pairs** - Click cards to reveal images and find matching pairs
4. **Beat Your Time** - Complete the game as quickly as possible
5. **View Results** - Check your completion time and total moves

## 🛠️ Technology Stack

- **Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** CSS Modules
- **Images:** Picsum Photos API
- **Deployment:** GitHub Pages
- **Package Manager:** npm

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Card.tsx        # Individual memory card
│   ├── GameBoard.tsx   # Game grid layout
│   ├── GameSettings.tsx # Difficulty selector
│   ├── Timer.tsx       # Game timer
│   └── VictoryScreen.tsx # End game screen
├── hooks/              # Custom React hooks
│   ├── useGameState.ts # Game logic management
│   └── useTimer.ts     # Timer functionality
├── utils/              # Utility functions
│   ├── gameImages.ts   # Image data management
│   └── gameLogic.ts    # Core game algorithms
├── types/              # TypeScript definitions
│   └── game.ts         # Game interfaces
├── styles/             # CSS modules
│   ├── global.css      # Global styles
│   └── [Component].module.css # Component styles
└── App.tsx             # Main application
```

## 🎮 Game Mechanics

### Difficulty Levels
- **Beginner (20 cards)** - 4×5 grid, perfect for quick games
- **Intermediate (30 cards)** - 5×6 grid, moderate challenge
- **Advanced (50 cards)** - 7×8 grid (5×10 on mobile), serious challenge  
- **Expert (100 cards)** - 10×10 grid (8×13 on mobile), ultimate test

### Scoring System
- **Time Tracking** - Precision timer from game start to completion
- **Move Counter** - Track total card flips for efficiency scoring
- **Performance Metrics** - Displayed on victory screen

## 🎨 Design Features

- **Card Flip Animation** - Smooth 3D CSS transforms
- **Responsive Grids** - Adaptive layouts for all screen sizes
- **Modern UI** - Clean, professional interface with LabDojo branding
- **Visual Feedback** - Hover effects and interactive states
- **Accessibility** - Keyboard navigation and screen reader support

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using the `gh-pages` package.

```bash
# Deploy to GitHub Pages
npm run deploy
```

The game is hosted at: [https://labdojo-io.github.io/memory-card-game/](https://labdojo-io.github.io/memory-card-game/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🏢 About LabDojo Study

Built with ❤️ by the LabDojo Study team as part of our commitment to creating engaging educational tools and interactive experiences.

---

**[🎮 Play the Game](https://labdojo-io.github.io/memory-card-game/) | [📋 View Prompts](prompts.md) | [⭐ Star on GitHub](https://github.com/labdojo-io/memory-card-game)**

