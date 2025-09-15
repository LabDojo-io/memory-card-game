export interface GameImage {
  id: string;
  imageUrl: string;
}

// 100 pre-defined landscape images using different seeds
export const gameImages: GameImage[] = Array.from({ length: 100 }, (_, index) => ({
  id: `img-${index + 1}`,
  imageUrl: `https://picsum.photos/seed/landscape${index + 1}/200/150`,
}));

// Function to get deterministic selection of images for a specific board size
export const getGameImages = (boardSize: number): GameImage[] => {
  const pairsNeeded = boardSize / 2;
  
  // Use deterministic selection instead of random - always pick the first N images
  // This ensures consistent game experience across sessions
  return gameImages.slice(0, pairsNeeded);
};