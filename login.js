// Wstaw swój Supabase URL i ANON KEY
const SUPABASE_URL = "https://xsowdwnpguftmlvsogdb.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhzb3dkd25wZ3VmdG1sdnNvZ2RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTc0MzQsImV4cCI6MjA3MTMzMzQzNH0.yFz01fJCqTuaY-jzgqlcgueiU4Id71t66xtjhAGXNWI";
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Logowanie w Supabase Auth
  const { data: session, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    alert("Błąd logowania: " + error.message);
    return;
  }

  // Sprawdzanie roli w tabeli profiles
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', session.user.id)
    .single();

  if (profileError || !profile) {
    alert("Nie znaleziono profilu użytkownika");
    return;
  }

  // Przekierowanie według roli
  if (profile.role === "admin") {
    window.location.href = "/admin.html";
  } else if (profile.role === "trainer") {
    window.location.href = "/trainer.html";
  }
}
