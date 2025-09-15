# Memory Card Game - Bootstrap Manual

## Project Overview
A single-player memory card game featuring anime characters with multiple board sizes and timer functionality.

## Tech Stack
- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS Modules or Styled Components
- **State Management**: React hooks (useState, useReducer)

## Step-by-Step Implementation Plan

### Phase 1: Project Setup
1. **Initialize Vite + React Project**
   ```bash
   npm create vite@latest memory-card-game -- --template react-ts
   cd memory-card-game
   npm install
   ```

2. **Install Additional Dependencies**
   ```bash
   npm install lucide-react  # For icons
   ```

3. **Project Structure Setup**
   ```
   src/
   ├── components/
   │   ├── GameBoard.tsx
   │   ├── Card.tsx
   │   ├── Timer.tsx
   │   ├── GameSettings.tsx
   │   └── VictoryScreen.tsx
   ├── hooks/
   │   ├── useGameState.ts
   │   └── useTimer.ts
   ├── utils/
   │   ├── gameLogic.ts
   │   └── animeImages.ts
   ├── types/
   │   └── game.ts
   └── styles/
       ├── GameBoard.module.css
       ├── Card.module.css
       └── global.css
   ```

### Phase 2: Core Data Types & Utilities

4. **Define TypeScript Interfaces** (`src/types/game.ts`)
   ```typescript
   export interface Card {
     id: string;
     imageUrl: string;
     characterName: string;
     isFlipped: boolean;
     isMatched: boolean;
   }

   export interface GameState {
     cards: Card[];
     flippedCards: Card[];
     matchedPairs: number;
     moves: number;
     gameStatus: 'idle' | 'playing' | 'completed';
     boardSize: number;
   }

   export type BoardSize = 20 | 30 | 50;
   ```

5. **Create Anime Images Dataset** (`src/utils/animeImages.ts`)
   - Curated list of anime character images
   - Ensure no duplicates
   - Include character names
   - Consider using placeholder service initially

6. **Game Logic Utilities** (`src/utils/gameLogic.ts`)
   ```typescript
   // Functions for:
   // - shuffleCards()
   // - createCardPairs()
   // - checkMatch()
   // - isGameComplete()
   ```

### Phase 3: Custom Hooks

7. **Timer Hook** (`src/hooks/useTimer.ts`)
   ```typescript
   // Features:
   // - Start/stop/reset functionality
   // - Format time display (MM:SS)
   // - Auto-start when game begins
   ```

8. **Game State Hook** (`src/hooks/useGameState.ts`)
   ```typescript
   // Manage:
   // - Card flipping logic
   // - Match detection
   // - Game completion
   // - Board size changes
   ```

### Phase 4: Core Components

9. **Card Component** (`src/components/Card.tsx`)
   ```typescript
   // Features:
   // - Flip animation
   // - Click handler
   // - Disabled state for matched cards
   // - Responsive sizing
   ```

10. **Game Board Component** (`src/components/GameBoard.tsx`)
    ```typescript
    // Features:
    // - Dynamic grid layout based on board size
    // - Responsive design
    // - Card positioning
    ```

11. **Timer Component** (`src/components/Timer.tsx`)
    ```typescript
    // Features:
    // - Display current time
    // - Start/pause functionality
    // - Format: MM:SS
    ```

### Phase 5: Game Features

12. **Game Settings Component** (`src/components/GameSettings.tsx`)
    ```typescript
    // Features:
    // - Board size selector (20, 30, 50 cards)
    // - New game button
    // - Best times display (optional)
    ```

13. **Victory Screen Component** (`src/components/VictoryScreen.tsx`)
    ```typescript
    // Features:
    // - Completion message
    // - Final time display
    // - Play again button
    // - Share functionality (optional)
    ```

### Phase 6: Styling & Animations

14. **CSS Modules Setup**
    - Card flip animations (3D transform)
    - Responsive grid layouts
    - Hover effects
    - Victory celebrations

15. **Responsive Design**
    ```css
    /* Breakpoints for different screen sizes */
    /* Mobile: 2-3 columns */
    /* Tablet: 4-5 columns */
    /* Desktop: 5-7 columns */
    ```

### Phase 7: Game Logic Integration

16. **Main App Component** (`src/App.tsx`)
    ```typescript
    // Integrate all components
    // Handle game state transitions
    // Route between game/settings/victory screens
    ```

17. **Game Flow Implementation**
    - Start screen → Game settings
    - Settings → Active game
    - Game completion → Victory screen
    - Reset functionality

### Phase 8: Polish & Optimization

18. **Performance Optimization**
    - Memoize components with React.memo
    - Optimize re-renders
    - Image lazy loading

19. **Additional Features** (Optional)
    - Sound effects
    - Local storage for best times
    - Multiple themes
    - Difficulty levels

20. **Testing & Debugging**
    - Manual testing of all board sizes
    - Edge case handling
    - Mobile responsiveness testing

## Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Key Implementation Notes

### Card Matching Logic
- Allow maximum 2 cards flipped simultaneously
- 500ms delay before hiding non-matching cards
- Disable clicking during evaluation period

### Board Size Calculations
- 20 cards = 10 pairs (4x5 or 5x4 grid)
- 30 cards = 15 pairs (5x6 or 6x5 grid)
- 50 cards = 25 pairs (7x7 with 1 empty slot, or 5x10)

### Image Management
- Use consistent aspect ratios
- Implement loading states
- Handle failed image loads with placeholders

### Timer Implementation
- Start when first card is clicked
- Pause when game is completed
- Reset when new game starts

## Next Steps
1. Run through Phase 1-2 setup
2. Create basic components structure
3. Implement core game mechanics
4. Add styling and animations
5. Test across different devices
6. Polish and optimize

This manual provides a comprehensive roadmap for building your memory card game. Each phase builds upon the previous one, ensuring a solid foundation before adding complexity.