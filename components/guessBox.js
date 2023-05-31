"use client";

export default function GuessBox({ guesses, setGuesses, handleGuess, salary }) {
  return (
    <div className="grid justify-center">
      <form
        className="grid justify-center bg-indigo-500 text-black "
        onSubmit={handleGuess}
      >
        <label className="grid justify-center" htmlFor="guess">
          Salary
        </label>
        <input
          type="number"
          id="guess"
          name="guess"
          maxLength="7"
          min="0"
          max="9999999"
          autoFocus
        ></input>
      </form>
      <div>
        {guesses.map((guess) => {
          return (
            <div key={guess} className="grid grid-cols-2">
              <div>{guess}</div>
              <div>{guess < salary[0] ? "Too low" : "Too high"}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
