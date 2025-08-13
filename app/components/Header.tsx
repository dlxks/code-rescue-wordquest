function Header() {
  return (
    <header className="h-auto items-center justify-center p-4 my-4 text-center text-white">
      <h1 className="text-3xl font-bold mb-2">Code Rescue: Word Quest</h1>
      <p className="text-[0.875rem]">
        Guess the word in under <strong>8 attempts</strong> to keep the
        programming world safe from{" "}
        <span className="text-red-400">Assembly</span>!
      </p>
    </header>
  );
}

export default Header;
