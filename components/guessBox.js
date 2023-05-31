"use client";

export default function GuessBox({ guesses, setGuesses, handleGuess, salary }) {
  return (
    <div className="grid justify-center">
      <form
        className="grid justify-center bg-indigo-500 text-black "
        onSubmit={handleGuess}
      >
        <label htmlFor="guess">Salary</label>
        <input
          type="number"
          id="guess"
          name="guess"
          maxlength="7"
          min="0"
          max="9999999"
          autoFocus
        ></input>
      </form>
      <ul>
        {guesses.map((guess) => {
          return (
            <li className="grid justify-center" key={guess}>
              <p>{guess}</p>
              <p>{guess < salary[0] ? "Too low" : "Too high"}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
