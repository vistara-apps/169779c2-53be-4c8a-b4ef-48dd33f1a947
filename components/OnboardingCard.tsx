'use client';

import { useState } from 'react';
import { CheckCircle, Circle, ArrowRight } from 'lucide-react';

interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export function OnboardingCard() {
  const [steps, setSteps] = useState<OnboardingStep[]>([
    {
      id: '1',
      title: 'Profile & social features',
      description: 'Set up your profile to connect with other pet owners',
      completed: false,
    },
    {
      id: '2',
      title: 'Daily features',
      description: 'Learn about feeding, playing, and caring for your pet',
      completed: false,
    },
  ]);

  const [isExpanded, setIsExpanded] = useState(false);

  const handleStepComplete = (stepId: string) => {
    setSteps(prev => prev.map(step => 
      step.id === stepId ? { ...step, completed: !step.completed } : step
    ));
  };

  const completedSteps = steps.filter(step => step.completed).length;
  const totalSteps = steps.length;

  return (
    <div className="bg-surface rounded-lg p-6 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">Easy Onboarding</h2>
        <div className="text-sm text-gray-600">
          {completedSteps}/{totalSteps} completed
        </div>
      </div>

      <div className="space-y-3">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
            onClick={() => handleStepComplete(step.id)}
          >
            <button className="mt-0.5">
              {step.completed ? (
                <CheckCircle size={20} className="text-green-600" />
              ) : (
                <Circle size={20} className="text-gray-400" />
              )}
            </button>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-gray-900">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
            <ArrowRight size={16} className="text-gray-400 mt-1" />
          </div>
        ))}
      </div>

      {completedSteps === totalSteps && (
        <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
          <div className="flex items-center space-x-2">
            <CheckCircle size={16} className="text-green-600" />
            <span className="text-sm font-medium text-green-800">
              Onboarding Complete! 🎉
            </span>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full mt-4 bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition-colors duration-200"
      >
        Easy Onboarding
      </button>

      {isExpanded && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium mb-2">Getting Started Tips:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Fill out your profile to connect with other pet owners</li>
            <li>• Feed your pet daily to keep them happy and healthy</li>
            <li>• Participate in community challenges for rewards</li>
            <li>• Share your pet with friends to grow the community</li>
          </ul>
        </div>
      )}
    </div>
  );
}
