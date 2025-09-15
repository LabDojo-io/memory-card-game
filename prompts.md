# Memory Game Development Prompts - Step-by-Step Guide

This document contains the complete sequence of prompts used to develop the LabDojo Study Memory Game. Each prompt is explained with its purpose and expected outcome, allowing anyone to replicate this project from scratch.

## 🎯 Purpose
This guide serves as a comprehensive blueprint for creating a React-based memory card game. Follow these prompts in order with an AI assistant to build the complete application.

---

## **Prompt 1: Initial Project Concept & Framework Selection**
```
i want to create a frontend only memory card game to play as a single player with timer that counts how long it takes me to find all cards, i want multiple "sizes" of board (20 cards, 30 cards, 50 cards etc), cards images should be anime characters make sure you wont have duplicate of the same character exact image, before implementing the game lets talk about it a bit, what would you suggest to do? what is the best solution? framework?
```

**Purpose:** 
- Define the project requirements and scope
- Get AI recommendation for the best framework and architecture
- Establish technical foundation before implementation

**Expected Outcome:** 
- Discussion of framework options (React vs Vue vs vanilla JS)
- Recommendation for React + Vite + TypeScript
- Initial architecture planning

---

## **Prompt 2: Create Development Plan**
```
great job, lets go with react + vite, please create a bootstrap manual (plan.md) that describes step by step how to create the application
```

**Purpose:** 
- Generate a comprehensive step-by-step implementation guide
- Create a structured roadmap for development
- Document the planned architecture and component structure

**Expected Outcome:** 
- Creation of `plan.md` with 20+ detailed steps
- Component architecture definition
- Project structure planning

---

## **Prompt 3: Handle Dependencies Manually**
```
great job! now lets start implementing the application following our manual @plan.md , if dependencies are needed do not try to install them, instead add them to package.json and i will install it manually
```

**Purpose:** 
- Start the actual code implementation
- Follow the previously created development plan
- Begin building the core game structure
- Clarify dependency management workflow
- Prevent AI from trying to run npm install commands
- Ensure manual control over package installation

**Expected Outcome:** 
- Initial project setup attempts
- Basic file structure creation
- AI adds dependencies to package.json instead of installing
- Continues with implementation planning

---

## **Prompt 4: Confirm Project Initialization**
```
i ran manually "npm create vite@latest . -- --template react-ts" and "npm install", continue
```

**Purpose:** 
- Confirm the Vite + React TypeScript project is set up
- Signal that basic dependencies are installed
- Resume implementation from where AI left off

**Expected Outcome:** 
- AI continues with creating project structure
- Begins implementing game components

---

## **Prompt 6: Resolve File Permission Issues**
```
i see you encounter error creating folders in @src/ , lets try again ive changed the owner
```

**Purpose:** 
- Address file system permission problems
- Allow AI to retry file creation operations
- Resolve technical blockers preventing implementation

**Expected Outcome:** 
- AI successfully creates folders and files in src/
- Implementation proceeds without permission errors

---

## **Prompt 7: Confirm Basic Setup Works**
```
i ran "npm install" site seems to be working i see the default vite + react page, lets continue following @plan.md
```

**Purpose:** 
- Verify the development server is running correctly
- Confirm the basic Vite + React setup is functional
- Signal readiness to continue with game implementation

**Expected Outcome:** 
- AI continues implementing game components
- Builds upon the working Vite foundation

---

## **Prompt 8: Debug Image Loading Issues**
```
great now game seems to work but images do not show up, i see white blocks
```

**Purpose:** 
- Report a critical visual bug in the game
- Request debugging of image loading functionality
- Identify that cards are not displaying images properly

**Expected Outcome:** 
- AI investigates image URL generation
- Debugging of image loading logic
- Attempts to fix broken image sources

---

## **Prompt 9: Continue Image Debugging**
```
lets try again to search for the images
```

**Purpose:** 
- Request another attempt at fixing image loading
- Implies the previous fix didn't work
- Ask for alternative image source solutions

**Expected Outcome:** 
- AI tries different image sources or APIs
- Implementation of fallback image strategies

---

## **Prompt 10: Image URLs Fixed But Still Not Displaying**
```
now image url is correct but i still dont see the images
```

**Purpose:** 
- Clarify that URLs are now valid but images still don't render
- Indicate the problem might be in CSS or image loading logic
- Request deeper investigation into rendering issues

**Expected Outcome:** 
- AI investigates CSS styling issues
- Checks image loading attributes and error handling
- Debug rendering pipeline

---

## **Prompt 11: Card Size Issues**
```
cards are not big enough, when clicking on them they "open" but i see blank instead of image
```

**Purpose:** 
- Report both sizing and image display problems
- Clarify that card flip animations work but content is missing
- Request both visual and functional improvements

**Expected Outcome:** 
- AI increases card dimensions
- Fixes image display within cards
- Improves overall visual layout

---

## **Prompt 12: Game Board Size Problem**
```
it seems like the game board itself is too small
```

**Purpose:** 
- Identify layout constraint issues beyond individual cards
- Request investigation into overall game board sizing
- Signal that the entire game area needs to be larger

