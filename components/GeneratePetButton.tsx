'use client';

import { useState } from 'react';
import { Sparkles, Loader2 } from 'lucide-react';
import { generatePetImage } from '../lib/ai';

export function GeneratePetButton() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPet, setGeneratedPet] = useState<string | null>(null);

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      // Simulate pet generation
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // In a real app, this would call the AI API
      const mockImageUrl = '/api/placeholder/300/300';
      setGeneratedPet(mockImageUrl);
    } catch (error) {
      console.error('Failed to generate pet:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-4">
      <button
        onClick={handleGenerate}
        disabled={isGenerating}
        className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        {isGenerating ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            <span>Generating your unique pet...</span>
          </>
        ) : (
          <>
            <Sparkles size={20} />
            <span>Generate My Pet</span>
          </>
        )}
      </button>

      {isGenerating && (
        <div className="text-center space-y-2">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-primary h-2 rounded-full animate-pulse w-3/4"></div>
          </div>
          <p className="text-sm text-gray-600">
            Creating your unique AI pet with special traits...
          </p>
        </div>
      )}

      {generatedPet && (
        <div className="text-center space-y-3">
          <div className="w-32 h-32 mx-auto rounded-lg bg-gray-100 flex items-center justify-center">
            <span className="text-4xl">🐱</span>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Your Pet is Ready!</h3>
            <p className="text-sm text-gray-600">Give your new companion a name</p>
          </div>
          <input
            type="text"
            placeholder="Enter pet name..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <button className="w-full bg-accent text-white py-2 rounded-lg hover:bg-accent-dark transition-colors duration-200">
            Adopt Pet
          </button>
        </div>
      )}
    </div>
  );
}
