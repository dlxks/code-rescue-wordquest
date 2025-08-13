import { Icon } from "@iconify/react";
import clsx from "clsx";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

type StatusProps = {
  isGameWon: boolean;
  isGameLost: boolean;
  isGameOver: boolean;
  isLastGuessIncorrect: boolean;
  getFarewellMessage: string;
};

function Status({ ...props }: StatusProps) {
  const bannerClass = clsx(
    "w-full min-h-[90px] p-4 text-center text-white rounded-md",
    {
      "bg-violet-500 border-2 border-dashed":
        props.getFarewellMessage &&
        props.isLastGuessIncorrect &&
        !props.isGameOver,
      "bg-green-700": props.isGameWon,
      "bg-red-500": props.isGameLost,
    }
  );

  const { width, height } = useWindowSize();

  const renderGameStatus = () => {
    if (props.isGameOver) {
      if (props.isGameWon) {
        return (
          <div>
            <h2 className="font-bold text-2xl">You Won!</h2>
            <p className="flex items-center justify-center text-md">
              Well done!
              <Icon icon="noto:party-popper" className="ml-2 text-md" />
            </p>
          </div>
        );
      }

      if (props.isGameLost) {
        return (
          <div>
            <h2 className="font-bold text-2xl">Game Over!</h2>
            <p className="flex items-center justify-center text-md">
              Please try again!
              <Icon
                icon="twemoji:loudly-crying-face"
                className="ml-2 text-md"
              />
            </p>
          </div>
        );
      }
    }

    if (props.getFarewellMessage && props.isLastGuessIncorrect) {
      return (
        <div>
          <p className="text-2xl italic flex items-center justify-center text-md">
            "{props.getFarewellMessage}"
          </p>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      {props.isGameWon && (
        <Confetti width={width} height={height} wind={0.025} />
      )}
      <section className={bannerClass} aria-live="polite" role="status">
        {renderGameStatus()}
      </section>
    </>
  );
}

export default Status;
