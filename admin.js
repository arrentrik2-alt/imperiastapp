const supabaseUrl = "https://xsowdwnpguftmlvsogdb.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhzb3dkd25wZ3VmdG1sdnNvZ2RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTc0MzQsImV4cCI6MjA3MTMzMzQzNH0.yFz01fJCqTuaY-jzgqlcgueiU4Id71t66xtjhAGXNWI";
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Sprawdzenie, czy użytkownik jest zalogowany i admin
async function checkAdmin() {
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    alert("Nie jesteś zalogowany");
    window.location.href = "/login.html";
    return;
  }

  const { data: profile, error } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single();

  if (error || !profile || profile.role !== "admin") {
    alert("Nie masz uprawnień administratora");
    window.location.href = "/login.html";
    return;
  }
}

// Wylogowanie
document.getElementById("logoutBtn").addEventListener("click", async () => {
  await supabase.auth.signOut();
  window.location.href = "/login.html";
});

// Funkcje do grup
async function loadGroups() {
  const { data, error } = await supabase.from('groups').select('*');
  const list = document.getElementById("groupList");
  list.innerHTML = "";
  if (data) {
    data.forEach(g => {
      const li = document.createElement("li");
      li.textContent = g.name;
      list.appendChild(li);
    });
  }
}

async function addGroup() {
  const name = document.getElementById("newGroupName").value;
  if (!name) return;

  await supabase.from('groups').insert([{ name }]);
  document.getElementById("newGroupName").value = "";
  loadGroups();
}

// Inicjalizacja
checkAdmin();
loadGroups();
