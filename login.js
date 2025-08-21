import { supabase } from './supabaseClient.js';

async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    alert('Błąd logowania: ' + error.message);
  } else {
    // Zalogowano – przekieruj do panelu admina
    window.location.href = 'admin.html';  // <-- tutaj zmień na swoją stronę panelu
  }
}

// Podpinamy funkcję do przycisku
document.getElementById('loginBtn').onclick = login;
