import { useState } from "react";
import {
  useFetchUsersQuery,
  useUpdateUserMutation,
} from "../feature/userAndPost/userAndPost"; // Importing API hooks

const UsersListAndUpdate = () => {
  const { data: users, error, isLoading } = useFetchUsersQuery(); // Fetching users from the API
  const [updateUser] = useUpdateUserMutation(); // Hook for updating user
  const [editNames, setEditNames] = useState({});

  // Handle change in the input field for editing names
  const handleChange = (id, value) => {
    setEditNames((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handle updating the user
  const handleUpdate = async (id) => {
    try {
      const name = editNames[id];
      await updateUser({ id, user: { name } });
      alert("User updated!");
    } catch (error) {
      alert("Update failed!");
    }
  };

  if (isLoading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>Error loading users</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>User List</h2>
      {users?.length > 0 ? (
        users.map((user) => (
          <div
            key={user.id}
            style={{
              padding: "15px",
              marginBottom: "10px",
              display: "flex",

              flexDirection: "column",
              alignItems: "center", // Center horizontally
              justifyContent: "center",
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

            {/* Input for editing name */}
            <input
              type="text"
              placeholder="Edit name"
              value={editNames[user.id] || ""}
              onChange={(e) => handleChange(user.id, e.target.value)}
              style={{ padding: "5px", width: "300px", marginTop: "10px" }}
            />
            <button
              onClick={() => handleUpdate(user.id)}
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                padding: "10px",
                marginTop: "10px",
                borderRadius: "5px",
              }}
            >
              Update User
            </button>
          </div>
        ))
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
};

export default UsersListAndUpdate;
