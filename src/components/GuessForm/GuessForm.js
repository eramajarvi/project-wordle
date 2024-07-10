import React from "react";

function GuessForm() {
  const [guess, setGuess] = React.useState("");

  return (
    <div>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          console.info({ guess });
          setGuess("");
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
