"use client";

import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import LanguageList from "./components/LanguageList";
import Status from "./components/Status";
import WordDisplay from "./components/WordDisplay";
import "./globals.css";
import { languages } from "./data/languages";
import { useState } from "react";
import { getFarewellText, getRandomWord } from "./data/utils";

export default function Home() {
  // State values
  const [currentWord, setCurrentWord] = useState(() => getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  // Derived values
  const guessesLeft = languages.length - 1;

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

  // Game reset
  const startNewGame = () => {
    setCurrentWord(getRandomWord());
    setGuessedLetters([]);
  };

  // Track the last guessed letter
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  // Always a boolean now
  const isLastGuessIncorrect =
    Boolean(lastGuessedLetter) && !currentWord.includes(lastGuessedLetter);
  // Only generate farewell message when the last guess was wrong
  const getFarewellMessage =
    isLastGuessIncorrect && wrongGuessCount <= languages.length - 1
      ? getFarewellText({
          language: languages[wrongGuessCount - 1].name,
        })
      : "";

  return (
    <main className="container m-auto max-w-lg md:max-w-md flex flex-wrap items-center justify-center">
      <Header />
      <Status
        isGameWon={isGameWon}
        isGameLost={isGameLost}
        isGameOver={isGameOver}
        getFarewellMessage={getFarewellMessage}
        isLastGuessIncorrect={isLastGuessIncorrect}
      />
      <LanguageList languages={languages} wrongGuessCount={wrongGuessCount} />
      <WordDisplay
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        isGameLost={isGameLost}
      />
      <Keyboard
        alphabet={alphabet}
        guessLetter={guessLetter}
        guessedLetters={guessedLetters}
        currentWord={currentWord}
        isGameOver={isGameOver}
      />

      {/* For screen reading only. Visually-hidden aria-live region for status updates*/}
      <section className="sr-only" aria-live="polite" role="status">
        <p>
          {currentWord.includes(lastGuessedLetter)
            ? `Correct! The letter ${lastGuessedLetter} is in the word.`
            : `Sorry, the letter ${lastGuessedLetter} is not in the word.`}
          You have {guessesLeft} attempts left.
        </p>
        <p>
          Current word:{" "}
          {currentWord
            .split("")
            .map((letter) =>
              guessedLetters.includes(letter) ? letter + "." : "blank."
            )
            .join(" ")}
        </p>
      </section>

      {isGameOver && (
        <button
          onClick={startNewGame}
          className="bg-sky-500 text-black min-width-[225px] py-2 px-6 rounded-md border-1 border-gray-200 cursor-pointer"
        >
          New Game
        </button>
      )}
    </main>
  );
}
