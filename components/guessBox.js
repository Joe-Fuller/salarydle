"use client";

import { useRouter } from "next/navigation";

export default function GuessBox({ guesses }) {
  const router = useRouter();

  const handleGuess = (event) => {
    event.preventDefault();

    guesses.push(parseInt(event.target.elements.guess.value));

    console.log(guesses);

    router.refresh();
  };

  return (
    <div className="grid justify-center">
      <form
        className="grid justify-center bg-indigo-500 text-black "
        onSubmit={handleGuess}
      >
        <label htmlFor="guess">Salary</label>
        <input type="number" id="guess" name="guess"></input>
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