**Expected Outcome:** 
- AI examines CSS layout for the game board container
- Attempts to increase overall game area size

---

## **Prompt 13: Specific CSS Issue Identified**
```
i see the problem, ".app-content" size is half the screen for some reason
```

**Purpose:** 
- Provide specific debugging information
- Point AI to the exact CSS class causing layout issues
- Help narrow down the root cause of sizing problems

**Expected Outcome:** 
- AI fixes the .app-content CSS styling
- Resolves width constraints on the game area

---

## **Prompt 14: Request Deep Debugging**
```
still only fixed to the size of half the width of the page, why is that? deep dive please and fix
```

**Purpose:** 
- Indicate the previous fix didn't fully resolve the issue
- Request comprehensive CSS debugging approach
- Ask for systematic investigation of layout hierarchy

**Expected Outcome:** 
- AI performs deep CSS analysis through DOM hierarchy
- Identifies and fixes root layout constraints
- Traces through all parent container styling

---

## **Prompt 15: Switch to Pre-defined Images**
```
great job! now do not use random characters at runtime, instead lets create total of 100 images and then randomly choose the required amount, char name is irrelevant anymore and we are actually using landscape images
```

**Purpose:** 
- Change from anime characters to landscape images
- Optimize performance by pre-defining image set
- Remove runtime randomization in favor of deterministic selection
- Scale up to support larger game boards

**Expected Outcome:** 
- AI creates array of 100 pre-defined landscape images
- Removes character name references
- Implements deterministic image selection

---

## **Prompt 16: Update Game Branding**
```
great job! now lets fix the title and description of the game as it is no longer anime memory game but landscape memory game, or just a memory game
```

**Purpose:** 
- Update UI text to reflect the theme change
- Remove anime-specific branding and descriptions
- Make the game more generic and broadly appealing

**Expected Outcome:** 
- AI updates game title and descriptions
- Changes UI text from "Anime Memory Game" to "Memory Game"
- Updates emoji and visual branding

---

## **Prompt 17: Redesign Settings Layout**
```
great job! now lets change the game settings block to be a bar instead of the current block
```

**Purpose:** 
- Improve UI layout by making settings horizontal
- Better utilize screen space
- Create more modern, streamlined interface

**Expected Outcome:** 
- AI converts vertical settings block to horizontal bar
- Improves CSS layout for settings controls
- Better visual hierarchy and space utilization

---

## **Prompt 18: Add Expert Difficulty**
```
great! now lets add option for 100 cards
```

**Purpose:** 
- Add the highest difficulty level using all available images
- Provide expert-level challenge for advanced players
- Utilize the full set of 100 pre-defined images

**Expected Outcome:** 
- AI adds 100-card option to game settings
- Updates TypeScript types and grid layouts
- Implements responsive design for 10x10 grid

---

## **Prompt 19: Choose Hosting Platform**
```
great job! now i want to deploy my service to a free hosting location, as my service is frontend only what would you suggest?
```

**Purpose:** 
- Get recommendations for free static hosting services
- Plan deployment strategy for the completed game
- Evaluate hosting options for frontend-only applications

**Expected Outcome:** 
- AI suggests options like Vercel, Netlify, GitHub Pages
- Comparison of features and ease of deployment
- Recommendation based on project needs

---

## **Prompt 20: Implement GitHub Pages Deployment**
```
github pages sounds great! how would we do it?
```

**Purpose:** 
- Request specific implementation steps for GitHub Pages
- Get detailed deployment configuration instructions
- Set up automated deployment workflow

**Expected Outcome:** 
- AI adds gh-pages package and configuration
- Sets up package.json scripts for deployment
- Configures Vite for proper asset paths

---

## **Prompt 21: Final Production Polish**
```
great job! now i want to change the browser tab title of the website to "LabDojo Study Memory Game", i want the browser tab icon to be @public/LabDojo-logo-transparent.png and i want you to remove the redundant logs of the image loading
```

**Purpose:** 
- Apply final branding and professional polish
- Clean up development artifacts (console logs)
- Prepare for production deployment
- Add custom favicon and title

**Expected Outcome:** 
- AI updates index.html with custom title and favicon
- Removes console.log statements from code
- Final production-ready cleanup

---

## 🎯 Replication Instructions

1. **Use these prompts in exact order** with an AI assistant capable of code generation
2. **Execute suggested commands** when the AI provides npm/git commands
3. **Test at each stage** to verify functionality before proceeding
4. **Provide feedback** when something doesn't work as expected
5. **Follow up** with clarifying prompts when needed

## 📋 Expected Final Result

By following all prompts, you should have:
- ✅ Fully functional memory card game
- ✅ 4 difficulty levels (20, 30, 50, 100 cards)
- ✅ Professional UI with smooth animations
- ✅ Deployed to GitHub Pages
- ✅ Custom branding and favicon
- ✅ Clean, production-ready codebase

---

**Total Development Time:** ~2-3 hours following all prompts
**Final Repository:** Complete React + TypeScript + Vite memory game
**Live Demo:** Deployed on GitHub Pages with custom domain

