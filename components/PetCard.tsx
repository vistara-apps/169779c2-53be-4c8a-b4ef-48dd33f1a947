'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Heart, Zap, Clock, MoreVertical } from 'lucide-react';
import { Pet } from '../lib/types';
import { formatTimeAgo, getHappinessEmoji, getEnergyColor, cn } from '../lib/utils';
import { BotCommandButton } from './BotCommandButton';

interface PetCardProps {
  pet: Pet;
  variant?: 'default' | 'compact';
}

export function PetCard({ pet, variant = 'default' }: PetCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showActions, setShowActions] = useState(false);

  const handleAction = async (action: string) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setShowActions(false);
  };

  if (variant === 'compact') {
    return (
      <div className="bg-surface rounded-lg p-4 shadow-card pet-card-hover">
        <div className="flex items-center space-x-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={pet.imageUrl}
              alt={pet.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-gray-900 truncate">{pet.name}</h3>
            <p className="text-sm text-gray-600 truncate">{pet.personality}</p>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-lg">{getHappinessEmoji(pet.happiness)}</span>
            <span className="text-sm text-gray-500">{pet.happiness}%</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-lg shadow-card overflow-hidden pet-card-hover">
      {/* Pet Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10">
        <Image
          src={pet.imageUrl}
          alt={pet.name}
          fill
          className="object-cover"
          priority
        />
        <button
          onClick={() => setShowActions(!showActions)}
          className="absolute top-2 right-2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors duration-200"
        >
          <MoreVertical size={16} />
        </button>
      </div>

      {/* Pet Info */}
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900">{pet.name}</h3>
            <p className="text-sm text-gray-600">{pet.personality}</p>
          </div>
          <div className="text-2xl">{getHappinessEmoji(pet.happiness)}</div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Heart size={16} className="text-red-500" />
            <div>
              <div className="text-sm font-medium">Happiness</div>
              <div className="text-xs text-gray-600">{pet.happiness}%</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Zap size={16} className={cn('', getEnergyColor(pet.energy))} />
            <div>
              <div className="text-sm font-medium">Energy</div>
              <div className="text-xs text-gray-600">{pet.energy}%</div>
            </div>
          </div>
        </div>

        {/* Traits */}
        <div>
          <div className="text-sm font-medium mb-2">Traits</div>
          <div className="flex flex-wrap gap-1">
            {pet.traits.map((trait) => (
              <span
                key={trait}
                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>

        {/* Last Fed */}
        {pet.lastFed && (
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Clock size={14} />
            <span>Fed {formatTimeAgo(pet.lastFed)}</span>
          </div>
        )}

        {/* Action Buttons */}
        {showActions && (
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100">
            <BotCommandButton
              variant="primary"
              onClick={() => handleAction('feed')}
              disabled={isLoading}
            >
              🍎 Feed
            </BotCommandButton>
            <BotCommandButton
              variant="secondary"
              onClick={() => handleAction('play')}
              disabled={isLoading}
            >
              🎾 Play
            </BotCommandButton>
            <BotCommandButton
              variant="secondary"
              onClick={() => handleAction('clean')}
              disabled={isLoading}
            >
              🛁 Clean
            </BotCommandButton>
            <BotCommandButton
              variant="secondary"
              onClick={() => handleAction('train')}
              disabled={isLoading}
            >
              📚 Train
            </BotCommandButton>
          </div>
        )}

        {/* Backstory */}
        <div className="pt-2 border-t border-gray-100">
          <p className="text-sm text-gray-600 leading-relaxed">{pet.backstory}</p>
        </div>
      </div>
    </div>
  );
}
