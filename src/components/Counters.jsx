import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../feature/counters/counters";

const Counter = () => {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();
  const reduceNumber = counters.reduce(
    (acc, counter) => acc + counter.value,
    0
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center horizontally
        justifyContent: "center", // Optional: center vertically if height set
        minHeight: "100vh", // Optional: full height if you want center vertically
      }}
    >
      <h1>Multiple Counters 🧮</h1>

      {counters.map((counter) => (
        <div
          key={counter.id}
          style={{
            border: "1px solid #ccc",
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <h3>Counter #{counter.id}</h3>
          <button
            onClick={() => dispatch(decrement(counter.id))}
            style={{ padding: "5px 10px" }}
          >
            -
          </button>
          <span
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              margin: "0 10px",
            }}
          >
            {counter.value}
          </span>
          <button
            onClick={() => dispatch(increment(counter.id))}
            style={{ padding: "5px 10px" }}
          >
            +
          </button>
        </div>
      ))}

      <p style={{ margin: "20px 0", fontWeight: "bold", fontSize: "18px" }}>
        Total Number: {reduceNumber}
      </p>
    </div>
  );
};

export default Counter;
