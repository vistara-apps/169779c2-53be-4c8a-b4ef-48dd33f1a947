export interface User {
  userId: string;
  createdAt: string;
  lastActive: string;
  ownedPetIds: string[];
  username?: string;
  avatar?: string;
}

export interface Pet {
  id: string;
  ownerUserId: string;
  name: string;
  generationTimestamp: string;
  imageUrl: string;
  backstory: string;
  traits: string[];
  personality: string;
  cosmeticIds: string[];
  lastFed?: string;
  happiness: number;
  energy: number;
  level?: number;
}

export interface Cosmetic {
  id: string;
  name: string;
  imageUrl: string;
  type: 'accessory' | 'background' | 'effect';
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  price?: number;
}

export interface Challenge {
  id: string;
  name: string;
  description: string;
  startTimestamp: string;
  endTimestamp: string;
  type: 'community' | 'individual' | 'competitive';
  reward: string;
  progress?: number;
  total?: number;
  participants?: number;
}

export interface PetAction {
  type: 'feed' | 'play' | 'clean' | 'train';
  timestamp: string;
  petId: string;
  userId: string;
  result?: {
    happinessChange: number;
    energyChange: number;
    experienceGained?: number;
  };
}

export interface CommunityEvent {
  id: string;
  type: 'challenge_complete' | 'new_pet' | 'level_up' | 'achievement';
  title: string;
  description: string;
  timestamp: string;
  userId?: string;
  petId?: string;
  metadata?: Record<string, any>;
}
