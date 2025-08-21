// 1️⃣ Utwórz klienta Supabase
const supabaseUrl = "https://xsowdwnpguftmlvsogdb.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhzb3dkd25wZ3VmdG1sdnNvZ2RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTc0MzQsImV4cCI6MjA3MTMzMzQzNH0.yFz01fJCqTuaY-jzgqlcgueiU4Id71t66xtjhAGXNWI";
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// 2️⃣ Funkcja logowania
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    alert("Błąd logowania: " + error.message);
  } else {
    // Przekierowanie po poprawnym logowaniu
    window.location.href = "/admin.html";
  }
}
