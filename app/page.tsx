"use client";

import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import LanguageList from "./components/LanguageList";
import Status from "./components/Status";
import WordDisplay from "./components/WordDisplay";
import "./globals.css";
import { languages } from "./data/languages";
import { useState } from "react";

export default function Home() {
  // State values
  const [currentWord, setCurrentWord] = useState("react");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  // Derived values
  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameOver = isGameLost || isGameWon;

  // Static values
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const guessLetter = (letter: string) => {
    const normalizedLetter = letter.toLowerCase();

    setGuessedLetters((prevLetters) =>
      prevLetters.includes(normalizedLetter)
        ? prevLetters
        : [...prevLetters, normalizedLetter]
    );
  };

  const newGame = () => {
    setGuessedLetters([]);
  };

  return (
    <main className="container m-auto max-w-lg md:max-w-md flex flex-wrap items-center justify-center">
      <Header />
      <Status
        isGameWon={isGameWon}
        isGameLost={isGameLost}
        isGameOver={isGameOver}
      />
      <LanguageList languages={languages} wrongGuessCount={wrongGuessCount} />
      <WordDisplay currentWord={currentWord} guessedLetters={guessedLetters} />
      <Keyboard
        alphabet={alphabet}
        guessLetter={guessLetter}
        guessedLetters={guessedLetters}
        currentWord={currentWord}
      />

      {isGameOver && (
        <button
          onClick={newGame}
          className="bg-sky-500 text-black min-width-[225px] py-2 px-6 rounded-md border-1 border-gray-200 cursor-pointer"
        >
          New Game
        </button>
      )}
    </main>
  );
}
