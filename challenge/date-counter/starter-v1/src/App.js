import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const outputDate = new Date();
  outputDate.setDate(new Date().getDate() + count);

  return (
    <div>
      <div>
        <button onClick={() => setStep((currentStep) => currentStep - 1)}>
          -
        </button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((currentStep) => currentStep + 1)}>
          +
        </button>
      </div>

      <div>
        <button onClick={() => setCount((currentCount) => currentCount - step)}>
          -
        </button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((currentCount) => currentCount + step)}>
          +
        </button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
        </span>
        <span>{outputDate.toDateString()}</span>
      </p>
    </div>
  );
}
