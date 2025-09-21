export const PET_TRAITS = [
  'Playful',
  'Curious',
  'Friendly',
  'Adventurous',
  'Calm',
  'Mischievous',
  'Loyal',
  'Energetic',
  'Gentle',
  'Brave',
] as const;

export const PET_PERSONALITIES = [
  'Adventurous',
  'Gentle',
  'Playful',
  'Mysterious',
  'Cheerful',
  'Wise',
  'Energetic',
  'Calm',
] as const;

export const CHALLENGE_TYPES = {
  COMMUNITY: 'community',
  INDIVIDUAL: 'individual',
  COMPETITIVE: 'competitive',
} as const;

export const PET_ACTIONS = {
  FEED: 'feed',
  PLAY: 'play',
  CLEAN: 'clean',
  TRAIN: 'train',
} as const;

export const ACTION_EFFECTS = {
  [PET_ACTIONS.FEED]: {
    happiness: 10,
    energy: 15,
    description: 'Your pet feels nourished and happy!',
  },
  [PET_ACTIONS.PLAY]: {
    happiness: 15,
    energy: -5,
    description: 'Your pet had a great time playing!',
  },
  [PET_ACTIONS.CLEAN]: {
    happiness: 5,
    energy: 5,
    description: 'Your pet feels fresh and clean!',
  },
  [PET_ACTIONS.TRAIN]: {
    happiness: 5,
    energy: -10,
    description: 'Your pet learned something new!',
  },
} as const;

export const COSMETIC_TYPES = {
  ACCESSORY: 'accessory',
  BACKGROUND: 'background',
  EFFECT: 'effect',
} as const;

export const RARITY_COLORS = {
  common: 'text-gray-600',
  rare: 'text-blue-600',
  epic: 'text-purple-600',
  legendary: 'text-yellow-600',
} as const;
