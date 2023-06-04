"use client";

export default function GuessBox({ guesses, setGuesses, handleGuess, salary }) {
  return (
    <div className="grid justify-center text-black">
      <div className="bg-orange-400 rounded-md p-1">
        <form className="grid justify-center" onSubmit={handleGuess}>
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
                <div>
                  {guess.toLocaleString("en-UK", {
                    style: "currency",
                    currency: "GBP",
                  })}
                </div>
                <div className="text-right">
                  {guess < salary[0] ? "Too low" : "Too high"}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
