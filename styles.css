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
    return;
  }

  const user = data.user;
  if (!user) {
    // fallback
    window.location.href = 'admin.html';
    return;
  }

  // Spróbuj pobrać profil aby sprawdzić rolę
  try {
    const { data: profile, error: profileErr } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single();

    if (profileErr) {
      console.warn('Brak profilu, przekierowuję do panelu admina:', profileErr.message);
      window.location.href = 'admin.html';
      return;
    }

    if (profile.role === 'clubadmin') {
      window.location.href = 'club.html';
    } else {
      window.location.href = 'admin.html';
    }
  } catch (e) {
    console.error('Błąd podczas pobierania profilu:', e);
    window.location.href = 'admin.html';
  }
}

// Podpinamy funkcję do przycisku
document.getElementById('loginBtn').onclick = login;


