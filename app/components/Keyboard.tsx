import clsx from "clsx";

type KeyboardProps = {
  alphabet: string;
  guessLetter?: (letter: string) => void;
  guessedLetters?: string[];
  currentWord?: string;
};

function Keyboard({ ...props }: KeyboardProps) {
  return (
    <section className="my-8">
      <div className="flex flex-wrap justify-center items-center gap-2 text-black">
        {props.alphabet.split("").map((letter) => {
          const isGuessed = props.guessedLetters?.includes(letter);
          const isCorrect = props.currentWord?.toLowerCase().includes(letter);

          const buttonClass = clsx(
            "w-11 h-11 p-2 bg-amber-300 flex text-center items-center justify-center rounded border-2 border-gray-100 cursor-pointer",
            {
              "bg-green-400": isGuessed && isCorrect,
              "bg-red-400": isGuessed && !isCorrect,
              "bg-amber-300 hover:bg-amber-400 cursor-pointer": !isGuessed,
            }
          );

          return (
            <button
              key={letter}
              onClick={() => props.guessLetter && props.guessLetter(letter)}
              className={buttonClass}
              disabled={isGuessed}
            >
              {letter.toUpperCase()}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default Keyboard;
