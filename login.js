// 1️⃣ Utwórz klienta Supabase
<script src="supabaseClient.js"></script>
<script src="login.js"></script>
<script src="admin.js"></script>

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
