# Aether Pets - AI Pet Community

A Next.js Base Mini App where users generate, care for, and socialize with unique AI-generated virtual pets within a community-driven ecosystem.

## Features

- **Unique AI Pet Generation**: Create one-of-a-kind virtual pets using AI
- **Community Challenges**: Participate in group tasks and competitions
- **Social Pet Features**: Showcase pets, trade, and connect with other owners
- **Daily Care System**: Feed, play, clean, and train your pets
- **Base Network Integration**: Pets bonded to the Base blockchain

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Blockchain**: Base Network via MiniKit
- **AI**: OpenAI/OpenRouter for pet generation
- **TypeScript**: Full type safety
- **Components**: OnchainKit integration

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aether-pets
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your API keys:
   - `NEXT_PUBLIC_MINIKIT_API_KEY`: Your MiniKit API key
   - `NEXT_PUBLIC_ONCHAINKIT_API_KEY`: Your OnchainKit API key
   - `OPENAI_API_KEY`: Your OpenAI API key for pet generation

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   ├── providers.tsx      # MiniKit & OnchainKit providers
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── Navigation.tsx     # App navigation
│   ├── PetCard.tsx        # Pet display component
│   ├── CommunityFeed.tsx  # Community challenges
│   └── ...
├── lib/                   # Utilities and types
│   ├── types.ts          # TypeScript interfaces
│   ├── utils.ts          # Helper functions
│   ├── constants.ts      # App constants
│   └── ai.ts             # AI integration
└── public/               # Static assets
```

## Key Components

### PetCard
Displays pet information, stats, and interaction buttons. Supports both default and compact variants.

### CommunityFeed
Shows active community challenges with progress tracking and participation options.

### GeneratePetButton
Handles AI pet generation with loading states and user feedback.

### Navigation
Mobile-first navigation with bottom tab bar and collapsible menu.

## AI Integration

The app uses OpenAI's API (or OpenRouter) to generate:
- Unique pet images based on traits
- Creative backstories for each pet
- Personalized pet characteristics

## Base Network Features

- MiniKit integration for seamless Base network connectivity
- OnchainKit components for wallet interactions
- Future NFT support for pet ownership

## Design System

- **Colors**: Purple primary (#8B5CF6), Cyan accent (#06B6D4)
- **Typography**: System fonts with clear hierarchy
- **Spacing**: Consistent 8px grid system
- **Components**: Mobile-first, accessible design

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
