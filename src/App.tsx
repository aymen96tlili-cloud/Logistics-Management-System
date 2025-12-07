import React, { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

function App() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase
        .from("users")
        .select("*"); // ✅ بدون شرط

      if (error) {
        console.error("Supabase error:", error);
      } else {
        // نعرض أول صف فقط للتأكد
        setUser(data && data.length > 0 ? data[0] : null);
      }

      setLoading(false);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {loading ? (
        <p>Loading user...</p>
      ) : user ? (
        <div>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Name:</strong> {user.full_name}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <p><strong>Part:</strong> {user.part_id}</p>
          <p><strong>Shift:</strong> {user.shift_id}</p>
          <p><strong>Auth User ID:</strong> {user.auth_user_id}</p>
        </div>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default App;
