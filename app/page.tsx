import { Suspense } from 'react';
import { Navigation } from '../components/Navigation';
import { PetCard } from '../components/PetCard';
import { CommunityFeed } from '../components/CommunityFeed';
import { OnboardingCard } from '../components/OnboardingCard';
import { GeneratePetButton } from '../components/GeneratePetButton';

// Mock data for demonstration
const mockPet = {
  id: '1',
  ownerUserId: 'user123',
  name: 'Whiskers',
  generationTimestamp: new Date().toISOString(),
  imageUrl: '/api/placeholder/300/300',
  backstory: 'A curious kitten who loves exploring the digital realm.',
  traits: ['Playful', 'Curious', 'Friendly'],
  personality: 'Adventurous',
  cosmeticIds: [],
  lastFed: new Date().toISOString(),
  happiness: 85,
  energy: 70,
};

const mockChallenges = [
  {
    id: '1',
    name: 'Community Feeding',
    description: 'Help feed 1000 pets together!',
    startTimestamp: new Date().toISOString(),
    endTimestamp: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    type: 'community' as const,
    reward: 'Special treat for all participants',
    progress: 750,
    total: 1000,
  },
  {
    id: '2',
    name: 'Pet Show Contest',
    description: 'Show off your cutest pet!',
    startTimestamp: new Date().toISOString(),
    endTimestamp: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    type: 'competitive' as const,
    reward: 'Winner gets exclusive cosmetics',
    progress: 45,
    total: 100,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-xl mx-auto px-4 py-6 space-y-6">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome to Aether Pets
          </h1>
          <p className="text-gray-600 leading-6">
            Breed and nurture unique AI pets bonded to the Base network.
          </p>
        </div>

        {/* Onboarding Card */}
        <OnboardingCard />

        {/* Generate Pet Section */}
        <div className="bg-surface rounded-lg p-6 shadow-card">
          <h2 className="text-xl font-bold mb-4">Create Your First Pet</h2>
          <p className="text-gray-600 mb-4">
            Generate a unique AI pet with its own personality and traits.
          </p>
          <GeneratePetButton />
        </div>

        {/* Pet Card */}
        <Suspense fallback={<div className="animate-pulse bg-surface rounded-lg h-64"></div>}>
          <PetCard pet={mockPet} />
        </Suspense>

        {/* Community Feed */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Community Challenges</h2>
          <CommunityFeed challenges={mockChallenges} />
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-primary text-white p-4 rounded-lg hover:bg-primary-dark transition-colors duration-200">
            <div className="text-2xl mb-2">🎮</div>
            <div className="font-medium">Play Games</div>
          </button>
          <button className="bg-accent text-white p-4 rounded-lg hover:bg-accent-dark transition-colors duration-200">
            <div className="text-2xl mb-2">🏆</div>
            <div className="font-medium">Leaderboards</div>
          </button>
        </div>
      </main>
    </div>
  );
}
