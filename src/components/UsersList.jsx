import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../feature/posts/userSlice"; // Importing the fetchUsers async thunk

const UsersList = () => {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((state) => state.users); // Accessing the users state

  useEffect(() => {
    dispatch(fetchUsers()); // Dispatching fetchUsers on component mount
  }, [dispatch]);

  return (
    <div
      style={{
        padding: "20px",
        display: "block",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <h2 style={{ textAlign: "center" }}>User List</h2>

      {/* Loading State */}
      {isLoading && <p style={{ textAlign: "center" }}>Loading users...</p>}

      {/* Error State */}
      {error && (
        <p style={{ textAlign: "center", color: "red" }}>
          Failed to load users: {error.message || error}
        </p>
      )}

      {/* Displaying Users */}
      {!isLoading && !error && users.length > 0 && (
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          {users.map((user) => (
            <div
              key={user.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "15px",
                marginBottom: "10px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
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
  );
};

export default UsersList;
