// Wstaw swój Supabase URL i ANON KEY
const SUPABASE_URL = "https://xsowdwnpguftmlvsogdb.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhzb3dkd25wZ3VmdG1sdnNvZ2RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTc0MzQsImV4cCI6MjA3MTMzMzQzNH0.yFz01fJCqTuaY-jzgqlcgueiU4Id71t66xtjhAGXNWI";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const loginBtn = document.getElementById("loginBtn");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("errorMsg");

loginBtn.addEventListener("click", async () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
        errorMsg.textContent = error.message;
    } else {
        // Prosty przykład: jeśli email zawiera "admin" → panel admina
        if (email.includes("admin")) {
            window.location.href = "admin.html";
        } else {
            window.location.href = "trainer.html";
        }
    }
});
