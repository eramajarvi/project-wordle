import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessForm from "../GuessForm";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guessesList, setGuessesList] = React.useState([]);

  // Handles what to do whit the guess entered from the GuessForm component
  function handleSubmit(event) {
    event.preventDefault();
    console.info({ guess });
    setGuess("");

    // Create the new guess received and assigns it an ID
    const newGuess = {
      guess,
      guessID: crypto.randomUUID(),
    };

    const nextGuess = [...guessesList, newGuess];
    setGuessesList(nextGuess);
  }

  return (
    <>
      <GuessResults />
      <GuessForm
        guess={guess}
        setGuess={setGuess}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default Game;
