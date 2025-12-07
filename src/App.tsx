import React, { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

function App() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from("users")
        .select("id, full_name, part_id, shift_id, role")
        .eq("auth_user_id", "ef369cad-39b2-4eae-eaae-1c263c4d2f2b");

      if (error) {
        console.error("Supabase error:", error);
      } else {
        setProfile(data?.[0] || null);
      }

      setLoading(false);
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {loading ? (
        <p>Loading profile...</p>
      ) : profile ? (
        <div>
          <p><strong>Name:</strong> {profile.full_name}</p>
          <p><strong>Part:</strong> {profile.part_id}</p>
          <p><strong>Shift:</strong> {profile.shift_id}</p>
          <p><strong>Role:</strong> {profile.role}</p>
        </div>
      ) : (
        <p>No profile found.</p>
      )}
    </div>
  );
}

export default App;
