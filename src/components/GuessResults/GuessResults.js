import React from "react";

function GuessResults({ guessesList }) {
  return (
    <div className="guess-results">
      {guessesList.map(({ guess, guessID }) => (
        <p className="guess" key={guessID}>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
