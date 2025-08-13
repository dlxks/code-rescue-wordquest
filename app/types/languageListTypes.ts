export type Language = {
  name: string;
  backgroundColor: string;
  color: string;
};

export type LanguageListProps = {
  languages: Language[];
  wrongGuessCount: number;
};
