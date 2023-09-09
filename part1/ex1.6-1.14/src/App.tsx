import { useState } from "react";
import Statistics from "./components/Statistics";
import Button from "./components/Button";
import Anecdote from "./components/Anecdote";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState<number>(0);
  const [neutral, setNeutral] = useState<number>(0);
  const [bad, setBad] = useState<number>(0);

  return (
    <div>
      <h1>give feedback</h1>

      <Button onClick={() => setGood(good + 1)} title="good" />
      <Button onClick={() => setNeutral(neutral + 1)} title="neutral" />
      <Button onClick={() => setBad(bad + 1)} title="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} />

      <Anecdote />
    </div>
  );
};

export default App;
