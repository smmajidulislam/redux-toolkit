import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./feature/counters/counters";
import { fetchUsers } from "./feature/posts/userSlice";

function App() {
  const counters = useSelector((state) => state.counters); // state name must match with store.js
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const showNumber = counters.reduce((acc, counter) => acc + counter.value, 0);
  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1>Multiple Counter App 🧮</h1>
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
            <button onClick={() => dispatch(decrement(counter.id))}>-</button>
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>
              {counter.value}
            </span>
            <button onClick={() => dispatch(increment(counter.id))}>+</button>
          </div>
        ))}
        <h2>Total Count: {showNumber}</h2>
      </div>
      <div>
        <div
          style={{
            minHeight: "100vh",
            padding: "40px",
            fontFamily: "sans-serif",
          }}
        >
          <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
            👤 User List from API
          </h1>

          {isLoading && <p style={{ textAlign: "center" }}>Loading...</p>}

          {error && (
            <p style={{ color: "red", textAlign: "center" }}>
              Error: {error.message || error}
            </p>
          )}

          {!isLoading && !error && users.length > 0 && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "20px",
              }}
            >
              {users.map((user) => (
                <div
                  key={user.id}
                  style={{
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  }}
                >
                  <h3>{user.name}</h3>
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {user.phone}
                  </p>
                  <p>
                    <strong>Company:</strong> {user.company.name}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
