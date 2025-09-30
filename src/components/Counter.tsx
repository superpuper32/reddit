import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/hooks/redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "@store/slices/counterSlice";
import "./Counter.scss";

const Counter: React.FC = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div className="counter">
      <div className="counter-display">
        <span className="counter-value">{count}</span>
      </div>

      <div className="counter-buttons">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <div className="counter-custom">
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
          type="number"
        />
        <button
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
      </div>
    </div>
  );
};

export default Counter;
