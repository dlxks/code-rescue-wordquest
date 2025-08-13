import clsx from "clsx";
import { WordDisplayProps } from "../types/wordDisplayTypes";

function WordDisplay({ ...props }: WordDisplayProps) {
  const letterElements = props.currentWord.split("").map((letter, index) => {
    const isGuessed = props.guessedLetters?.includes(letter.toLowerCase());

    const letterClass = clsx(
      "bg-neutral-700 h-12 w-12 p-2 text-xl border-b-2 border-b-gray-300 text-white flex items-center justify-center font-bold",
      {
        "bg-emerald-400": isGuessed,
      }
    );

    return (
      <li key={index} className={letterClass}>
        {isGuessed && letter.toUpperCase()}
      </li>
    );
  });

  return (
    <section className="my-8 flex flex-wrap justify-center items-center">
      <ul className="flex flex-wrap justify-center items-center gap-1 text-black">
        {letterElements}
      </ul>
    </section>
  );
}

export default WordDisplay;
