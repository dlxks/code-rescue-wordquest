import clsx from "clsx";
import { LanguageListProps } from "../types/languageListTypes";
import { Icon } from "@iconify/react/dist/iconify.js";

function LanguageList({ ...props }: LanguageListProps) {
  return (
    <section className="my-8 flex flex-wrap justify-center items-center">
      <ul className="flex flex-wrap justify-center gap-1 max-w-sm">
        {props.languages.map((language, index) => {
          const isLost = index < props.wrongGuessCount;

          return (
            <li
              key={language.name}
              className={clsx("relative px-2 py-1 rounded-sm font-medium", {
                lost: isLost,
              })}
              style={{
                backgroundColor: language.backgroundColor,
                color: language.color,
              }}
            >
              {isLost && (
                <div className="absolute inset-0 rounded-sm flex items-center justify-center bg-black/70 z-10 text-white w-full h-full pointer-events-none">
                  <Icon icon="fa7-solid:skull" aria-label="Lost language" />
                </div>
              )}
              {language.name}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default LanguageList;
