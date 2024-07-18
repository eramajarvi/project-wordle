import React from "react";

function GuessForm({ guess, setGuess, handleSubmit }) {
  return (
    <div>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>

        <input
          id="guess-input"
          type="text"
          required={true}
          value={guess}
          pattern="[a-zA-Z]{5}"
          onChange={(event) => setGuess(event.target.value.toUpperCase())}
        />
      </form>
    </div>
  );
}

export default GuessForm;
