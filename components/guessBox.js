"use client";

export default function GuessBox({ guesses, setGuesses, handleGuess }) {
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
        ></input>
      </form>
      <ul>
        {guesses.map((guess) => {
          return (
            <li className="grid justify-center" key={guess}>
              {guess}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
