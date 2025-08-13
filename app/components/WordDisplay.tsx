import clsx from "clsx";
import { WordDisplayProps } from "../types/wordDisplayTypes";

function WordDisplay({ ...props }: WordDisplayProps) {
  const letterElements = props.currentWord.split("").map((letter, index) => {
    const isGuessed = props.guessedLetters?.includes(letter.toLowerCase());

    const letterClass = clsx(
      "bg-neutral-700 h-12 w-12 p-2 text-xl border-b-2 border-b-gray-300 flex items-center justify-center font-bold",
      {
        "text-white": (!props.isGameLost && !isGuessed) || isGuessed,
        "text-red-500": props.isGameLost && !isGuessed,
      }
    );

    return (
      <li key={index} className={letterClass}>
        {isGuessed || props.isGameLost ? letter.toUpperCase() : ""}
      </li>
    );
  });

  return (
    <>
      <section className="my-8 flex flex-wrap justify-center items-center">
        <ul className="flex flex-wrap justify-center items-center gap-1 text-black">
          {letterElements}
        </ul>
      </section>
    </>
  );
}

export default WordDisplay;
