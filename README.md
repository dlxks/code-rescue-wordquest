# WordQuest - Code Rescue Edition 🎯

A fun and educational word guessing game built with Next.js and TypeScript, where players guess programming-related words while learning about different programming languages.

## 🎮 Game Overview

WordQuest is a hangman-style word guessing game with a programming twist. Players must guess words related to programming concepts while learning about different programming languages. Each incorrect guess reveals a new programming language, making it both challenging and educational.

## ✨ Features

- **Interactive Gameplay**: Classic hangman mechanics with a modern web interface
- **Programming Focus**: All words are related to programming and web development
- **Language Learning**: Discover 9 different programming languages as you play
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Accessibility**: Built with screen readers and keyboard navigation in mind
- **Visual Feedback**: Color-coded keyboard and clear game state indicators
- **Restart Functionality**: Start a new game at any time

## 🚀 Tech Stack

- **Frontend**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS v4
- **State Management**: React Hooks (useState, useEffect)
- **Icons**: Iconify for consistent iconography
- **Animations**: React Confetti for celebration effects
- **Linting**: ESLint with Next.js configuration

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd code-rescue-wordquest
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 How to Play

1. **Start a New Game**: A random programming-related word is selected
2. **Make Guesses**: Click letters on the virtual keyboard or use your physical keyboard
3. **Track Progress**: 
   - Correct letters are revealed in the word
   - Incorrect letters are tracked and displayed
   - Each wrong guess reveals a new programming language
4. **Win or Lose**: 
   - Win by guessing all letters in the word
   - Lose after 8 incorrect guesses (revealing all 9 languages)

## 📁 Project Structure

```
code-rescue-wordquest/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── Keyboard.tsx
│   │   ├── LanguageList.tsx
│   │   ├── Status.tsx
│   │   ├── WordDisplay.tsx
│   │   └── ...
│   ├── data/               # Game data and utilities
│   │   ├── languages.ts    # Programming languages data
│   │   ├── words.ts        # Word database
│   │   └── utils.ts        # Helper functions
│   ├── types/              # TypeScript type definitions
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Main game page
├── public/                 # Static assets
├── next.config.ts          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🧩 Components

- **Header**: Game title and branding
- **Status**: Displays game state, win/lose messages, and farewell text
- **LanguageList**: Shows programming languages revealed by incorrect guesses
- **WordDisplay**: Shows the current word with guessed letters revealed
- **Keyboard**: Interactive virtual keyboard with letter state indicators

## 🎨 Customization

### Adding New Words
Edit `app/data/words.ts` to add more programming-related words:
```typescript
export const words = [
  "your",
  "new",
  "words",
  "here",
  // ... more words
];
```

### Adding New Languages
Edit `app/data/languages.ts` to add more programming languages:
```typescript
{
  name: "YourLanguage",
  backgroundColor: "#HEXCODE",
  color: "#HEXCODE",
}
```

## 🚀 Deployment

### Vercel (Recommended)
The easiest way to deploy is using Vercel:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms
This Next.js app can be deployed to any platform that supports Node.js:

```bash
npm run build
npm start
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/) and the amazing React ecosystem
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Iconify](https://iconify.design/)
- Word list inspired by programming vocabulary and concepts

---

Made with ❤️ by Tristan Sangangbayan
