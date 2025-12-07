import React, { useEffect } from "react";
import { supabase } from "./supabaseClient";

function App() {
  useEffect(() => {
    const testConnection = async () => {
      const { data, error } = await supabase
        .from("users")
        .select("id, full_name, part_id, shift_id")
        .eq("auth_user_id", "ef369cad-3ba6-49e2-aeae-1c263ce6bcf");

      console.log("Supabase test:", { data, error });
    };

    testConnection();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Loading profile...</p>
    </div>
  );
}

export default App;
