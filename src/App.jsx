import Counter from "./components/Counters";
import UsersListAndUpdate from "./components/UserlistAndUpdate";
import UsersList from "./components/UsersList";

const App = () => {
  return (
    <div style={{ width: "100%" }}>
      <Counter />
      <div
        style={{
          padding: "20px",
          width: "100%",
          margin: "0 auto",
          border: "1px solid #ccc",
        }}
      >
        <h1>User List Example</h1>
        <UsersList /> {/* Rendering UsersList component */}
      </div>
      <UsersListAndUpdate />
    </div>
  );
};

export default App;
