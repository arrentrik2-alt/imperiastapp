// login.js
import { supabase } from './supabaseClient.js';

document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('loginBtn');

  loginBtn.onclick = async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      alert('Błąd logowania: ' + error.message);
    } else {
      alert('Zalogowano!');
      // window.location.href = 'admin.html'; // przekierowanie po zalogowaniu
    }
  };
});
