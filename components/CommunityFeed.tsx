'use client';

import { useState } from 'react';
import { Users, Trophy, Clock, ChevronRight } from 'lucide-react';
import { Challenge } from '../lib/types';
import { formatTimeRemaining, cn } from '../lib/utils';

interface CommunityFeedProps {
  challenges: Challenge[];
  variant?: 'updates' | 'challenges';
}

export function CommunityFeed({ challenges, variant = 'challenges' }: CommunityFeedProps) {
  const [selectedChallenge, setSelectedChallenge] = useState<string | null>(null);

  const handleJoinChallenge = async (challengeId: string) => {
    // Simulate joining challenge
    console.log('Joining challenge:', challengeId);
  };

  return (
    <div className="space-y-4">
      {challenges.map((challenge) => (
        <div
          key={challenge.id}
          className="bg-surface rounded-lg p-4 shadow-card hover:shadow-lg transition-shadow duration-200"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                {challenge.type === 'community' ? (
                  <Users size={16} className="text-primary" />
                ) : (
                  <Trophy size={16} className="text-primary" />
                )}
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{challenge.name}</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock size={12} />
                  <span>{formatTimeRemaining(challenge.endTimestamp)}</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setSelectedChallenge(
                selectedChallenge === challenge.id ? null : challenge.id
              )}
              className="p-1 hover:bg-gray-100 rounded transition-colors duration-200"
            >
              <ChevronRight
                size={16}
                className={cn(
                  'transition-transform duration-200',
                  selectedChallenge === challenge.id && 'rotate-90'
                )}
              />
            </button>
          </div>

          <p className="text-sm text-gray-600 mb-3">{challenge.description}</p>

          {/* Progress Bar */}
          {challenge.progress !== undefined && challenge.total && (
            <div className="mb-3">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium">
                  {challenge.progress}/{challenge.total}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${Math.min((challenge.progress / challenge.total) * 100, 100)}%`,
                  }}
                />
              </div>
            </div>
          )}

          {/* Reward */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Trophy size={14} className="text-yellow-500" />
              <span className="text-sm text-gray-600">{challenge.reward}</span>
            </div>
            
            {selectedChallenge === challenge.id && (
              <button
                onClick={() => handleJoinChallenge(challenge.id)}
                className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-dark transition-colors duration-200"
              >
                Join Challenge
              </button>
            )}
          </div>

          {/* Expanded Details */}
          {selectedChallenge === challenge.id && (
            <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
              <div className="text-sm">
                <span className="font-medium">Type:</span>{' '}
                <span className="capitalize text-gray-600">{challenge.type}</span>
              </div>
              {challenge.participants && (
                <div className="text-sm">
                  <span className="font-medium">Participants:</span>{' '}
                  <span className="text-gray-600">{challenge.participants}</span>
                </div>
              )}
              <div className="text-sm">
                <span className="font-medium">Ends:</span>{' '}
                <span className="text-gray-600">
                  {new Date(challenge.endTimestamp).toLocaleDateString()}
                </span>
              </div>
            </div>
          )}
        </div>
      ))}

      {challenges.length === 0 && (
        <div className="text-center py-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
            <Users size={24} className="text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Active Challenges</h3>
          <p className="text-gray-600">Check back later for new community challenges!</p>
        </div>
      )}
    </div>
  );
}
