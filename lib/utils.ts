import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTimeAgo(timestamp: string): string {
  const now = new Date();
  const time = new Date(timestamp);
  const diffInSeconds = Math.floor((now.getTime() - time.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return 'just now';
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes}m ago`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours}h ago`;
  } else {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days}d ago`;
  }
}

export function formatTimeRemaining(endTime: string): string {
  const now = new Date();
  const end = new Date(endTime);
  const diffInSeconds = Math.floor((end.getTime() - now.getTime()) / 1000);

  if (diffInSeconds <= 0) {
    return 'Ended';
  }

  if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes}m left`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours}h left`;
  } else {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days}d left`;
  }
}

export function getHappinessEmoji(happiness: number): string {
  if (happiness >= 80) return '😊';
  if (happiness >= 60) return '🙂';
  if (happiness >= 40) return '😐';
  if (happiness >= 20) return '😕';
  return '😢';
}

export function getEnergyColor(energy: number): string {
  if (energy >= 80) return 'text-green-600';
  if (energy >= 60) return 'text-yellow-600';
  if (energy >= 40) return 'text-orange-600';
  return 'text-red-600';
}

export function generatePetPrompt(traits: string[]): string {
  const basePrompt = 'A cute, friendly virtual pet with';
  const traitDescriptions = traits.map(trait => {
    switch (trait.toLowerCase()) {
      case 'playful': return 'playful and energetic features';
      case 'curious': return 'bright, inquisitive eyes';
      case 'friendly': return 'a warm, welcoming expression';
      case 'adventurous': return 'an adventurous spirit in its pose';
      case 'calm': return 'serene and peaceful demeanor';
      case 'mischievous': return 'a hint of mischief in its expression';
      default: return `${trait.toLowerCase()} characteristics`;
    }
  });
  
  return `${basePrompt} ${traitDescriptions.join(', ')}. Digital art style, colorful, high quality, suitable for a virtual pet game.`;
}
