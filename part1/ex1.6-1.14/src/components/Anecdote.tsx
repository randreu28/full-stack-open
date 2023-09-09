import { useState } from "react";

const initialAnecdotes = [
  { anecdote: "If it hurts, do it more often.", vote: 0 },
  {
    anecdote: "Adding manpower to a late software project makes it later!",
    vote: 0,
  },
  {
    anecdote:
      "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    vote: 0,
  },
  {
    anecdote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    vote: 0,
  },
  { anecdote: "Premature optimization is the root of all evil.", vote: 0 },
  {
    anecdote:
      "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    vote: 0,
  },
  {
    anecdote:
      "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    vote: 0,
  },
  { anecdote: "The only way to go fast, is to go well.", vote: 0 },
];

export default function Anecdote() {
  const [anecdotes, setAnecdotes] = useState(initialAnecdotes);
  const [random, setRandom] = useState<number>(
    Math.floor(Math.random() * anecdotes.length)
  );

  function handleVote() {
    const newAnecdotes = [...anecdotes];
    newAnecdotes[random].vote++;
    setAnecdotes(newAnecdotes);
  }

  const winningAnecdote = anecdotes.sort((a, b) => b.vote - a.vote)[0];

  return (
    <div>
      <button
        onClick={() => {
          setRandom(Math.floor(Math.random() * anecdotes.length));
        }}
      >
        get random anecdote
      </button>

      <button onClick={handleVote}>vote</button>
      <h3>{anecdotes[random].anecdote}</h3>
      <h3>votes: {anecdotes[random].vote}</h3>

      <h1>Winning anecdote: </h1>

      <p>
        {winningAnecdote.anecdote} {winningAnecdote.vote}
      </p>
    </div>
  );
}
