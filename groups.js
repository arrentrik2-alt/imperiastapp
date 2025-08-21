import { supabase } from './supabaseClient.js';

const addGroupBtn = document.getElementById('add-group-btn');
const addGroupModal = document.getElementById('add-group-modal');
const overlay = document.getElementById('overlay');
const closeModalBtn = document.getElementById('close-group-modal');
const saveGroupBtn = document.getElementById('save-group-btn');
const groupsList = document.getElementById('groups-list');

// Pokazanie modal
addGroupBtn.addEventListener('click', () => {
  addGroupModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

// Zamknięcie modal
closeModalBtn.addEventListener('click', () => {
  addGroupModal.classList.add('hidden');
  overlay.classList.add('hidden');
});

// Funkcja zapisania grupy w Supabase
saveGroupBtn.addEventListener('click', async () => {
  const name = document.getElementById('group-name').value;
  const day = document.getElementById('group-day').value;
  const start = document.getElementById('group-start').value;
  const end = document.getElementById('group-end').value;
  const trainer = document.getElementById('group-trainer').value;
  const fee = parseFloat(document.getElementById('group-fee').value);
  const multisport = parseFloat(document.getElementById('group-multisport').value);

  const { data, error } = await supabase
    .from('groups')
    .insert([{ name, day, start_time: start, end_time: end, trainer, fee, multisport }]);

  if (error) {
    alert('Błąd dodawania grupy: ' + error.message);
  } else {
    alert('Grupa dodana!');
    addGroupModal.classList.add('hidden');
    overlay.classList.add('hidden');
    loadGroups();
  }
});

// Wczytanie wszystkich grup
async function loadGroups() {
  const { data, error } = await supabase
    .from('groups')
    .select('*')
    .order('day', { ascending: true })
    .order('start_time', { ascending: true });

  if (error) {
    groupsList.innerHTML = 'Błąd wczytywania grup';
  } else {
    groupsList.innerHTML = '';
    data.forEach(group => {
      const div = document.createElement('div');
      div.textContent = `${group.name} | ${group.day} ${group.start_time}-${group.end_time} | Trener: ${group.trainer}`;
      groupsList.appendChild(div);
      // później tu dodamy kliknięcie, edycję, podgląd uczestników
    });
  }
}

// inicjalizacja
loadGroups();
