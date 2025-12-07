import React, { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

function App() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase
        .from("users")
        .select("*"); // بدون شرط

      if (error) {
        console.error("Supabase error:", error);
      } else {
        setUsers(data || []);
      }

      setLoading(false);
    };

    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Dashboard</h1>
      {loading ? (
        <p>Loading users...</p>
      ) : users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id} style={{ marginBottom: "1rem" }}>
              <strong>{user.full_name}</strong> — {user.role}<br />
              Matricule: {user.matricule}<br />
              Part: {user.part_id || "N/A"}<br />
              Shift: {user.shift_id || "N/A"}<br />
              Auth ID: {user.auth_user_id || "NULL"}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default App;
