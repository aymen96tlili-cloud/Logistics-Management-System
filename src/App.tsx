useEffect(() => {
  const testConnection = async () => {
    const { data, error } = await supabase
      .from("users")
      .select("*"); // ✅ بدون شرط

    console.log("Supabase data:", data, error);
  };

  testConnection();
}, []);
