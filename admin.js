<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Panel Admina - Studio Tańca</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    :root {
      --primary-bg: #121212;
      --secondary-bg: #1e1e1e;
      --gold: #d4af37;
      --gold-light: #f1e5b9;
      --text-light: #f5f5f5;
      --text-gray: #b0b0b0;
      --border-dark: #333;
      --success: #28a745;
      --error: #dc3545;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    
    body {
      background-color: var(--primary-bg);
      color: var(--text-light);
      min-height: 100vh;
      display: flex;
      overflow-x: hidden;
    }
    
    /* Sidebar */
    .sidebar {
      width: 250px;
      background-color: var(--secondary-bg);
      height: 100vh;
      position: fixed;
      left: 0;
      top: 0;
      padding: 20px 0;
      border-right: 1px solid var(--border-dark);
      transition: all 0.3s ease;
      z-index: 1000;
    }
    
    .logo {
      text-align: center;
      padding: 0 20px 20px;
      border-bottom: 1px solid var(--border-dark);
      margin-bottom: 20px;
    }
    
    .logo h1 {
      color: var(--gold);
      font-size: 1.5rem;
      font-weight: bold;
    }
    
    .nav-links {
      list-style: none;
      padding: 0 15px;
    }
    
    .nav-links li {
      margin-bottom: 5px;
    }
    
    .nav-links a {
      display: flex;
      align-items: center;
      padding: 12px 15px;
      text-decoration: none;
      color: var(--text-gray);
      border-radius: 5px;
      transition: all 0.3s ease;
    }
    
    .nav-links a:hover, .nav-links a.active {
      background-color: rgba(212, 175, 55, 0.1);
      color: var(--gold);
    }
    
    .nav-links a i {
      margin-right: 10px;
      font-size: 1.1rem;
    }
    
    /* Main Content */
    .main-content {
      flex: 1;
      margin-left: 250px;
      padding: 20px;
      overflow-x: hidden;
    }
    
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
      padding-bottom: 15px;
      border-bottom: 1px solid var(--border-dark);
    }
    
    .header h2 {
      color: var(--gold);
      font-size: 1.8rem;
    }
    
    .user-info {
      display: flex;
      align-items: center;
    }
    
    .user-info span {
      margin-right: 15px;
      color: var(--text-gray);
    }
    
    .btn {
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
    }
    
    .btn i {
      margin-right: 5px;
    }
    
    .btn-primary {
      background-color: var(--gold);
      color: var(--primary-bg);
    }
    
    .btn-primary:hover {
      background-color: #c19b2e;
    }
    
    .btn-outline {
      background-color: transparent;
      border: 1px solid var(--gold);
      color: var(--gold);
    }
    
    .btn-outline:hover {
      background-color: rgba(212, 175, 55, 0.1);
    }
    
    /* Content Box */
    .content-box {
      background-color: var(--secondary-bg);
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 20px;
      border: 1px solid var(--border-dark);
    }
    
    .content-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    
    .content-header h3 {
      color: var(--gold);
      font-size: 1.3rem;
    }
    
    /* Groups List */
    .group-card {
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      padding: 15px;
      border: 1px solid var(--border-dark);
      transition: all 0.3s ease;
      margin-bottom: 12px;
    }
    
    .group-card:hover {
      border-color: var(--gold);
      transform: translateY(-2px);
    }
    
    .group-card h4 {
      color: var(--gold);
      margin-bottom: 10px;
      font-size: 1.1rem;
    }
    
    .group-detail {
      display: flex;
      margin-bottom: 8px;
      color: var(--text-gray);
      font-size: 0.9rem;
    }
    
    .group-detail i {
      margin-right: 8px;
      color: var(--gold);
      width: 16px;
    }
    
    .group-actions {
      display: flex;
      justify-content: flex-end;
      margin-top: 15px;
      gap: 10px;
    }

    /* Day headers styling */
    .day-header {
      margin: 25px 0 15px 0;
      padding: 10px 0;
      border-bottom: 2px solid var(--gold);
      background: linear-gradient(90deg, rgba(212, 175, 55, 0.1) 0%, transparent 100%);
    }

    .day-header h3 {
      margin: 0;
      padding: 0 15px;
      color: var(--gold);
      font-size: 1.3rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    /* Days checkboxes styling */
    .days-checkboxes {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 10px;
      margin-top: 8px;
    }

    .day-checkbox {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      border: 1px solid var(--border-dark);
      border-radius: 6px;
      background-color: rgba(255, 255, 255, 0.05);
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .day-checkbox:hover {
      border-color: var(--gold);
      background-color: rgba(212, 175, 55, 0.1);
    }

    .day-checkbox input[type="checkbox"] {
      width: 16px;
      height: 16px;
      accent-color: var(--gold);
    }

    .day-checkbox span {
      color: var(--text-light);
      font-size: 0.9rem;
      font-weight: 500;
    }

    .day-checkbox input[type="checkbox"]:checked + span {
      color: var(--gold);
      font-weight: 600;
    }

    .view-switch-buttons {
      display: flex;
      gap: 10px;
      align-items: center;
    }

    .view-switch-buttons .btn.active {
      background-color: var(--gold);
      color: white;
      border-color: var(--gold);
    }

    .modal .btn.active {
      background-color: var(--gold);
      color: white;
      border-color: var(--gold);
    }

    .group-view-section {
      display: none;
    }

    .group-view-section.active {
      display: block;
    }

    /* Modal */
    .modal {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.6);
      z-index: 2000;
      align-items: center;
      justify-content: center;
      padding: 16px;
    }
    
    .modal.active {
      display: flex;
    }
    
    .modal-content {
      background: var(--secondary-bg);
      border: 1px solid var(--border-dark);
      border-radius: 8px;
      max-width: 500px;
      width: 100%;
      max-height: 80vh;
      overflow: auto;
      padding: 25px;
      position: relative;
    }
    
    .modal-close {
      position: absolute;
      top: 15px;
      right: 15px;
      background: none;
      border: none;
      color: var(--text-gray);
      font-size: 1.5rem;
      cursor: pointer;
    }
    
    .modal-close:hover {
      color: var(--text-light);
    }
    
    .modal-header {
      margin-bottom: 20px;
      padding-right: 30px;
    }
    
    .modal-header h3 {
      color: var(--gold);
    }
    
    .form-group {
      margin-bottom: 15px;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 5px;
      color: var(--text-gray);
    }
    
    .form-control {
      width: 100%;
      padding: 10px;
      background-color: rgba(255, 255, 255, 0.07);
      border: 1px solid var(--border-dark);
      border-radius: 4px;
      color: var(--text-light);
    }
    
    .form-control:focus {
      outline: none;
      border-color: var(--gold);
    }
    
    .form-actions {
      display: flex;
      justify-content: flex-end;
      margin-top: 20px;
      gap: 10px;
    }
    
    .empty-state {
      text-align: center;
      padding: 40px 20px;
      color: var(--text-gray);
    }
    
    .empty-state i {
      font-size: 3rem;
      color: var(--gold);
      margin-bottom: 15px;
    }
    
    .empty-state p {
      margin-bottom: 20px;
    }
    
    /* Loading spinner */
    .loading {
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 3px solid rgba(255,255,255,.3);
      border-radius: 50%;
      border-top-color: var(--gold);
      animation: spin 1s ease-in-out infinite;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .loading-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40px 20px;
      text-align: center;
    }

    .loading-state p {
      margin: 15px 0 0 0;
      color: var(--text-secondary);
      font-size: 14px;
    }

    /* Attendance Journal Table */
    .attendance-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    .attendance-table th,
    .attendance-table td {
      padding: 12px 8px;
      text-align: center;
      border-bottom: 1px solid #e1e5e9;
      font-size: 0.9rem;
    }

    .attendance-table th {
      background: var(--gold);
      color: white;
      font-weight: 600;
      position: sticky;
      top: 0;
      z-index: 10;
    }

    .attendance-table th.participant-name {
      text-align: left;
      min-width: 200px;
      position: sticky;
      left: 0;
      z-index: 15;
    }

    .attendance-table td.participant-name {
      text-align: left;
      background: white;
      font-weight: 500;
      position: sticky;
      left: 0;
      z-index: 5;
      color: #333; /* Dark color for better visibility */
    }

    .attendance-table tr:nth-child(even) {
      background: #f8f9fa;
    }

    .attendance-table tr:nth-child(even) td.participant-name {
      background: #f8f9fa;
      color: #333; /* Dark color for better visibility */
    }

    .attendance-checkbox {
      width: 20px;
      height: 20px;
      cursor: pointer;
      accent-color: var(--gold);
    }

    .attendance-column-approved {
      background: #e8f5e8 !important;
    }

    .attendance-column-approved .attendance-checkbox {
      cursor: not-allowed;
      opacity: 0.6;
    }

    .approve-btn, .edit-btn {
      padding: 6px 12px;
      font-size: 0.8rem;
      min-width: auto;
      margin-top: 5px;
    }

    .approve-btn {
      background: #28a745;
      color: white;
      border: 1px solid #28a745;
    }

    .approve-btn:hover {
      background: #218838;
      border-color: #1e7e34;
    }

    .edit-btn {
      background: #ffc107;
      color: #212529;
      border: 1px solid #ffc107;
    }

    .edit-btn:hover {
      background: #e0a800;
      border-color: #d39e00;
    }
    
    /* Month selector */
    .month-selector {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 20px;
    }
    
    /* Prevent horizontal scrolling in participants/details and allow rows to wrap */
    #group-participants-section, #participants-list {
      overflow-x: hidden;
    }
    
    .participant-row {
      display: flex;
      flex-wrap: nowrap; /* force single line */
      align-items: center;
      gap: 6px; /* tighter gap */
      white-space: nowrap;
      overflow: hidden;
    }
    
    /* Allow inner divs to shrink to avoid forcing horizontal scroll */
    .participant-row > div {
      min-width: 0;
    }
    
    /* Tighter widths so everything fits on one line */
    .amount-section { min-width: 70px; max-width: 100px; }
    .amount-section input { width: 60px; padding:6px; }
    .payment-method-section { min-width: 100px; max-width: 120px; }
    .comment-section { flex: 1; min-width: 100px; max-width: 280px; }
    .action-buttons { min-width: 70px; gap: 6px; display:flex; align-items:center; }
    .action-buttons .btn { padding: 6px 6px; font-size: 0.85rem; }
    .participant-row { padding: 10px 8px; }
    
    .month-selector select {
      min-width: 200px;
    }
    
    /* Responsive */
    @media (max-width: 992px) {
      .sidebar {
        width: 70px;
      }
      
      .sidebar .logo-text, .sidebar .link-text {
        display: none;
      }
      
      .sidebar .logo {
        padding: 10px;
      }
      
      .nav-links {
        padding: 0 10px;
      }
      
      .nav-links a {
        justify-content: center;
        padding: 15px 10px;
      }
      
      .nav-links a i {
        margin-right: 0;
        font-size: 1.3rem;
      }
      
      .main-content {
        margin-left: 70px;
      }
    }
    
    @media (max-width: 576px) {
      .sidebar {
        width: 0;
        overflow: hidden;
      }
      
      .main-content {
        margin-left: 0;
      }
    }

    /* RODO saved visual */
    .rodo-saved {
      outline: 2px solid rgba(40,167,69,0.8);
      border-radius: 3px;
      transition: outline 0.25s ease-out;
    }
    /* locked inputs styling */
    .readonly-locked {
      background: rgba(255,255,255,0.03);
      opacity: 0.85;
      pointer-events: none;
    }
    /* unified payment status colors */
    :root {
      --paid-bg: rgba(40,167,69,0.06);
      --paid-border: rgba(40,167,69,0.18);
      --unpaid-bg: rgba(220,53,69,0.06);
      --unpaid-border: rgba(220,53,69,0.18);
    }
    .payment-paid { background: var(--paid-bg) !important; border: 1px solid var(--paid-border) !important; }
    .payment-unpaid { background: var(--unpaid-bg) !important; border: 1px solid var(--unpaid-border) !important; }
  </style>
</head>
<body>
  <!-- Sidebar -->
  <aside class="sidebar">
    <div class="logo">
      <h1><span class="logo-text">Studio Tańca Imperia</span></h1>
    </div>
    
    <ul class="nav-links">
      <li>
        <a href="#" id="nav-home" class="active">
          <i class="fas fa-home"></i>
          <span class="link-text">Strona główna</span>
        </a>
      </li>
      <li>
        <a href="#" id="nav-groups">
          <i class="fas fa-users"></i>
          <span class="link-text">Grupy</span>
        </a>
      </li>
      <li>
        <a href="#" id="nav-trainers">
          <i class="fas fa-chalkboard-teacher"></i>
          <span class="link-text">Trenerzy</span>
        </a>
      </li>
      <li>
        <a href="#" id="logoutBtn">
          <i class="fas fa-sign-out-alt"></i>
          <span class="link-text">Wyloguj</span>
        </a>
      </li>
    </ul>
  </aside>

  <!-- Main Content -->
  <main class="main-content">
    <div class="header">
      <h2>Panel Administracyjny</h2>
      <div class="user-info">
        <span>Witaj, Admin!</span>
      </div>
    </div>

    <!-- Home Section -->
    <div class="content-box" id="home-section">
      <div class="content-header">
        <h3>Witaj w panelu administracyjnym</h3>
      </div>
      
      <div class="month-selector">
        <label for="current-month-select">Wybierz miesiąc:</label>
        <select id="current-month-select" class="form-control">
          <!-- Will be populated with last 12 months -->
        </select>
        <button class="btn btn-outline" id="return-current-month-home" title="Wróć do bieżącego miesiąca">
          <i class="fas fa-calendar-day"></i>
        </button>
        <button class="btn btn-primary" id="create-new-month-btn">
          <i class="fas fa-plus"></i> Utwórz nowy miesiąc
        </button>
        </div>
      
      <div class="content-box">
        <h4 style="margin-bottom: 15px; color: var(--gold);">Podsumowanie dla wybranego miesiąca:</h4>
        <div style="display: grid; grid-template-columns: 1fr 320px; gap: 15px; align-items: center;">
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;">
            <div class="stat-card">
              <div style="color: var(--text-gray); font-size: 0.9rem;">Liczba grup</div>
              <div style="color: var(--gold); font-size: 1.5rem; font-weight: bold;" id="groups-count">0</div>
        </div>
            <div class="stat-card">
              <div style="color: var(--text-gray); font-size: 0.9rem;">Liczba lekcji</div>
              <div style="color: var(--gold); font-size: 1.5rem; font-weight: bold;" id="lessons-count">0</div>
        </div>
            <div class="stat-card">
              <div style="color: var(--text-gray); font-size: 0.9rem;">Liczba uczestników</div>
              <div style="color: var(--gold); font-size: 1.5rem; font-weight: bold;" id="participants-count">0</div>
      </div>
            <div class="stat-card">
              <div style="color: var(--text-gray); font-size: 0.9rem;">Razem</div>
              <div style="color: var(--text-gray); font-size: 1.2rem; font-weight: bold;" id="total-amount">0.00 zł</div>
        </div>
          </div>
          <div style="display:flex; gap:12px; align-items:center; justify-content:flex-end;">
            <div style="background: var(--secondary-bg); border:1px solid var(--border-dark); padding:12px; border-radius:8px; width:300px;">
              <div style="display:flex; align-items:center; gap:12px;">
                <canvas id="home-donut" width="120" height="120"></canvas>
                <div id="home-summary-block" style="flex:1;">
                  <div id="home-paid" style="color:var(--success); font-weight:700">Zapłacono: 0.00 zł</div>
                  <div id="home-unpaid" style="color:var(--error); font-weight:700">Niezapłacono: 0.00 zł</div>
            </div>
          </div>
        </div>
      </div>
    </div>

      </div>
      
      <div style="margin-top: 20px; display: flex; gap: 12px;">
        <button class="btn btn-primary" id="go-to-groups-btn">
          <i class="fas fa-users"></i> Zarządzaj grupami
        </button>
        <button class="btn btn-outline" id="go-to-lessons-btn">
          <i class="fas fa-chalkboard-teacher"></i> Zarządzaj lekcjami
        </button>
      </div>
    </div>

    <!-- Groups Section -->
    <div class="content-box" id="groups-section" style="display:none;">
      <div class="content-header">
        <h3>Lista grup treningowych</h3>
        <button class="btn btn-primary" id="add-group-btn">
          <i class="fas fa-plus"></i> Dodaj grupę
        </button>
      </div>

      <div class="month-selector">
        <label for="groups-month-select">Miesiąc:</label>
        <select id="groups-month-select" class="form-control">
          <!-- Will be populated with last 12 months -->
        </select>
        <button class="btn btn-outline" id="return-current-month-groups" title="Wróć do bieżącego miesiąca">
          <i class="fas fa-calendar-day"></i>
        </button>
      </div>

      <div id="groups-list">
        <!-- Groups will be loaded here dynamically -->
        <div class="empty-state" id="emptyState">
          <i class="fas fa-users"></i>
          <p>Brak grup do wyświetlenia</p>
          <button class="btn btn-primary" id="add-first-group">
            <i class="fas fa-plus"></i> Dodaj pierwszą grupę
          </button>
        </div>
      </div>
    </div>
    
    <!-- Group Participants Section -->
    <div class="content-box" id="group-participants-section" style="display:none;">
      <div class="content-header">
        <h3>Uczestnicy grupy</h3>
        <div class="view-switch-buttons">
          <button class="btn btn-outline active" id="view-group-details-btn">
            <i class="fas fa-info-circle"></i> Szczegóły grupy
          </button>
          <button class="btn btn-outline" id="view-attendance-journal-btn">
            <i class="fas fa-book"></i> Dziennik obecności
          </button>
        <button class="btn btn-outline" id="back-to-groups-btn">
          <i class="fas fa-arrow-left"></i> Powrót do grup
        </button>
        </div>
        </div>
      
      <!-- Group Details View -->
      <div class="group-view-section active" id="group-details-view">
      <div class="month-selector">
        <label for="participants-month-select">Miesiąc:</label>
        <select id="participants-month-select" class="form-control">
          <!-- Will be populated with available months -->
          </select>
        <button class="btn btn-outline" id="return-current-month-participants" title="Wróć do bieżącego miesiąca">
          <i class="fas fa-calendar-day"></i>
        </button>
        </div>
    
      <div id="group-participants-info" style="margin-bottom: 20px; display:flex; align-items:center; justify-content:space-between; gap:20px;">
        <div>
          <h4 id="group-participants-name" style="color: var(--gold); margin: 0;"></h4>
          <div id="group-participants-days" style="color: var(--text-gray); font-size: 0.9rem; margin-top: 5px;"></div>
        </div>
        <div style="display:flex; align-items:center; gap:12px;">
          <canvas id="group-donut" width="80" height="80"></canvas>
          <div id="group-participants-summary" style="color:var(--text-gray); font-size:0.95rem; text-align:right;"></div>
        </div>
      </div>

      <div style="margin-bottom: 20px;">
        <button class="btn btn-primary" id="add-participant-to-group-btn">
          <i class="fas fa-plus"></i> Dodaj uczestnika
        </button>
        </div>

        <div id="participants-list">
        <!-- Participants will be loaded here -->
          </div>
      </div>

      <!-- Attendance Journal View -->
      <div class="group-view-section" id="attendance-journal-view">
        <div class="month-selector">
          <label for="attendance-month-select">Miesiąc obecności:</label>
          <select id="attendance-month-select" class="form-control">
            <!-- Will be populated with available months -->
            </select>
          <button class="btn btn-outline" id="return-current-month-attendance" title="Wróć do bieżącego miesiąca">
            <i class="fas fa-calendar-day"></i>
          </button>
          </div>

        <div id="attendance-journal-container">
          <!-- Attendance journal table will be loaded here -->
          <div class="loading-state">
            <div class="loading"></div>
            <p>Ładowanie dziennika obecności...</p>
          </div>
        </div>
        </div>
      </div>

  <!-- Add Group Modal -->
  <div class="modal" id="add-group-modal">
    <div class="modal-content">
      <button class="modal-close" id="close-group-modal">
        <i class="fas fa-times"></i>
      </button>
      
      <div class="modal-header">
        <h3 id="group-modal-title">Dodaj nową grupę</h3>
    </div>
    
      <div class="form-group">
        <label for="group-name">Nazwa grupy</label>
        <input type="text" id="group-name" class="form-control" placeholder="Nazwa grupy">
    </div>

            <div class="form-group">
        <label>Dni tygodnia</label>
        <div id="days-checkboxes" class="days-checkboxes">
          <label class="day-checkbox">
            <input type="checkbox" value="Poniedziałek">
            <span>Poniedziałek</span>
          </label>
          <label class="day-checkbox">
            <input type="checkbox" value="Wtorek">
            <span>Wtorek</span>
          </label>
          <label class="day-checkbox">
            <input type="checkbox" value="Środa">
            <span>Środa</span>
          </label>
          <label class="day-checkbox">
            <input type="checkbox" value="Czwartek">
            <span>Czwartek</span>
          </label>
          <label class="day-checkbox">
            <input type="checkbox" value="Piątek">
            <span>Piątek</span>
          </label>
          <label class="day-checkbox">
            <input type="checkbox" value="Sobota">
            <span>Sobota</span>
          </label>
          <label class="day-checkbox">
            <input type="checkbox" value="Niedziela">
            <span>Niedziela</span>
          </label>
        </div>
        <!-- Hidden field for backward compatibility -->
        <input type="hidden" id="group-day" value="">
      </div>

      <div class="form-group">
        <label for="group-start">Godzina rozpoczęcia</label>
        <input type="time" id="group-start" class="form-control">
    </div>

      <div class="form-group">
        <label for="group-trainer">Trener</label>
        <select id="group-trainer" class="form-control">
          <option value="">Wybierz trenera...</option>
          <!-- Trainers will be loaded here -->
        </select>
    </div>

      <div class="form-actions">
        <button class="btn btn-outline" id="cancel-group-btn">Anuluj</button>
        <button class="btn btn-primary" id="save-group-btn">
          <i class="fas fa-save"></i> <span id="save-group-btn-text">Zapisz grupę</span>
        </button>
        </div>
      </div>
    </div>

  <!-- Create New Month Modal -->
  <div class="modal" id="create-month-modal">
    <div class="modal-content">
      <button class="modal-close" id="close-create-month-modal">
        <i class="fas fa-times"></i>
      </button>
      
      <div class="modal-header">
        <h3>Utwórz nowy miesiąc</h3>
    </div>

      <div class="form-group">
        <label for="new-month-input">Miesiąc (YYYY-MM)</label>
        <input type="text" id="new-month-input" class="form-control" placeholder="np. 2024-12">
    </div>

      <div class="form-actions">
        <button class="btn btn-outline" id="cancel-create-month-btn">Anuluj</button>
        <button class="btn btn-primary" id="save-create-month-btn">
          <i class="fas fa-save"></i> Utwórz miesiąc
        </button>
        </div>
      </div>
    </div>

  <!-- Add Participant Modal -->
  <div class="modal" id="add-participant-modal">
      <div class="modal-content">
      <button class="modal-close" id="close-participant-modal">
          <i class="fas fa-times"></i>
        </button>
      
        <div class="modal-header">
        <h3>Dodaj uczestnika do grupy</h3>
        <p id="participant-group-name" style="color: var(--text-gray); margin-top: 5px;"></p>
        </div>
      
        <div class="form-group">
          <div style="display:flex;gap:8px;margin-bottom:8px;">
            <button type="button" class="btn btn-outline active" id="group-participant-mode-new">Nowy</button>
            <button type="button" class="btn btn-outline" id="group-participant-mode-existing">Istniejący</button>
          </div>

          <!-- existing participant search container -->
          <div id="group-participant-existing-container" style="display:none;">
            <label for="group-participant-search">Wyszukaj istniejącego uczestnika</label>
            <input type="text" id="group-participant-search" class="form-control" placeholder="Wpisz imię, aby wyszukać...">
            <div id="group-participant-search-results" style="background:var(--secondary-bg);border:1px solid var(--border-dark);max-height:160px;overflow:auto;margin-top:6px;border-radius:4px;"></div>
            <input type="hidden" id="group-participant-selected-id">
          </div>

          <!-- new participant container -->
          <div id="group-participant-new-container">
            <label for="participant-name">Imię i nazwisko <span id="group-participant-badge" style="display:none; margin-left:8px; color:var(--success); font-weight:600; font-size:0.9rem;">Istniejący</span></label>
        <input type="text" id="participant-name" class="form-control" placeholder="Imię i nazwisko">
          </div>
        </div>
      
        <div class="form-group">
        <label for="participant-phone">Telefon (opcjonalnie)</label>
        <input type="tel" id="participant-phone" class="form-control" placeholder="+48 123 456 789">
        </div>
      
        <div class="form-group">
        <label for="participant-amount">Kwota za grupę (zł)</label>
        <input type="number" id="participant-amount" class="form-control" placeholder="0.00" step="0.01" min="0">
        </div>
      
        <div class="form-group">
        <label for="participant-rodo">RODO</label>
        <div style="display:flex; align-items:center; gap:8px;">
          <input type="checkbox" id="participant-rodo">
          <label for="participant-rodo" style="color:var(--text-gray);">Wyrażam zgodę na przetwarzanie danych</label>
        </div>
      </div>
      
        <div class="form-actions">
        <button class="btn btn-outline" id="cancel-participant-btn">Anuluj</button>
        <button class="btn btn-primary" id="save-participant-btn">
          <i class="fas fa-save"></i> Dodaj uczestnika
        </button>
        </div>
      </div>
    </div>

  <!-- Lessons Section -->
  <div class="content-box" id="lessons-section" style="display:none;">
    <div class="content-header">
      <h3>Lista lekcji</h3>
      <div style="display:flex; gap:8px; align-items:center;">
        <button class="btn btn-outline" id="lesson-type-private">Lekcje prywatne</button>
        <button class="btn btn-outline" id="lesson-type-pierwszy">Pierwszy taniec</button>
        <button class="btn btn-primary" id="add-lesson-btn">
          <i class="fas fa-plus"></i> Utwórz lekcję
        </button>
      </div>
    </div>

    <div class="month-selector">
      <label for="lessons-month-select">Miesiąc:</label>
      <select id="lessons-month-select" class="form-control">
        <!-- Will be populated -->
      </select>
      <button class="btn btn-outline" id="return-current-month-lessons" title="Wróć do bieżącego miesiąca">
        <i class="fas fa-calendar-day"></i>
      </button>
      </div>
      
    <div id="lessons-list">
      <!-- Lessons will be loaded here -->
    </div>
      </div>

  <!-- Trainers Section -->
  <div class="content-box" id="trainers-section" style="display:none;">
    <div class="content-header">
      <h3>Lista trenerów</h3>
      <button class="btn btn-primary" id="add-trainer-btn">
        <i class="fas fa-plus"></i> Dodaj trenera
      </button>
    </div>

    <div id="trainers-list">
      <!-- Trainers will be loaded here -->
    </div>
  </div>

  <!-- Create Lesson Modal -->
  <div class="modal" id="create-lesson-modal">
    <div class="modal-content">
      <button class="modal-close" id="close-create-lesson-modal"><i class="fas fa-times"></i></button>
      <div class="modal-header">
        <h3>Utwórz lekcję</h3>
      </div>
      
      <div class="form-group">
        <label for="lesson-day">Dzień</label>
        <select id="lesson-day" class="form-control">
          <option>Poniedziałek</option>
          <option>Wtorek</option>
          <option>Środa</option>
          <option>Czwartek</option>
          <option>Piątek</option>
          <option>Sobota</option>
          <option>Niedziela</option>
        </select>
      </div>
      
      <div class="form-group">
        <label for="lesson-day-of-month">Dzień miesiąca</label>
        <input type="number" id="lesson-day-of-month" class="form-control" min="1" max="31" placeholder="np. 15">
      </div>
      
      <div class="form-group">
        <label for="lesson-start">Godzina</label>
        <input type="time" id="lesson-start" class="form-control">
      </div>
      
      <div class="form-group">
        <label for="lesson-trainer">Trener</label>
        <select id="lesson-trainer" class="form-control">
          <option value="">Wybierz trenera...</option>
          <!-- Trainers will be loaded here -->
        </select>
      </div>
      
      <div class="form-group">
        <label for="lesson-amount">Kwota za lekcję (zł)</label>
        <input type="number" id="lesson-amount" class="form-control" step="0.01" min="0">
      </div>
      
      <hr>
      <h4>Uczestnik główny</h4>
      <div class="form-group">
        <div style="display:flex;gap:8px;margin-bottom:8px;">
          <button type="button" class="btn btn-outline" id="participant1-mode-new">Nowy</button>
          <button type="button" class="btn btn-outline" id="participant1-mode-existing">Istniejący</button>
        </div>
        <!-- existing search container -->
        <div id="participant1-existing-container" style="display:none;">
          <label for="participant1-search">Wyszukaj istniejącego uczestnika</label>
          <input type="text" id="participant1-search" class="form-control" placeholder="Wpisz imię, aby wyszukać...">
          <div id="participant1-search-results" style="background:var(--secondary-bg);border:1px solid var(--border-dark);max-height:160px;overflow:auto;margin-top:6px;border-radius:4px;"></div>
          <input type="hidden" id="participant1-selected-id">
        </div>
        <!-- new participant container -->
        <div id="participant1-new-container">
          <label for="participant1-name">Imię i nazwisko <span id="participant1-badge" style="display:none; margin-left:8px; color:var(--success); font-weight:600; font-size:0.9rem;">Istniejący</span></label>
          <input type="text" id="participant1-name" class="form-control">
          <label for="participant1-phone" style="margin-top:8px;">Telefon</label>
          <input type="tel" id="participant1-phone" class="form-control">
        </div>
      </div>
      
      <hr>
      <h4>Partner (opcjonalnie)</h4>
      <div class="form-group">
        <div style="display:flex;gap:8px;margin-bottom:8px;">
          <button type="button" class="btn btn-outline" id="participant2-mode-new">Nowy</button>
          <button type="button" class="btn btn-outline" id="participant2-mode-existing">Istniejący</button>
        </div>
        <!-- existing search container -->
        <div id="participant2-existing-container" style="display:none;">
          <label for="participant2-search">Wyszukaj istniejącego uczestnika</label>
          <input type="text" id="participant2-search" class="form-control" placeholder="Wpisz imię, aby wyszukać...">
          <div id="participant2-search-results" style="background:var(--secondary-bg);border:1px solid var(--border-dark);max-height:160px;overflow:auto;margin-top:6px;border-radius:4px;"></div>
          <input type="hidden" id="participant2-selected-id">
        </div>
        <!-- new participant container -->
        <div id="participant2-new-container">
          <label for="participant2-name">Imię i nazwisko (partner) <span id="participant2-badge" style="display:none; margin-left:8px; color:var(--success); font-weight:600; font-size:0.9rem;">Istniejący</span></label>
          <input type="text" id="participant2-name" class="form-control">
          <label for="participant2-phone" style="margin-top:8px;">Telefon (partner)</label>
          <input type="tel" id="participant2-phone" class="form-control">
        </div>
      </div>
      
      <div class="form-actions">
        <button class="btn btn-outline" id="cancel-create-lesson-btn">Anuluj</button>
        <button class="btn btn-primary" id="save-create-lesson-btn"><i class="fas fa-save"></i> Utwórz lekcję</button>
      </div>
    </div>
  </div>

  <!-- Create Trainer Modal -->
  <div class="modal" id="create-trainer-modal">
    <div class="modal-content">
      <button class="modal-close" id="close-create-trainer-modal"><i class="fas fa-times"></i></button>
      <div class="modal-header">
        <h3>Dodaj trenera</h3>
      </div>

      <div class="form-group">
        <label for="trainer-first-name">Imię</label>
        <input type="text" id="trainer-first-name" class="form-control" placeholder="Wprowadź imię trenera" required>
      </div>

      <div class="form-group">
        <label for="trainer-last-name">Nazwisko</label>
        <input type="text" id="trainer-last-name" class="form-control" placeholder="Wprowadź nazwisko trenera" required>
      </div>

      <div class="form-group">
        <label for="trainer-email">Email</label>
        <input type="email" id="trainer-email" class="form-control" placeholder="Wprowadź email trenera" required>
      </div>

      <div class="form-actions">
        <button class="btn btn-outline" id="cancel-create-trainer-btn">Anuluj</button>
        <button class="btn btn-primary" id="save-create-trainer-btn">
          <i class="fas fa-save"></i> Dodaj trenera
        </button>
      </div>
    </div>
  </div>

  <script type="module">
    import { supabase } from './supabaseClient.js';
    
    // Check if user is admin
    async function checkAdmin() {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        alert("Nie jesteś zalogowany");
        window.location.href = "login.html";
        return;
      }
      
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single();
        
      if (error || !profile || (profile.role !== "admin" && profile.role !== "trainer")) {
        alert("Nie masz uprawnień administratora lub trenera");
        window.location.href = "login.html";
        return;
      }
    }
    
    // Logout function
    document.getElementById("logoutBtn").addEventListener("click", async () => {
      await supabase.auth.signOut();
      window.location.href = "login.html";
    });
    
    // Navigation
    const homeLink = document.getElementById('nav-home');
    const groupsLink = document.getElementById('nav-groups');
    const trainersLink = document.getElementById('nav-trainers');
    const homeSection = document.getElementById('home-section');
    const groupsSection = document.getElementById('groups-section');
    const trainersSection = document.getElementById('trainers-section');
    const groupParticipantsSection = document.getElementById('group-participants-section');
    
    function setActiveNav(section) {
      console.log('setActiveNav wywołane z sekcją:', section, 'currentGroupId przed:', currentGroupId);
      
      if (section === 'home') {
        homeLink.classList.add('active');
        groupsLink.classList.remove('active');
        if (trainersLink) trainersLink.classList.remove('active');
        homeSection.style.display = 'block';
        groupsSection.style.display = 'none';
        if (trainersSection) trainersSection.style.display = 'none';
        groupParticipantsSection.style.display = 'none'; // Hide participants section
        const lessonsSection = document.getElementById('lessons-section');
        if (lessonsSection) lessonsSection.style.display = 'none';
        // Reset to current month when switching to home
        document.getElementById('current-month-select').value = getCurrentMonth();
        loadHomeData();
      } else if (section === 'groups') {
        groupsLink.classList.add('active');
        homeLink.classList.remove('active');
        if (trainersLink) trainersLink.classList.remove('active');
        homeSection.style.display = 'none';
        groupsSection.style.display = 'block';
        if (trainersSection) trainersSection.style.display = 'none';
        groupParticipantsSection.style.display = 'none'; // Hide participants section
        const lessonsSection = document.getElementById('lessons-section');
        if (lessonsSection) lessonsSection.style.display = 'none';
        // Reset to current month when switching to groups
        document.getElementById('groups-month-select').value = getCurrentMonth();
        loadGroups();
      } else if (section === 'participants') {
        groupsLink.classList.remove('active'); // Ensure groups link is not active
        homeLink.classList.remove('active');
        homeSection.style.display = 'none';
        groupsSection.style.display = 'none';
        groupParticipantsSection.style.display = 'block';
        const lessonsSection = document.getElementById('lessons-section');
        if (lessonsSection) lessonsSection.style.display = 'none';
        // Don't reset month selector for participants - keep the current selection
        // No specific data loading needed here, as it's a new section
      } else if (section === 'lessons') {
        // Basic state changes only; detailed lesson view and loading
        // are handled by the wrapper to avoid double-loading.
        groupsLink.classList.remove('active');
        homeLink.classList.remove('active');
        homeSection.style.display = 'none';
        groupsSection.style.display = 'none';
        groupParticipantsSection.style.display = 'none';

        const lessonsSection = document.getElementById('lessons-section');
        if (lessonsSection) {
          lessonsSection.style.display = 'block';
        }
      } else if (section === 'trainers') {
        homeLink.classList.remove('active');
        groupsLink.classList.remove('active');
        if (trainersLink) trainersLink.classList.add('active');
        homeSection.style.display = 'none';
        groupsSection.style.display = 'none';
        if (trainersSection) trainersSection.style.display = 'block';
        groupParticipantsSection.style.display = 'none';
        const lessonsSection = document.getElementById('lessons-section');
        if (lessonsSection) lessonsSection.style.display = 'none';
        loadTrainers();
      }
      
      console.log('setActiveNav zakończone, currentGroupId po:', currentGroupId);
    }
    
    homeLink.addEventListener('click', (e) => {
      e.preventDefault();
      setActiveNav('home');
    });
    
    groupsLink.addEventListener('click', (e) => {
      e.preventDefault();
      setActiveNav('groups');
    });

    if (trainersLink) {
      trainersLink.addEventListener('click', (e) => {
        e.preventDefault();
        setActiveNav('trainers');
      });
    }

    // Home page navigation buttons
    document.getElementById('go-to-groups-btn').addEventListener('click', (e) => {
      e.preventDefault();
      setActiveNav('groups');
    });

    document.getElementById('go-to-lessons-btn').addEventListener('click', (e) => {
      e.preventDefault();
      setActiveNav('lessons');
    });

    // View switch buttons
    const viewGroupDetailsBtn = document.getElementById('view-group-details-btn');
    const viewAttendanceJournalBtn = document.getElementById('view-attendance-journal-btn');

    viewGroupDetailsBtn.addEventListener('click', () => {
      switchGroupView('details');
    });

    viewAttendanceJournalBtn.addEventListener('click', () => {
      switchGroupView('attendance');
    });

    // Helper function to switch between group views
    function switchGroupView(view) {
      // Remove active class from all buttons
      document.querySelectorAll('.view-switch-buttons .btn').forEach(btn => {
        btn.classList.remove('active');
      });

      // Hide all view sections
      document.querySelectorAll('.group-view-section').forEach(section => {
        section.classList.remove('active');
      });

      if (view === 'details') {
        viewGroupDetailsBtn.classList.add('active');
        document.getElementById('group-details-view').classList.add('active');
      } else if (view === 'attendance') {
        viewAttendanceJournalBtn.classList.add('active');
        document.getElementById('attendance-journal-view').classList.add('active');
        loadAttendanceJournal(); // Always reload attendance data when switching to journal view
      }
    }

    const backToGroupsBtn = document.getElementById('back-to-groups-btn');
    backToGroupsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Powrót do grup, resetowanie currentGroupId z:', currentGroupId, 'currentGroupName z:', currentGroupName);
      setActiveNav('groups');
      currentGroupId = null; // Reset current group ID
      currentGroupName = null; // Reset current group name
      currentGroupData = null; // Reset current group data
      console.log('currentGroupId po resecie:', currentGroupId, 'currentGroupName po resecie:', currentGroupName);
    });
    
    document.getElementById('go-to-groups-btn').addEventListener('click', (e) => {
      e.preventDefault();
      setActiveNav('groups');
    });
    
    // Helper function to get current month in YYYY-MM format
    function getCurrentMonth() {
        const now = new Date();
        const yyyy = now.getFullYear();
        const mm = String(now.getMonth() + 1).padStart(2, '0');
      return `${yyyy}-${mm}`;
    }

    // Helper function to format time to hh:mm format
    function formatTimeToHHMM(timeString) {
      if (!timeString) return '';
      // If already in hh:mm format, return as is
      if (/^\d{2}:\d{2}$/.test(timeString)) return timeString;
      // If it's a full datetime string, extract time part
      if (timeString.includes('T') || timeString.includes(' ')) {
        const time = timeString.split('T')[1] || timeString.split(' ')[1];
        if (time) return time.substring(0, 5); // Extract hh:mm from hh:mm:ss
      }
      return timeString;
    }

    // Helper function to format date to dd:mm format
    function formatDateToDDMM(dayOfMonth, monthString) {
      if (!dayOfMonth || !monthString) return '';
      // Extract month number from YYYY-MM format
      const monthNum = parseInt(monthString.split('-')[1]);
      // Format as dd:mm (day of month : month number)
      return `${dayOfMonth.toString().padStart(2, '0')}:${monthNum.toString().padStart(2, '0')}`;
    }
    
    // Helper function to get available months (current + created)
    async function getAvailableMonths() {
      const formatter = new Intl.DateTimeFormat('pl-PL', { month: 'long', year: 'numeric' });
      const options = [];

      try {
        // Get created months from created_months table ordered by creation time (newest first)
        const { data: months, error } = await supabase
          .from('created_months')
          .select('month, created_at')
          .order('created_at', { ascending: false });

        if (!error && months) {
          months.forEach(m => {
            const label = formatter.format(new Date(m.month + '-01'));
            options.push({ value: m.month, label: label });
          });
        }
      } catch (err) {
        console.error('Błąd pobierania miesięcy:', err);
      }

      return options; // newest created first
    }

    // Attach return-to-current-month button handlers (create option if missing)
    (function attachReturnMonthButtons(){
      const ensureAndSelect = (selectId, value) => {
        const sel = document.getElementById(selectId);
        if (!sel) return;
        const exists = Array.from(sel.options).some(o => o.value === value);
        if (!exists) {
          const formatter = new Intl.DateTimeFormat('pl-PL', { month: 'long', year: 'numeric' });
          const label = formatter.format(new Date(value + '-01'));
          const opt = document.createElement('option');
          opt.value = value;
          opt.textContent = label;
          sel.insertBefore(opt, sel.firstChild);
        }
        sel.value = value;
      };

      const btnHome = document.getElementById('return-current-month-home');
      if (btnHome) btnHome.addEventListener('click', async () => {
        const current = getCurrentMonth();
        await populateMonthSelectors();
        ensureAndSelect('current-month-select', current);
        loadHomeData();
      });

      const btnGroups = document.getElementById('return-current-month-groups');
      if (btnGroups) btnGroups.addEventListener('click', async () => {
        const current = getCurrentMonth();
        await populateMonthSelectors();
        ensureAndSelect('groups-month-select', current);
        loadGroups();
      });

      const btnParticipants = document.getElementById('return-current-month-participants');
      if (btnParticipants) btnParticipants.addEventListener('click', async () => {
        const current = getCurrentMonth();
        await populateMonthSelectors();
        ensureAndSelect('participants-month-select', current);
        if (currentGroupName) {
          const newId = await getCurrentGroupId(currentGroupName, current);
          if (newId) {
            currentGroupId = newId;
            await loadGroupParticipants(newId);
          } else {
            // show empty state if group doesn't exist in current month
            const list = document.getElementById('participants-list');
            if (list) list.innerHTML = '<div class="empty-state"><p>Brak uczestników dla tej grupy w tym miesiącu.</p></div>';
          }
        } else if (currentGroupId) {
          await loadGroupParticipants(currentGroupId);
        }
      });

      const btnLessons = document.getElementById('return-current-month-lessons');
      if (btnLessons) btnLessons.addEventListener('click', async () => {
        const current = getCurrentMonth();
        await populateMonthSelectors();
        ensureAndSelect('lessons-month-select', current);
        loadLessons();
      });
    })();
    
    // Populate month selectors
    async function populateMonthSelectors() {
      const months = await getAvailableMonths();
      const currentMonth = getCurrentMonth();

      console.log('Populowanie selektorów miesięcy, currentGroupId:', currentGroupId);

      const render = (selectorId) => {
        const sel = document.getElementById(selectorId);
        if (!sel) return;
        sel.innerHTML = '';
        months.forEach(o => {
          const opt = document.createElement('option');
          opt.value = o.value;
          opt.textContent = o.label;
          sel.appendChild(opt);
        });
        // If current month not present among created months, add it at the end
        if (!Array.from(sel.options).some(x => x.value === currentMonth)) {
          const formatter = new Intl.DateTimeFormat('pl-PL', { month: 'long', year: 'numeric' });
          const opt = document.createElement('option');
          opt.value = currentMonth;
          opt.textContent = formatter.format(new Date(currentMonth + '-01'));
          sel.appendChild(opt);
        }
        // Keep default selection on current month (as before)
        sel.value = currentMonth;
      };

      render('current-month-select');
      render('groups-month-select');
      render('participants-month-select');
      render('attendance-month-select');
      render('lessons-month-select');

      console.log('Selektory miesięcy zaktualizowane');
    }
    
    // Load home page data
    async function loadHomeData() {
      const selectedMonth = document.getElementById('current-month-select').value;
      
      try {
        // Load groups count
        const { data: groups, error: groupsError } = await supabase.rpc('list_groups_month', { p_month: selectedMonth });
        if (!groupsError) {
          document.getElementById('groups-count').textContent = (groups || []).length;
        }

        // Load lessons count
        const { data: lessons, error: lessonsError } = await supabase
          .from('lessons_month')
          .select('id')
          .eq('month', selectedMonth);

        if (!lessonsError) {
          const lessonsCountEl = document.getElementById('lessons-count');
          if (lessonsCountEl) {
            lessonsCountEl.textContent = (lessons || []).length;
          }
        }
        
        // Load participants count (from both groups and lessons)
        const { data: groupParticipants, error: groupParticipantsError } = await supabase
          .from('participants_month')
          .select('id')
          .eq('month', selectedMonth);

        // Try to get lesson participants, but don't fail if table doesn't exist
        let lessonParticipants = null;
        let lessonParticipantsError = null;
        try {
          const result = await supabase
            .from('lesson_participants_month')
            .select('participant_id')
            .eq('month', selectedMonth);
          lessonParticipants = result.data;
          lessonParticipantsError = result.error;
        } catch (err) {
          console.warn('Tabela lesson_participants_month może nie istnieć:', err.message);
        }

        // Combine and deduplicate participant IDs
        const allParticipantIds = new Set();

        if (!groupParticipantsError && groupParticipants) {
          groupParticipants.forEach(p => allParticipantIds.add(p.id));
        }

        if (!lessonParticipantsError && lessonParticipants) {
          lessonParticipants.forEach(p => allParticipantIds.add(p.participant_id));
        }

        document.getElementById('participants-count').textContent = allParticipantIds.size;
        
        // Aggregate payments for overview (groups + lessons)
        const { data: groupPayments, error: groupPayErr } = await supabase
          .from('payments_month')
          .select('participant_id, amount, payment_method, confirmed')
          .eq('month', selectedMonth);

        const { data: lessonPayments, error: lessonPayErr } = await supabase
          .from('lesson_payments_month')
          .select('participant_id, amount, payment_method, confirmed')
          .eq('month', selectedMonth);

        let paidSum = 0, unpaidSum = 0, totalSum = 0;
        const byMethod = {};
        const paidParticipants = new Set();
        const unpaidParticipants = new Set();

        // Process group payments
        if (!groupPayErr && groupPayments) {
          groupPayments.forEach(p => {
            const amt = parseFloat(p.amount || 0);
            totalSum += amt;
            if (p.confirmed) {
              paidSum += amt;
              paidParticipants.add(p.participant_id);
              const m = p.payment_method || 'Inne';
              byMethod[m] = (byMethod[m] || 0) + amt;
            } else {
              unpaidSum += amt;
              unpaidParticipants.add(p.participant_id);
            }
          });
        }

        // Process lesson payments
        if (!lessonPayErr && lessonPayments) {
          lessonPayments.forEach(p => {
            const amt = parseFloat(p.amount || 0);
            totalSum += amt;
            if (p.confirmed) {
              paidSum += amt;
              paidParticipants.add(p.participant_id);
              const m = p.payment_method || 'Lekcje';
              byMethod[m] = (byMethod[m] || 0) + amt;
            } else {
              unpaidSum += amt;
              unpaidParticipants.add(p.participant_id);
            }
          });
        }
    
        // Render paid/unpaid summary on home
        const paidEl = document.getElementById('home-paid');
        const unpaidEl = document.getElementById('home-unpaid');

        // update home totals and breakdown
        const totalEl = document.getElementById('total-amount');
        if (totalEl) totalEl.textContent = totalSum.toFixed(2) + ' zł';

        if (paidEl) {
          let methodsHtml = '';
          Object.keys(byMethod).forEach(k => { methodsHtml += `<div style="color:var(--success); font-size:0.9rem">- ${k}: ${byMethod[k].toFixed(2)} zł</div>`; });
          paidEl.innerHTML = `<div style="color:var(--success); font-weight:700">Zapłacono: ${paidSum.toFixed(2)} zł</div>${methodsHtml}`;
        }

        if (unpaidEl) {
          const unpaidColor = unpaidSum > 0 ? 'var(--error)' : 'var(--success)';
          unpaidEl.innerHTML = `<div style="color:${unpaidColor}; font-weight:700">Niezapłacono: ${unpaidSum.toFixed(2)} zł</div>`;
        }

        // build methods html
        let methodsHtml = '';
        Object.keys(byMethod).forEach(k => methodsHtml += `<div style="color:var(--success); font-size:0.9rem">- ${k}: ${byMethod[k].toFixed(2)} zł</div>`);

        // update home summary block with nicer card
        const homeSummary = document.getElementById('home-summary-block');
        if (homeSummary) {
          const pct = totalSum ? Math.round((paidSum/totalSum)*100) : 0;
          const unpaidColor = unpaidSum > 0 ? 'var(--error)' : 'var(--success)';
          homeSummary.innerHTML = `
            <div style="display:flex;flex-direction:column;gap:8px;min-width:140px;">
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <div style="font-size:0.9rem;color:var(--text-gray)">Zapłacono</div>
                <div style="font-weight:700;color:var(--success)">${paidSum.toFixed(2)} zł</div>
              </div>
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <div style="font-size:0.9rem;color:var(--text-gray)">Niezapłacono</div>
                <div style="font-weight:700;color:${unpaidColor}">${unpaidSum.toFixed(2)} zł</div>
              </div>
              <div style="background:rgba(255,255,255,0.04);height:10px;border-radius:6px;overflow:hidden">
                <div style="width:${pct}%;height:100%;background:linear-gradient(90deg,var(--success),#2bb673)"></div>
              </div>
              <div style="font-size:0.85rem;color:var(--text-gray);">${methodsHtml}</div>
            </div>
          `;
        }

        // draw donut chart for home (green = paid, red = unpaid)
        drawDonut('home-donut', paidSum, unpaidSum, 'rgba(40,167,69,0.95)', 'rgba(220,53,69,0.95)');
        
        } catch (err) {
        console.error('Błąd ładowania danych:', err);
      }
    }
    
    // Create new month functionality
    const createMonthModal = document.getElementById('create-month-modal');
    const createMonthBtn = document.getElementById('create-new-month-btn');
    const closeCreateMonthBtn = document.getElementById('close-create-month-modal');
    const cancelCreateMonthBtn = document.getElementById('cancel-create-month-btn');
    const saveCreateMonthBtn = document.getElementById('save-create-month-btn');
    
    function openCreateMonthModal() {
      createMonthModal.classList.add('active');
      // Set default value to next month
      const now = new Date();
      const next = new Date(now.getFullYear(), now.getMonth() + 1, 1);
      const yyyy = next.getFullYear();
      const mm = String(next.getMonth() + 1).padStart(2, '0');
      document.getElementById('new-month-input').value = `${yyyy}-${mm}`;
    }
    
    function closeCreateMonthModal() {
      createMonthModal.classList.remove('active');
      document.getElementById('new-month-input').value = '';
    }
    
    createMonthBtn.addEventListener('click', openCreateMonthModal);
    closeCreateMonthBtn.addEventListener('click', closeCreateMonthModal);
    cancelCreateMonthBtn.addEventListener('click', closeCreateMonthModal);
    
    saveCreateMonthBtn.addEventListener('click', async () => {
      const monthInput = document.getElementById('new-month-input').value.trim();
      
      if (!monthInput || !/^\d{4}-\d{2}$/.test(monthInput)) {
        alert('Podaj prawidłowy format miesiąca (YYYY-MM)');
        return;
      }
      
      const originalText = saveCreateMonthBtn.innerHTML;
      saveCreateMonthBtn.innerHTML = '<span class="loading"></span> Tworzenie...';
      saveCreateMonthBtn.disabled = true;
      
      try {
        // 1. Save the new month to created_months table
        const { error: monthError } = await supabase
          .from('created_months')
          .insert({ month: monthInput });
        
        if (monthError) throw monthError;
        
        // 2. Copy groups from previous month
        const { error: copyError } = await supabase.rpc('copy_groups_month', {
          p_from_month: monthInput,
          p_to_month: monthInput
        });
        
        if (copyError) throw copyError;

        // 3. Copy participants and their payments from previous month
        const { error: copyParticipantsError } = await supabase.rpc('copy_participants_month', {
          p_from_month: monthInput,
          p_to_month: monthInput
        });

        if (copyParticipantsError) throw copyParticipantsError;
        
        alert(`Miesiąc ${monthInput} został utworzony z grupami i uczestnikami z poprzedniego miesiąca!`);
        closeCreateMonthModal();
        
        // Refresh month selectors
        await populateMonthSelectors();
        
        // Update current selections to new month
        document.getElementById('current-month-select').value = monthInput;
        document.getElementById('groups-month-select').value = monthInput;
        document.getElementById('participants-month-select').value = monthInput;
        
        console.log('Po utworzeniu miesiąca - currentGroupId:', currentGroupId);
        
        // Reload data
        await loadHomeData();
        await loadGroups();
        
      } catch (err) {
        alert('Błąd tworzenia miesiąca: ' + (err.message || 'Nieznany'));
      } finally {
        saveCreateMonthBtn.disabled = false;
        saveCreateMonthBtn.innerHTML = originalText;
      }
    });
    
    // Month selector change handlers
    document.getElementById('current-month-select').addEventListener('change', loadHomeData);
    document.getElementById('groups-month-select').addEventListener('change', loadGroups);
    // lessons month selector should reload lessons for current lesson type
    const lessonsMonthSelectEl = document.getElementById('lessons-month-select');
    if (lessonsMonthSelectEl) lessonsMonthSelectEl.addEventListener('change', () => loadLessons(currentLessonType));

    const participantsMonthSelect = document.getElementById('participants-month-select');
    participantsMonthSelect.addEventListener('change', async () => {
      console.log('Zmiana miesiąca w uczestnikach, currentGroupId:', currentGroupId, 'currentGroupName:', currentGroupName);
      
      if (currentGroupName) {
        const selectedMonth = document.getElementById('participants-month-select').value;
        const newGroupId = await getCurrentGroupId(currentGroupName, selectedMonth);
        
        if (newGroupId) {
          console.log('Znaleziono nowe ID grupy dla miesiąca', selectedMonth, ':', newGroupId);
          currentGroupId = newGroupId;
          loadGroupParticipants(newGroupId);
        } else {
          console.error('Nie znaleziono grupy o nazwie', currentGroupName, 'w miesiącu', selectedMonth);
          groupParticipantsList.innerHTML = '<div class="empty-state"><p>Grupa nie istnieje w tym miesiącu</p></div>';
        }
      } else {
        console.error('Brak currentGroupName przy zmianie miesiąca');
        groupParticipantsList.innerHTML = '<div class="empty-state"><p>Błąd: Brak nazwy grupy</p></div>';
      }
    });

    // Modal functionality for groups
    const addGroupModal = document.getElementById('add-group-modal');
    const addGroupBtn = document.getElementById('add-group-btn');
    const addFirstGroupBtn = document.getElementById('add-first-group');
    const closeModalBtn = document.getElementById('close-group-modal');
    const cancelGroupBtn = document.getElementById('cancel-group-btn');
    const saveGroupBtn = document.getElementById('save-group-btn');
    const groupsList = document.getElementById('groups-list');
    const emptyState = document.getElementById('emptyState');

    // Track if we're editing or creating
    let editingGroupId = null;

    function openModal() {
      editingGroupId = null;
      const modalTitle = document.getElementById('group-modal-title');
      if (modalTitle) modalTitle.textContent = 'Dodaj nową grupę';
      addGroupModal.classList.add('active');
      resetForm();
    }

    function openEditModal(groupData) {
      editingGroupId = groupData.id;
      const modalTitle = document.getElementById('group-modal-title');
      if (modalTitle) modalTitle.textContent = 'Edytuj grupę';
      const saveBtnText = document.getElementById('save-group-btn-text');
      if (saveBtnText) saveBtnText.textContent = 'Zapisz zmiany';
      addGroupModal.classList.add('active');

      // Fill form with existing data
      const nameField = document.getElementById('group-name');
      const startField = document.getElementById('group-start');
      const trainerField = document.getElementById('group-trainer');

      if (nameField) nameField.value = groupData.name || '';
      if (startField) startField.value = groupData.start_time ? groupData.start_time.substring(0, 5) : '';
      if (trainerField) trainerField.value = groupData.trainer || '';

      // Handle days - support both single day and JSON string with multiple days
      let days = [];
      if (groupData.day) {
        try {
          // Try to parse as JSON array
          const parsedDays = JSON.parse(groupData.day);
          if (Array.isArray(parsedDays)) {
            days = parsedDays;
          } else {
            // It's a single day string
            days = [groupData.day];
          }
        } catch (e) {
          // It's a single day string
          days = [groupData.day];
        }
      }
      setSelectedDays(days);
    }

    function closeModal() {
      addGroupModal.classList.remove('active');
      editingGroupId = null;
      resetForm();
    }

    function resetForm() {
      const nameField = document.getElementById('group-name');
      const dayField = document.getElementById('group-day');
      const startField = document.getElementById('group-start');
      const trainerField = document.getElementById('group-trainer');
      const saveBtnText = document.getElementById('save-group-btn-text');

      if (nameField) nameField.value = '';
      if (dayField) dayField.value = '';
      if (startField) startField.value = '';
      if (trainerField) trainerField.value = '';
      if (saveBtnText) saveBtnText.textContent = 'Zapisz grupę';

      // Reset all day checkboxes
      const checkboxes = document.querySelectorAll('#days-checkboxes input[type="checkbox"]');
      checkboxes.forEach(checkbox => checkbox.checked = false);
    }

    // Helper function to get selected days
    function getSelectedDays() {
      const checkboxes = document.querySelectorAll('#days-checkboxes input[type="checkbox"]:checked');
      return Array.from(checkboxes).map(checkbox => checkbox.value);
    }

    // Helper function to set selected days
    function setSelectedDays(days) {
      const checkboxes = document.querySelectorAll('#days-checkboxes input[type="checkbox"]');
      checkboxes.forEach(checkbox => {
        checkbox.checked = days.includes(checkbox.value);
      });
    }
    
    addGroupBtn.addEventListener('click', openModal);
    addFirstGroupBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);
    cancelGroupBtn.addEventListener('click', closeModal);

    // Save group function (add new or update existing group)
    saveGroupBtn.addEventListener('click', async () => {
      const nameField = document.getElementById('group-name');
      const startField = document.getElementById('group-start');
      const trainerField = document.getElementById('group-trainer');

      const name = nameField ? nameField.value.trim() : '';
      const start = startField ? startField.value : '';
      const trainer = trainerField ? trainerField.value.trim() : '';
      const selectedDays = getSelectedDays();

      if (!name || selectedDays.length === 0 || !start || !trainer) {
        alert('Podaj nazwę, zaznacz przynajmniej jeden dzień tygodnia, godzinę startu i trenera');
        return;
      }

      const selectedMonth = document.getElementById('groups-month-select').value;

      const originalText = saveGroupBtn.innerHTML;
      saveGroupBtn.innerHTML = '<span class="loading"></span> Zapisywanie...';
      saveGroupBtn.disabled = true;

      try {
        if (editingGroupId) {
          // Update existing group - store all selected days as JSON string
          const { error } = await supabase
            .from('groups_month')
            .update({
              name: name,
              day: selectedDays.length === 1 ? selectedDays[0] : JSON.stringify(selectedDays),
              start_time: start,
              trainer: trainer
            })
            .eq('id', editingGroupId)
            .eq('month', selectedMonth);

          if (error) throw error;

          closeModal();
          await loadGroups();
          await loadHomeData();
        } else {
          // Add new group - store all selected days as JSON string
          const resp = await supabase.rpc('insert_group_month', {
            p_month: selectedMonth,
            p_name: name,
            p_day: selectedDays.length === 1 ? selectedDays[0] : JSON.stringify(selectedDays),
            p_start_time: start,
            p_trainer: trainer
          });

          if (resp.error) throw resp.error;

          closeModal();
          await loadGroups();
          await loadHomeData();
        }
      } catch (err) {
        alert('Błąd ' + (editingGroupId ? 'aktualizacji' : 'dodawania') + ' grupy: ' + (err.message || 'Nieznany'));
      } finally {
        saveGroupBtn.disabled = false;
        saveGroupBtn.innerHTML = originalText;
      }
    });
    
    // Load groups for selected month
    async function loadGroups() {
      console.log('=== loadGroups called ===');
      groupsList.innerHTML = '<div class="empty-state"><span class="loading"></span><p>Ładowanie grup...</p></div>';

      try {
        const selectedMonth = document.getElementById('groups-month-select').value;
        console.log('Selected month for groups:', selectedMonth);

        if (!selectedMonth) {
          console.log('No month selected, skipping loadGroups');
          groupsList.innerHTML = '<div class="empty-state"><p>Wybierz miesiąc aby zobaczyć grupy</p></div>';
          return;
        }

        const { data, error } = await supabase.rpc('list_groups_month', { p_month: selectedMonth });
        console.log('Groups data received:', data);
        console.log('First group trainer field:', data?.[0]?.trainer);
          
        if (error) {
          console.error('Błąd wczytywania grup:', error);
          groupsList.innerHTML = '<div class="empty-state"><p>Błąd wczytywania grup: ' + error.message + '</p></div>';
          return;
        }
        
        if (!data || data.length === 0) {
          groupsList.innerHTML = `<div class="empty-state"><p>Brak grup dla miesiąca ${selectedMonth}.</p></div>`;
          return;
        }
        
        // Hide empty state
        emptyState.style.display = 'none';
        
        // Prepare payments summary per group for this month
        const groupIds = data.map(g => g.id);
        let paymentsAll = [];
        if (groupIds.length > 0) {
          const { data: payData, error: payErr } = await supabase
            .from('payments_month')
            .select('group_id, confirmed, amount')
            .eq('month', selectedMonth)
            .in('group_id', groupIds);
          if (!payErr && payData) paymentsAll = payData;
        }

        // Build lookup: counts and sums per group
        const groupSummaryLookup = {};
        groupIds.forEach(id => groupSummaryLookup[id] = { paidCount:0, unpaidCount:0, paidSum:0, unpaidSum:0 });
        paymentsAll.forEach(p => {
          const s = groupSummaryLookup[p.group_id];
          if (!s) return;
          if (p.confirmed) { s.paidCount += 1; s.paidSum += parseFloat(p.amount || 0); }
          else { s.unpaidCount += 1; s.unpaidSum += parseFloat(p.amount || 0); }
        });

        // Get all trainer IDs from groups data
        const rawTrainerValues = data.map(g => g.trainer);
        console.log('Raw trainer values from groups:', rawTrainerValues);

        const trainerIds = [...new Set(data.map(g => g.trainer).filter(id => id && id !== 'null' && id !== ''))];
        const trainerLookup = {};

        console.log('Filtered trainer IDs found in groups:', trainerIds);
        console.log('Number of groups with trainers:', trainerIds.length);

        // Separate UUIDs from names
        const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        const uuidTrainers = trainerIds.filter(id => uuidPattern.test(id));
        const nameTrainers = trainerIds.filter(id => !uuidPattern.test(id));

        console.log('UUID trainers:', uuidTrainers);
        console.log('Name trainers:', nameTrainers);

        // Try to load trainers by UUID first
        if (uuidTrainers.length > 0) {
          try {
            const { data: trainers, error } = await supabase
              .from('profiles')
              .select('id, first_name, last_name, email')
              .in('id', uuidTrainers);

            console.log('Loaded UUID trainers from database:', trainers);

            if (!error && trainers) {
              trainers.forEach(trainer => {
                const fullName = (trainer.first_name || trainer.last_name)
                  ? `${trainer.first_name || ''} ${trainer.last_name || ''}`.trim()
                  : trainer.email;
                trainerLookup[trainer.id] = fullName;
                console.log(`Mapped trainer ID "${trainer.id}" -> "${fullName}"`);
              });
            } else {
              console.error('Error loading UUID trainers:', error);
            }
          } catch (error) {
            console.error('Błąd ładowania UUID trenerów:', error);
          }
        }

        // Try to load trainers by name
        if (nameTrainers.length > 0) {
          try {
            // Load all trainers and try to match by name
            const { data: allTrainers, error } = await supabase
              .from('profiles')
              .select('id, first_name, last_name, email')
              .eq('role', 'trainer');

            console.log('Loaded all trainers for name matching:', allTrainers);

            if (!error && allTrainers) {
              nameTrainers.forEach(nameToFind => {
                // Try to find trainer by full name
                const foundTrainer = allTrainers.find(trainer => {
                  const fullName = (trainer.first_name || trainer.last_name)
                    ? `${trainer.first_name || ''} ${trainer.last_name || ''}`.trim()
                    : trainer.email;
                  return fullName === nameToFind || trainer.first_name === nameToFind || trainer.last_name === nameToFind;
                });

                if (foundTrainer) {
                  const fullName = (foundTrainer.first_name || foundTrainer.last_name)
                    ? `${foundTrainer.first_name || ''} ${foundTrainer.last_name || ''}`.trim()
                    : foundTrainer.email;
                  trainerLookup[nameToFind] = fullName;
                  console.log(`Mapped trainer name "${nameToFind}" -> "${fullName}"`);
                } else {
                  // If no match found, keep the name as is
                  trainerLookup[nameToFind] = nameToFind;
                  console.log(`No match found for "${nameToFind}", keeping as is`);
                }
              });
            }
          } catch (error) {
            console.error('Błąd ładowania trenerów po nazwach:', error);
          }
        }


        console.log('Final trainer lookup:', trainerLookup);
        console.log('Trainer lookup size:', Object.keys(trainerLookup).length);

        // Clear and render groups grouped by day
        groupsList.innerHTML = '';
        const daysOrder = ['Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota','Niedziela'];
        const groupsByDay = {};

        // Helper function to get all days for a group
        function getGroupDays(group) {
          if (!group.day) return [];
          try {
            const parsed = JSON.parse(group.day);
            return Array.isArray(parsed) ? parsed : [group.day];
          } catch (e) {
            return [group.day];
          }
        }

        // Group groups by their days - each group can appear under multiple days
        data.forEach(g => {
          const groupDays = getGroupDays(g);
          // Use first day for grouping in the list
          const primaryDay = groupDays[0] || 'Poniedziałek';
          if (!groupsByDay[primaryDay]) groupsByDay[primaryDay] = [];
          groupsByDay[primaryDay].push({
            ...g,
            allDays: groupDays // Store all days for display
          });
        });
        // For each day in order, if we have groups, render a header and the groups sorted by start_time
        daysOrder.forEach(dayName => {
          const list = groupsByDay[dayName];
          if (!list || list.length === 0) return;
          // sort by start_time
          list.sort((a,b) => (a.start_time || '').localeCompare(b.start_time || ''));
          const dayHeader = document.createElement('div');
          dayHeader.className = 'day-header';
          dayHeader.innerHTML = `<h3>${dayName}</h3>`;
          groupsList.appendChild(dayHeader);
          list.forEach(group => {
          const groupCard = document.createElement('div');
          groupCard.className = 'group-card';
            groupCard.style.cursor = 'pointer';
            const sums = groupSummaryLookup[group.id] || { paidCount:0, unpaidCount:0, paidSum:0, unpaidSum:0 };
            const paidText = `<span style="color: var(--success); font-weight:600; margin-left:10px;">Zapłacili: ${sums.paidCount}</span>`;
            const unpaidColor = sums.unpaidCount > 0 ? 'var(--error)' : 'var(--success)';
            const unpaidText = `<span style="color: ${unpaidColor}; font-weight:600; margin-left:10px;">Nie zapłacili: ${sums.unpaidCount}</span>`;
          // Format days display
          const daysToShow = group.allDays || [group.day];
          const daysText = daysToShow.length === 1
            ? daysToShow[0]
            : daysToShow.slice(0, 3).join(', ') + (daysToShow.length > 3 ? '...' : '');

          console.log(`Group ${group.name}:`, {
            trainer: group.trainer,
            trainerType: typeof group.trainer,
            lookupResult: trainerLookup[group.trainer],
            allLookupKeys: Object.keys(trainerLookup),
            trainerLookupExists: !!trainerLookup,
            trainerLookupLength: Object.keys(trainerLookup).length
          });

          groupCard.innerHTML = `
              <h4 style="display:flex; align-items:center; justify-content:space-between; gap:10px;"><span>${group.name}</span><span style="font-size:0.9rem">${paidText}${unpaidText}</span></h4>
            <div class="group-detail">
              <i class="fas fa-calendar-day"></i>
                <span>${daysText}, ${formatTimeToHHMM(group.start_time)}</span>
            </div>
            <div class="group-detail">
              <i class="fas fa-user-tie"></i>
              <span id="trainer-${group.id}">${trainerLookup[group.trainer] || group.trainer || 'Nieprzypisany'}</span>
            </div>
            <div class="group-actions">
              <button class="btn btn-outline edit-btn" data-id="${group.id}">
                <i class="fas fa-edit"></i>
              </button>
              <button class="btn btn-outline delete-btn" data-id="${group.id}">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;
            // click handler
            groupCard.addEventListener('click', (e) => {
              if (e.target.closest('.group-actions')) return;
              openGroupParticipantsPage(group);
              setActiveNav('participants');
            });
            // action buttons
            groupCard.querySelector('.edit-btn').addEventListener('click', (e) => {
              e.stopPropagation();
              openEditModal(group);
            });
            groupCard.querySelector('.delete-btn').addEventListener('click', async (e) => { e.stopPropagation(); if (!confirm('Usunąć grupę?')) return; /* reuse existing delete logic by triggering click on original button */ const btn = e.currentTarget; btn.disabled = true; try { /* call same handler code inline to avoid duplication */ const selectedMonth = document.getElementById('groups-month-select').value; const { error: payErr } = await supabase.from('payments_month').delete().match({ month: selectedMonth, group_id: group.id }); if (payErr) throw payErr; const { error: pgErr } = await supabase.from('participant_groups_month').delete().match({ month: selectedMonth, group_id: group.id }); if (pgErr) throw pgErr; const { data: participantsAll, error: pAllErr } = await supabase.from('participants_month').select('id').eq('month', selectedMonth); if (pAllErr) throw pAllErr; const { data: assoc, error: assocErr } = await supabase.from('participant_groups_month').select('participant_id').eq('month', selectedMonth); if (assocErr) throw assocErr; const assocSet = new Set((assoc || []).map(a => a.participant_id)); const orphanIds = (participantsAll || []).map(p => p.id).filter(id => !assocSet.has(id)); if (orphanIds.length > 0) { const { error: delOrphansErr } = await supabase.from('participants_month').delete().in('id', orphanIds).eq('month', selectedMonth); if (delOrphansErr) throw delOrphansErr; } const { error } = await supabase.from('groups_month').delete().match({ id: group.id, month: selectedMonth }); if (error) throw error; await loadGroups(); await loadHomeData(); } catch (err) { alert('Błąd usuwania grupy: ' + (err.message || 'Nieznany')); } finally { btn.disabled = false; } });
          groupsList.appendChild(groupCard);
          });
        });
         
      } catch (err) {
        console.error('Nieoczekiwany błąd:', err);
        groupsList.innerHTML = '<div class="empty-state"><p>Wystąpił nieoczekiwany błąd: ' + err.message + '</p></div>';
      }
    }

    // Modal functionality for group participants
    const groupParticipantsList = document.getElementById('participants-list');
    const groupParticipantsName = document.getElementById('group-participants-name');
    const addParticipantModal = document.getElementById('add-participant-modal');
    const closeAddParticipantModalBtn = document.getElementById('close-participant-modal');
    const cancelParticipantBtn = document.getElementById('cancel-participant-btn');
    const saveParticipantBtn = document.getElementById('save-participant-btn');
    const participantNameInput = document.getElementById('participant-name');
    const participantPhoneInput = document.getElementById('participant-phone');
    const participantAmountInput = document.getElementById('participant-amount');
    const participantGroupNameSpan = document.getElementById('participant-group-name');
    
    let currentGroupId = null; // Store current group ID for adding participants
    let currentGroupData = null; // Store current group data for attendance journal
    let isEditingParticipant = false; // Track if we're editing or adding a participant
    let editingParticipantId = null; // Store participant ID when editing

    function openGroupParticipantsPage(group) {
      if (!group || !group.id) {
        console.error('Nieprawidłowy obiekt grupy:', group);
          return;
        }
      
      console.log('Otwieranie strony uczestników dla grupy:', group.id, group.name);
      currentGroupId = group.id; // Store group ID
      currentGroupName = group.name; // Store group name
      currentGroupData = group; // Store full group data for attendance journal
      console.log('Ustawiono currentGroupId:', currentGroupId, 'currentGroupName:', currentGroupName, 'currentGroupData:', currentGroupData);
      groupParticipantsName.textContent = group.name;

      // Display all days for the group
      const daysElement = document.getElementById('group-participants-days');
      if (daysElement) {
        const allDays = group.allDays || [group.day];
        if (allDays.length === 1) {
          daysElement.textContent = `Dzień: ${allDays[0]}`;
        } else {
          daysElement.textContent = `Dni: ${allDays.join(', ')}`;
        }
      }

      // Set participants month selector to match groups month selector
      const groupsMonth = document.getElementById('groups-month-select').value;
      document.getElementById('participants-month-select').value = groupsMonth;

      // Load participants for the current group and month
      loadGroupParticipants(group.id);

      // If attendance journal view is active, reload it for the new group
      const attendanceJournalView = document.getElementById('attendance-journal-view');
      if (attendanceJournalView && attendanceJournalView.style.display !== 'none') {
        loadAttendanceJournal();
      }
    }

    const addParticipantToGroupBtn = document.getElementById('add-participant-to-group-btn');
    addParticipantToGroupBtn.addEventListener('click', () => {
      const groupName = groupParticipantsName.textContent;
      participantGroupNameSpan.textContent = `Dodaj uczestnika do grupy: ${groupName}`;
      openAddParticipantModal();
    });

    closeAddParticipantModalBtn.addEventListener('click', closeAddParticipantModal);
    cancelParticipantBtn.addEventListener('click', closeAddParticipantModal);

    function openAddParticipantModal() {
      isEditingParticipant = false;
      editingParticipantId = null;
      addParticipantModal.classList.add('active');
      participantNameInput.value = '';
      participantPhoneInput.value = '';
      participantAmountInput.value = '';
      document.getElementById('participant-rodo').checked = false;

      // Reset modal title and button
      document.querySelector('#add-participant-modal .modal-header h3').textContent = 'Dodaj uczestnika do grupy';
      document.getElementById('save-participant-btn').innerHTML = '<i class="fas fa-save"></i> Dodaj uczestnika';

      // Reset participant mode buttons
      document.getElementById('group-participant-mode-new').classList.add('active');
      document.getElementById('group-participant-mode-existing').classList.remove('active');

      // Show new participant form, hide existing search
      document.getElementById('group-participant-new-container').style.display = 'block';
      document.getElementById('group-participant-existing-container').style.display = 'none';

      // Reset existing participant search
      document.getElementById('group-participant-search').value = '';
      document.getElementById('group-participant-selected-id').value = '';
      document.getElementById('group-participant-search-results').innerHTML = '';
      document.getElementById('group-participant-badge').style.display = 'none';
    }

    function editParticipant(participantId, name, phone, payment) {
      isEditingParticipant = true;
      editingParticipantId = participantId;
      addParticipantModal.classList.add('active');

      // Fill form with participant data
      participantNameInput.value = name || '';
      participantPhoneInput.value = phone || '';
      participantAmountInput.value = payment ? payment.amount || '' : '';
      document.getElementById('participant-rodo').checked = true; // Assume RODO is already accepted for existing participants

      // Update modal title and button
      document.querySelector('#add-participant-modal .modal-header h3').textContent = 'Edytuj uczestnika';
      document.getElementById('save-participant-btn').innerHTML = '<i class="fas fa-save"></i> Zapisz zmiany';

      // Hide participant mode selection for editing (we're editing existing participant)
      document.getElementById('group-participant-new-container').style.display = 'block';
      document.getElementById('group-participant-existing-container').style.display = 'none';
      document.getElementById('group-participant-mode-new').style.display = 'none';
      document.getElementById('group-participant-mode-existing').style.display = 'none';
    }

    function closeAddParticipantModal() {
      addParticipantModal.classList.remove('active');
      // Reset editing state
      isEditingParticipant = false;
      editingParticipantId = null;
      // Restore participant mode buttons visibility
      document.getElementById('group-participant-mode-new').style.display = 'inline-block';
      document.getElementById('group-participant-mode-existing').style.display = 'inline-block';
    }

    saveParticipantBtn.addEventListener('click', async () => {
      if (!currentGroupId) {
        alert('Błąd: Brak ID grupy');
        return;
      }
      
      const selectedMonth = document.getElementById('participants-month-select').value;
      const name = participantNameInput.value.trim();
      const phone = participantPhoneInput.value.trim();
      const amount = parseFloat(participantAmountInput.value) || 0;
      const selectedParticipantId = groupParticipantSelectedId.value;
      const isExistingParticipant = !!selectedParticipantId;

      if (!name) {
        alert('Podaj imię i nazwisko uczestnika');
          return;
      }

      const originalText = saveParticipantBtn.innerHTML;
      saveParticipantBtn.innerHTML = '<span class="loading"></span> Zapisywanie...';
      saveParticipantBtn.disabled = true;

      try {
        let participantId;

        if (isEditingParticipant) {
          // Edit existing participant
          participantId = editingParticipantId;
          console.log('Editing participant:', participantId);

          // Update participant data
          const { error: updateError } = await supabase
            .from('participants_month')
            .update({
              name: name,
              phone: phone || null
            })
            .eq('id', participantId)
            .eq('month', selectedMonth);

          if (updateError) throw updateError;

          // Update payment if amount changed
          if (amount > 0) {
            // Check if payment already exists
            const { data: existingPayment, error: paymentCheckError } = await supabase
              .from('payments_month')
              .select('id, amount')
              .eq('month', selectedMonth)
              .eq('participant_id', participantId)
              .eq('group_id', currentGroupId)
              .single();

            if (paymentCheckError && paymentCheckError.code !== 'PGRST116') {
              throw paymentCheckError;
            }

            if (existingPayment) {
              // Update existing payment
              const { error: paymentUpdateError } = await supabase
                .from('payments_month')
                .update({ amount: amount })
                .eq('id', existingPayment.id);

              if (paymentUpdateError) throw paymentUpdateError;
            } else {
              // Create new payment
              const { error: paymentError } = await supabase.rpc('insert_payment_month', {
                p_month: selectedMonth,
                p_participant_id: participantId,
                p_group_id: currentGroupId,
                p_amount: amount,
                p_payment_method: null
              });

              if (paymentError) throw paymentError;
            }
          }
        } else if (isExistingParticipant) {
          // Use existing participant
          participantId = selectedParticipantId;
          console.log('Using existing participant:', participantId);
        } else {
          // 1. Add new participant
        const rodoValue = !!document.getElementById('participant-rodo').checked;
          const { data: newParticipantId, error: participantError } = await supabase.rpc('insert_participant_month', {
          p_month: selectedMonth,
          p_name: name,
          p_email: null,
          p_phone: phone || null,
          p_rodo: rodoValue
        });

        if (participantError) throw participantError;
          participantId = newParticipantId;

        // Ensure RODO persisted even if RPC signature mismatch: update directly
        try {
          const { error: rodoErr } = await supabase
            .from('participants_month')
            .update({ rodo: rodoValue })
            .eq('id', participantId);
          if (rodoErr) console.warn('RODO direct update failed:', rodoErr.message || rodoErr);
        } catch (e) {
          console.warn('RODO update exception:', e);
          }
        }



        // 2. Add participant to group (only for new participants)
        if (!isEditingParticipant) {
          const { error: groupError } = await supabase.rpc('add_participant_to_group_month', {
            p_month: selectedMonth,
            p_participant_id: participantId,
            p_group_id: currentGroupId
          });

          if (groupError) throw groupError;
        }

        // 3. Add payment record (only for new participants)
        if (!isEditingParticipant && amount > 0) {
          const { error: paymentError } = await supabase.rpc('insert_payment_month', {
            p_month: selectedMonth,
            p_participant_id: participantId,
            p_group_id: currentGroupId,
            p_amount: amount,
            p_payment_method: null
          });

          if (paymentError) throw paymentError;
        }

        closeAddParticipantModal();
        await loadGroupParticipants(currentGroupId);
        await loadHomeData(); // Refresh home page data
        // Removed success alert per user's request
      } catch (err) {
        alert('Błąd ' + (isEditingParticipant ? 'edycji' : 'dodawania') + ' uczestnika: ' + (err.message || 'Nieznany'));
      } finally {
        saveParticipantBtn.disabled = false;
        saveParticipantBtn.innerHTML = originalText;
      }
    });

    async function loadGroupParticipants(groupId) {
      if (!groupId) {
        console.error('Brak ID grupy');
          return;
        }
      
      const selectedMonth = document.getElementById('participants-month-select').value;
      console.log('Ładowanie uczestników dla grupy:', groupId, 'miesiąc:', selectedMonth, 'currentGroupName:', currentGroupName);
      
      groupParticipantsList.innerHTML = '<div class="empty-state"><span class="loading"></span><p>Ładowanie uczestników...</p></div>';
      
      try {
        // Get participants for this group in this month
        const { data: participants, error: participantsError } = await supabase
          .from('participant_groups_month')
          .select(`
            participant_id,
            participants_month (
              id, name, phone, rodo
            )
          `)
          .eq('month', selectedMonth)
          .eq('group_id', groupId);

        if (participantsError) throw participantsError;

        console.log('Znaleziono uczestników:', participants);

        // Get payments for these participants (and overall group payments)
        const participantIds = participants.map(p => p.participant_id);
        const { data: payments, error: paymentsError } = await supabase
          .from('payments_month')
          .select('participant_id, amount, payment_method, confirmed, comment')
          .eq('month', selectedMonth)
          .eq('group_id', groupId)
          .in('participant_id', participantIds || []);

        if (paymentsError) throw paymentsError;
        
        console.log('Znaleziono płatności:', payments);

        // Create payment lookup
        const paymentLookup = {};
        payments.forEach(p => {
          paymentLookup[p.participant_id] = p;
        });

        // Build summary for this group
        const paidSum = payments.filter(p => p.confirmed).reduce((s, p) => s + parseFloat(p.amount||0), 0);
        const unpaidSum = payments.filter(p => !p.confirmed).reduce((s, p) => s + parseFloat(p.amount||0), 0);
        const totalSum = paidSum + unpaidSum;
        const byMethod = payments.filter(p => p.confirmed).reduce((acc,p) => { const m = p.payment_method || 'Inne'; acc[m] = (acc[m]||0) + parseFloat(p.amount||0); return acc; }, {});

        const summaryEl = document.getElementById('group-participants-summary');
        if (summaryEl) {
          let methodsHtmlG = '';
          Object.keys(byMethod).forEach(k => { methodsHtmlG += `<div style="color:var(--success); font-size:0.9rem">- ${k}: ${byMethod[k].toFixed(2)} zł</div>`; });
          const unpaidColor = unpaidSum > 0 ? 'var(--error)' : 'var(--success)';
          summaryEl.innerHTML = `
            <div style="text-align:right; min-width:180px;">
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <div style="font-size:0.95rem;color:var(--text-gray)">Zapłacono</div>
                <div style="font-weight:700;color:var(--success)">${paidSum.toFixed(2)} zł</div>
        </div>
              <div style="margin-top:6px;">${methodsHtmlG}</div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px;">
                <div style="font-size:0.95rem;color:var(--text-gray)">Niezapłacono</div>
                <div style="font-weight:700;color:${unpaidColor}">${unpaidSum.toFixed(2)} zł</div>
        </div>
              <div style="color:var(--text-gray);margin-top:6px">Razem: ${totalSum.toFixed(2)} zł</div>
        </div>
          `;
          // draw donut for group: paid vs unpaid
          drawDonut('group-donut', paidSum, unpaidSum, 'rgba(40,167,69,0.95)', 'rgba(220,53,69,0.95)');
        }

        if (!participants || participants.length === 0) {
          groupParticipantsList.innerHTML = '<div class="empty-state"><p>Brak uczestników dla tej grupy w miesiącu ' + selectedMonth + '.</p></div>';
          return;
        }

        groupParticipantsList.innerHTML = '';
        
        participants.forEach((participant, index) => {
          const participantData = participant.participants_month;
          const payment = paymentLookup[participant.participant_id] || {};
          const amount = payment.amount || 0;
          
          const participantCard = document.createElement('div');
          participantCard.className = 'group-card'; // Reusing group-card style
          participantCard.style.cursor = 'default'; // No pointer for participant cards
          
          // Use the same subtle background as other group cards; avoid aggressive red/green inline styles
          participantCard.innerHTML = `
            <div class="participant-row ${payment && payment.confirmed ? 'payment-paid' : 'payment-unpaid'}" style="display: flex; align-items: center; gap: 15px; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
              <div class="participant-number" style="min-width: 30px; text-align: center; font-weight: bold; color: var(--text-gray);">${index + 1}.</div>
              <div class="participant-info" style="flex: 0 0 220px; overflow: hidden; text-overflow: ellipsis;">
                <div style="font-weight: bold; margin-bottom: 5px;">${participantData.name}</div>
                <div style="color: var(--text-gray); font-size: 0.9rem;">${participantData.phone || 'Brak'}</div>
              </div>
              
              <div class="amount-section" style="min-width: 120px;">
                <div style="display: flex; align-items: center; gap: 5px;">
                  <input type="number" class="amount-input form-control" value="${amount}" step="0.01" min="0" 
                         data-participant-id="${participant.participant_id}" data-group-id="${groupId}" 
                         style="width: 100px; text-align: center;">
                  <span style="font-size: 0.9rem; color: var(--text-gray);">zł</span>
              </div>
              </div>
              
              <div class="payment-method-section" style="min-width: 150px;">
                <select class="payment-method-select form-control" data-participant-id="${participant.participant_id}" style="width: 130px;">
                  <option value="">Sposób płatności</option>
                  <option value="karta" ${payment.payment_method === 'karta' ? 'selected' : ''}>Karta</option>
                  <option value="przelew" ${payment.payment_method === 'przelew' ? 'selected' : ''}>Przelew</option>
                  <option value="gotowka" ${payment.payment_method === 'gotowka' ? 'selected' : ''}>Gotówka</option>
                </select>
              </div>
              
              <div class="comment-section" style="flex: 1 1 200px; overflow: hidden; text-overflow: ellipsis;">
                <input type="text" class="payment-comment form-control" placeholder="Komentarz" 
                       value="${payment.comment || ''}" data-participant-id="${participant.participant_id}" 
                       style="width: 100%;">
              </div>
              <div style="min-width:110px; display:flex; align-items:center; gap:8px;">
                <label style="color:var(--text-gray); font-size:0.85rem;">RODO</label>
                <input type="checkbox" class="rodo-checkbox" data-participant-id="${participant.participant_id}" ${participantData.rodo ? 'checked' : ''}>
              </div>
              
              <div class="action-buttons" style="display: flex; gap: 10px; min-width: 120px;">
                ${payment && payment.confirmed ? `
                  <button class="btn btn-outline delete-payment-btn" data-participant-id="${participant.participant_id}" data-group-id="${groupId}">
                    <i class="fas fa-times"></i>
                  </button>
                ` : `
                  <button class="btn btn-primary confirm-payment-btn" data-participant-id="${participant.participant_id}" data-group-id="${groupId}">
                    <i class="fas fa-check"></i>
                  </button>
                `}
                <button class="btn btn-outline edit-btn" data-id="${participant.participant_id}">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn-outline delete-btn" data-id="${participant.participant_id}">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
          `;

          // Add event listeners for action buttons
          participantCard.querySelector('.edit-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            editParticipant(participant.participant_id, participant.participants_month.name, participant.participants_month.phone, payment);
          });

          participantCard.querySelector('.delete-btn').addEventListener('click', async (e) => {
            e.stopPropagation();
            if (!confirm('Usunąć uczestnika z grupy?')) return;
            
            try {
              // Remove payments for this participant in this group for the selected month
              const { error: payErr } = await supabase
                .from('payments_month')
            .delete()
                .match({ month: selectedMonth, participant_id: participant.participant_id, group_id: groupId });
              if (payErr) throw payErr;

              // Remove participant-group association for this month
              const { error: pgErr } = await supabase
                .from('participant_groups_month')
                .delete()
                .match({ month: selectedMonth, participant_id: participant.participant_id, group_id: groupId });
              if (pgErr) throw pgErr;

              // If participant has no more associations in this month, remove participant row for that month
              const { data: remaining, error: remErr } = await supabase
                .from('participant_groups_month')
          .select('id')
                .match({ month: selectedMonth, participant_id: participant.participant_id });
              if (remErr) throw remErr;
              if (!remaining || remaining.length === 0) {
                const { error: delPartErr } = await supabase
                  .from('participants_month')
                  .delete()
                  .match({ month: selectedMonth, id: participant.participant_id });
                if (delPartErr) throw delPartErr;
              }

              await loadGroupParticipants(groupId);
              await loadHomeData(); // refresh counts on home
      } catch (err) {
              alert('Błąd usuwania uczestnika: ' + (err.message || 'Nieznany'));
            }
          });

          // Real-time amount editing
          const amountInput = participantCard.querySelector('.amount-input');
          // disable amount editing if payment was already confirmed
          if (payment && payment.confirmed) {
            amountInput.disabled = true;
            amountInput.classList.add('readonly-locked');
          }
          amountInput.addEventListener('change', async (e) => {
            const newAmount = parseFloat(e.target.value) || 0;
            const participantId = e.target.dataset.participantId;
            const groupId = e.target.dataset.groupId;
            try {
              const { error } = await supabase
                .from('payments_month')
                .update({ amount: newAmount })
                .eq('month', selectedMonth)
                .eq('participant_id', participantId)
                .eq('group_id', groupId);
              if (error) throw error;
              // Update summaries locally without reloading the whole page
              let paidSum = 0, unpaidSum = 0, totalSum = 0;
              let paidCount = 0, unpaidCount = 0;
              document.querySelectorAll('#participants-list .group-card').forEach(card => {
                const inp = card.querySelector('.amount-input');
                if (!inp) return;
                const val = parseFloat(inp.value) || 0;
                const confirmed = !!card.querySelector('.delete-payment-btn');
                if (confirmed) { paidSum += val; paidCount++; } else { unpaidSum += val; unpaidCount++; }
                totalSum += val;
              });

              // Update group participants summary block
              const summaryEl = document.getElementById('group-participants-summary');
              if (summaryEl) {
                const unpaidColor = unpaidSum > 0 ? 'var(--error)' : 'var(--success)';
                summaryEl.innerHTML = `
                  <div style="text-align:right; min-width:180px;">
                    <div style="display:flex;justify-content:space-between;align-items:center;">
                      <div style="font-size:0.95rem;color:var(--text-gray)">Zapłacono</div>
                      <div style="font-weight:700;color:var(--success)">${paidSum.toFixed(2)} zł</div>
                    </div>
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px;">
                      <div style="font-size:0.95rem;color:var(--text-gray)">Niezapłacono</div>
                      <div style="font-weight:700;color:${unpaidColor}">${unpaidSum.toFixed(2)} zł</div>
                    </div>
                    <div style="color:var(--text-gray);margin-top:6px">Razem: ${totalSum.toFixed(2)} zł</div>
                  </div>
                `;
                // redraw group donut with group sums
                drawDonut('group-donut', paidSum, unpaidSum, 'rgba(40,167,69,0.95)', 'rgba(220,53,69,0.95)');
              }

              // Update group card counts in groups list if present
              try {
                const groupEditBtn = document.querySelector('#groups-list .edit-btn[data-id="' + groupId + '"]');
                if (groupEditBtn) {
                  const groupCard = groupEditBtn.closest('.group-card');
                  if (groupCard) {
                    const nameSpan = groupCard.querySelector('h4 span:first-child');
                    const statsSpan = groupCard.querySelector('h4 span:last-child');
                    if (nameSpan && statsSpan) {
                      statsSpan.innerHTML = `<span style=\"color: var(--success); font-weight:600; margin-left:10px;\">Zapłacili: ${paidCount}</span><span style=\"color: ${unpaidSum>0 ? 'var(--error)' : 'var(--success)'}; font-weight:600; margin-left:10px;\">Nie zapłacili: ${unpaidCount}</span>`;
                    }
                  }
                }
              } catch (e) { console.warn('Could not update group card summary locally:', e); }

            } catch (err) {
              alert('Błąd aktualizacji kwoty: ' + (err.message || 'Nieznany'));
            }
          });

          // Real-time payment method editing
          const paymentMethodSelect = participantCard.querySelector('.payment-method-select');
          // Do not save on change; lock the select if payment is confirmed
          if (payment && payment.confirmed) {
            paymentMethodSelect.disabled = true;
          } else {
            paymentMethodSelect.disabled = false;
          }
          paymentMethodSelect.addEventListener('change', async (e) => {
            const newMethod = e.target.value;
            const participantId = e.target.dataset.participantId;
            
        try {
          const { error } = await supabase
                .from('payments_month')
                .update({ payment_method: newMethod || null })
                .eq('month', selectedMonth)
            .eq('participant_id', participantId)
                .eq('group_id', groupId);
              
          if (error) throw error;
        } catch (err) {
              alert('Błąd aktualizacji sposobu płatności: ' + (err.message || 'Nieznany'));
            }
          });

          // Real-time comment editing
          const commentInput = participantCard.querySelector('.payment-comment');
          commentInput.addEventListener('input', async (e) => {
            const newComment = e.target.value;
            const participantId = e.target.dataset.participantId;
            
        try {
          const { error } = await supabase
                .from('payments_month')
                .update({ comment: newComment || null })
                .eq('month', selectedMonth)
                .eq('participant_id', participantId)
                .eq('group_id', groupId);
              
          if (error) throw error;
        } catch (err) {
              alert('Błąd aktualizacji komentarza: ' + (err.message || 'Nieznany'));
            }
          });

          // Add payment confirmation event listener
          const confirmPaymentBtn = participantCard.querySelector('.confirm-payment-btn');
          if (confirmPaymentBtn) {
            confirmPaymentBtn.addEventListener('click', async (e) => {
              e.stopPropagation();
              const participantId = e.currentTarget.dataset.participantId;
              const groupId = e.currentTarget.dataset.groupId;
              const paymentMethod = participantCard.querySelector('.payment-method-select').value;
              const comment = participantCard.querySelector('.payment-comment').value || null;
              if (!paymentMethod) { alert('Wybierz sposób płatności'); return; }
              try {
                const { error } = await supabase.rpc('update_payment_confirmation', {
                  p_month: selectedMonth,
                  p_participant_id: participantId,
                  p_group_id: groupId,
                  p_payment_method: paymentMethod,
                  p_comment: comment || null
                });
        if (error) throw error;
                await loadGroupParticipants(groupId);
              } catch (err) { alert('Błąd potwierdzania płatności: ' + (err.message || 'Nieznany')); }
            });
          }

          // Add payment deletion event listener
          const deletePaymentBtn = participantCard.querySelector('.delete-payment-btn');
          if (deletePaymentBtn) {
            deletePaymentBtn.addEventListener('click', async (e) => {
              e.stopPropagation();
              const participantId = e.currentTarget.dataset.participantId;
              const groupId = e.currentTarget.dataset.groupId;
              try {
                const { error } = await supabase.rpc('remove_payment_confirmation', {
                  p_month: selectedMonth,
                  p_participant_id: participantId,
                  p_group_id: groupId
                });
        if (error) throw error;
                await loadGroupParticipants(groupId);
              } catch (err) { alert('Błąd usuwania potwierdzenia płatności: ' + (err.message || 'Nieznany')); }
            });
          }

          groupParticipantsList.appendChild(participantCard);
        });
      } catch (err) {
        console.error('Nieoczekiwany błąd:', err);
        groupParticipantsList.innerHTML = '<div class="empty-state"><p>Wystąpił nieoczekiwany błąd: ' + err.message + '</p></div>';
      }
    }

    // Function to get current group ID based on group name and month
    async function getCurrentGroupId(groupName, month) {
      try {
        const { data, error } = await supabase
          .from('groups_month')
                .select('id')
          .eq('month', month)
          .eq('name', groupName)
                .single();
        
        if (error) {
          console.error('Błąd pobierania ID grupy:', error);
          return null;
        }
        
        return data ? data.id : null;
      } catch (err) {
        console.error('Błąd w getCurrentGroupId:', err);
        return null;
      }
    }

    // Store current group name for reference
    let currentGroupName = null;
    // current lesson type view: 'private' or 'pierwszy'
    let currentLessonType = 'private';
    // Token to guard concurrent lesson loads and avoid duplicate rendering
    let lessonsLoadToken = 0;
    // Currently editing lesson id (null when creating)
    let currentEditingLessonId = null;

    // Initialize
    checkAdmin().then(async () => {
      await populateMonthSelectors();
      console.log('Month selectors populated, now loading data...');
      await loadHomeData();
      console.log('Home data loaded, now loading trainers into dropdowns...');
      await loadTrainersIntoDropdowns();
      console.log('Trainers loaded into dropdowns, now loading groups...');
      await loadGroups();
      console.log('Groups loaded, now loading lessons...');
      await loadLessons();
      console.log('All data loaded successfully');
      // initialize lesson type buttons and set default so create modal uses correct type
      try { ensureLessonTypeButtons(); setLessonType(currentLessonType); } catch (e) { console.warn('Lesson type init skipped:', e); }
    });

    // Draw donut chart helper (paid/unpaid)
    function drawDonut(canvasId, paid, unpaid, colorPaid, colorUnpaid) {
      const canvas = document.getElementById(canvasId);
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const w = canvas.width;
      const h = canvas.height;
      const cx = w/2; const cy = h/2; const r = Math.min(w,h)/2 - 6;
      const total = (parseFloat(paid)||0) + (parseFloat(unpaid)||0);
      ctx.clearRect(0,0,w,h);

      // background ring
      ctx.beginPath();
      ctx.arc(cx,cy,r,0,Math.PI*2);
      ctx.lineWidth = 14;
      ctx.strokeStyle = 'rgba(255,255,255,0.08)';
      ctx.stroke();

      if (total <= 0) {
        // nothing to draw
        // inner circle
        ctx.beginPath();
        ctx.arc(cx,cy,r-16,0,Math.PI*2);
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--secondary-bg') || '#1e1e1e';
        ctx.fill();
        // center text
        ctx.fillStyle = 'var(--text-gray)';
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('Brak danych', cx, cy);
        return;
      }

      const start = -Math.PI/2;
      const paidAngle = (paid/total) * Math.PI * 2;

      // draw paid arc
      if (paid > 0) {
        ctx.beginPath();
        ctx.arc(cx,cy,r,start,start + paidAngle, false);
        ctx.strokeStyle = colorPaid;
        ctx.lineWidth = 14;
        ctx.lineCap = 'butt';
        ctx.stroke();
      }

      // draw unpaid arc (rest)
      if (unpaid > 0) {
        ctx.beginPath();
        ctx.arc(cx,cy,r,start + paidAngle, start + 2*Math.PI, false);
        ctx.strokeStyle = colorUnpaid;
        ctx.lineWidth = 14;
        ctx.lineCap = 'butt';
        ctx.stroke();
      }

      // inner circle
      ctx.beginPath();
      ctx.arc(cx,cy,r-18,0,Math.PI*2);
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--primary-bg') || '#121212';
      ctx.fill();

      // center text: paid / total
      ctx.fillStyle = 'var(--text-light)';
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${((paid/total)*100).toFixed(0)}%`, cx, cy - 8);
      ctx.font = '12px sans-serif';
      ctx.fillText(`${(paid+unpaid).toFixed(2)} zł`, cx, cy + 12);
    }

    document.querySelectorAll('#participants-list .rodo-checkbox').forEach(cb => {
      // replace to remove duplicate listeners
      const clone = cb.cloneNode(true);
      cb.parentNode.replaceChild(clone, cb);
    });
    document.querySelectorAll('#participants-list .rodo-checkbox').forEach(cb => {
      cb.addEventListener('change', async (e) => {
        const pid = e.currentTarget.dataset.participantId;
        const checked = e.currentTarget.checked;
        e.currentTarget.disabled = true;
        try {
          const { error } = await supabase
            .from('participants_month')
            .update({ rodo: checked })
            .match({ month: selectedMonth, id: pid });
          if (error) {
            console.error('Error saving RODO:', error);
            alert('Błąd zapisu RODO: ' + (error.message || 'Nieznany'));
            e.currentTarget.checked = !checked; // revert
          } else {
            // visual feedback
            e.currentTarget.classList.add('rodo-saved');
            setTimeout(() => e.currentTarget.classList.remove('rodo-saved'), 700);
            // refresh list from DB to ensure persistence
            if (currentGroupId) await loadGroupParticipants(currentGroupId);
          }
      } catch (err) {
          console.error('Exception saving RODO:', err);
          alert('Błąd zapisu RODO: ' + (err.message || 'Nieznany'));
          e.currentTarget.checked = !checked; // revert
        } finally {
          e.currentTarget.disabled = false;
        }
      });
    });

    // Helper to save RODO and log
    async function saveRodo(participantId, checked, el) {
      try {
        console.log('Saving RODO for', participantId, checked);
        if (el) el.disabled = true;
        const selectedMonth = document.getElementById('participants-month-select').value;
        const { error } = await supabase
          .from('participants_month')
          .update({ rodo: checked })
          .match({ month: selectedMonth, id: participantId });
        if (error) {
          console.error('Error saving RODO:', error);
          if (el) el.checked = !checked;
          alert('Błąd zapisu RODO: ' + (error.message || 'Nieznany'));
        } else {
          console.log('RODO saved successfully for', participantId);
          if (el) {
            el.classList.add('rodo-saved');
            setTimeout(() => el.classList.remove('rodo-saved'), 700);
          }
        }
        } catch (err) {
        console.error('Exception saving RODO:', err);
        if (el) el.checked = !checked;
      } finally {
        if (el) el.disabled = false;
      }
    }

    // Delegated handler for RODO checkboxes to ensure they always trigger
    (function attachDelegatedRodoHandler(){
      const list = document.getElementById('participants-list');
      if (!list) return;
      list.addEventListener('change', async (e) => {
        if (!e.target || !e.target.classList) return;
        if (!e.target.classList.contains('rodo-checkbox')) return;
        const pid = e.target.dataset.participantId;
        const checked = e.target.checked;
        console.log('RODO checkbox clicked (delegated):', pid, checked);
        e.target.disabled = true;
        await saveRodo(pid, checked, e.target);
      });
    })();

    // Fallback: document-level click listener to catch cases where change doesn't fire
    document.addEventListener('click', async (e) => {
      const target = e.target;
      if (!target) return;
      // if clicked on input.rodo-checkbox or its label
      const cb = target.closest && (target.closest('.rodo-checkbox') || (target.classList && target.classList.contains('rodo-checkbox') ? target : null));
      if (cb && cb.dataset && cb.dataset.participantId) {
        // small timeout to allow checkbox state to update
        setTimeout(() => saveRodo(cb.dataset.participantId, cb.checked, cb), 10);
      }
    });

    // Debug: log number of rodo checkboxes after render (for troubleshooting)
    function logRodoCount() {
      const n = document.querySelectorAll('#participants-list .rodo-checkbox').length;
      console.log('RODO checkboxes on page:', n);
    }

    // Call logRodoCount after initial render and also after group participants load
    setTimeout(logRodoCount, 1000);
    const _origLoadGroupParticipants = loadGroupParticipants;
    loadGroupParticipants = async function(groupId) {
      await _origLoadGroupParticipants(groupId);
      setTimeout(logRodoCount, 200);
    };

    // Lessons UI handlers
    const lessonsSection = document.getElementById('lessons-section');
    const addLessonBtn = document.getElementById('add-lesson-btn');
    const createLessonModal = document.getElementById('create-lesson-modal');
    const closeCreateLessonModal = document.getElementById('close-create-lesson-modal');
    const cancelCreateLessonBtn = document.getElementById('cancel-create-lesson-btn');
    const saveCreateLessonBtn = document.getElementById('save-create-lesson-btn');
    const lessonsList = document.getElementById('lessons-list');

    // Open create/edit lesson modal (if lessonObj provided -> edit mode)
    function openCreateLessonModal(lessonObj = null) {
      // populate or clear
      if (lessonObj) {
        currentEditingLessonId = lessonObj.id;
        document.getElementById('lesson-day').value = lessonObj.day || 'Poniedziałek';
        document.getElementById('lesson-day-of-month').value = lessonObj.day_of_month || '';
        document.getElementById('lesson-start').value = lessonObj.start_time || '';
        document.getElementById('lesson-trainer').value = lessonObj.trainer || '';
        document.getElementById('lesson-amount').value = lessonObj.amount || '';
        // participants fields left empty for editing participants separately
        } else {
        currentEditingLessonId = null;
        document.getElementById('lesson-day').value = 'Poniedziałek';
        document.getElementById('lesson-day-of-month').value = '';
        document.getElementById('lesson-start').value = '';
        document.getElementById('lesson-trainer').value = '';
        document.getElementById('lesson-amount').value = '';
        document.getElementById('participant1-name').value = '';
        document.getElementById('participant1-phone').value = '';
        document.getElementById('participant2-name').value = '';
        document.getElementById('participant2-phone').value = '';
      }
      createLessonModal.classList.add('active');
    }

    addLessonBtn.addEventListener('click', () => openCreateLessonModal(null));
    closeCreateLessonModal.addEventListener('click', () => { createLessonModal.classList.remove('active'); currentEditingLessonId = null; });
    cancelCreateLessonBtn.addEventListener('click', () => { createLessonModal.classList.remove('active'); currentEditingLessonId = null; });

    document.getElementById('return-current-month-lessons').addEventListener('click', async () => {
      const current = getCurrentMonth();
      await populateMonthSelectors();
      ensureAndSelect('lessons-month-select', current);
      // reload lessons for current lesson type
      loadLessons(currentLessonType);
    });

    // helper: debounce
    function debounce(fn, delay){ let t; return (...args)=>{ clearTimeout(t); t = setTimeout(()=>fn(...args), delay); }; }

    // Lesson type buttons and handlers
    function ensureLessonTypeButtons() {
      const p = document.getElementById('lesson-type-private');
      const f = document.getElementById('lesson-type-pierwszy');
      if (!p || !f) return;
      p.addEventListener('click', () => { setLessonType('private'); });
      f.addEventListener('click', () => { setLessonType('pierwszy'); });
    }

    function setLessonType(type) {
      currentLessonType = type;
      const p = document.getElementById('lesson-type-private');
      const f = document.getElementById('lesson-type-pierwszy');
      if (p && f) {
        if (type === 'private') { p.classList.add('btn-primary'); p.classList.remove('btn-outline'); f.classList.remove('btn-primary'); f.classList.add('btn-outline'); }
        else { f.classList.add('btn-primary'); f.classList.remove('btn-outline'); p.classList.remove('btn-primary'); p.classList.add('btn-outline'); }
      }
      // reload lessons with type filter
      loadLessons(type);
    }

    async function searchParticipants(month, q) {
      if (!q || q.length < 2) return [];
      try {
        // Search in current month first
        const { data: currentMonthData, error: currentError } = await supabase
          .from('participants_month')
          .select('id,name,phone')
          .eq('month', month)
          .ilike('name', `%${q}%`)
          .limit(8);

        // Search in other months
        const { data: otherMonthsData, error: otherError } = await supabase
          .from('participants_month')
          .select('id,name,phone')
          .neq('month', month)
          .ilike('name', `%${q}%`)
          .limit(6);

        // Combine and deduplicate results
        const allResults = [];
        const seenIds = new Set();

        // Add current month results first
        if (currentMonthData) {
          currentMonthData.forEach(p => {
            if (!seenIds.has(p.id)) {
              seenIds.add(p.id);
              allResults.push({ ...p, source: 'current_month' });
            }
          });
        }

        // Add other months results
        if (otherMonthsData) {
          otherMonthsData.forEach(p => {
            if (!seenIds.has(p.id)) {
              seenIds.add(p.id);
              allResults.push({ ...p, source: 'other_month' });
            }
          });
        }

        return allResults.slice(0, 12);
      } catch (error) {
        console.warn('Search error', error);
        return [];
      }
    }

    // Search participants from entire database (for groups)
    async function searchParticipantsGlobal(q) {
      if (!q || q.length < 2) return [];
      try {
        // First try to search in current month's participants
        const currentMonth = document.getElementById('participants-month-select').value;
        const { data: currentMonthData, error: currentError } = await supabase
          .from('participants_month')
          .select('id,name,phone')
          .eq('month', currentMonth)
          .ilike('name', `%${q}%`)
          .limit(8);

        // Then search in other months (distinct participants)
        const { data: otherMonthsData, error: otherError } = await supabase
          .from('participants_month')
          .select('id,name,phone')
          .neq('month', currentMonth)
          .ilike('name', `%${q}%`)
          .limit(6);

        // Combine and deduplicate results
        const allResults = [];
        const seenIds = new Set();

        // Add current month results first
        if (currentMonthData) {
          currentMonthData.forEach(p => {
            if (!seenIds.has(p.id)) {
              seenIds.add(p.id);
              allResults.push({ ...p, source: 'current_month' });
            }
          });
        }

        // Add other months results
        if (otherMonthsData) {
          otherMonthsData.forEach(p => {
            if (!seenIds.has(p.id)) {
              seenIds.add(p.id);
              allResults.push({ ...p, source: 'other_month' });
            }
          });
        }

        return allResults.slice(0, 12);
      } catch (error) {
        console.warn('Global search error', error);
        return [];
      }
    }

    // attach search handlers
    const p1search = document.getElementById('participant1-search');
    const p1results = document.getElementById('participant1-search-results');
    p1search.addEventListener('input', debounce(async (e)=>{
      const q = e.target.value.trim();
      p1results.innerHTML = '';
      const month = document.getElementById('lessons-month-select').value;
      const rows = await searchParticipants(month, q);
      rows.forEach(r=>{
        const div = document.createElement('div');
        div.style.padding='6px';
        div.style.cursor='pointer';
        div.textContent = `${r.name} ${r.phone ? '• '+r.phone : ''}`;
        if (r.source === 'other_month') {
          div.style.color = 'var(--text-gray)';
          div.style.fontSize = '0.9rem';
        }
        div.addEventListener('click', ()=>{
          document.getElementById('participant1-selected-id').value = r.id;
          document.getElementById('participant1-name').value = r.name;
          document.getElementById('participant1-phone').value = r.phone || '';
          p1results.innerHTML = '';
          p1search.value = r.name;
          p1search.disabled = true;
          p1search.dataset.selected = 'true';
          document.getElementById('participant1-badge').style.display = 'inline';
        });
        p1results.appendChild(div);
      });
    }, 300));

    const p2search = document.getElementById('participant2-search');
    const p2results = document.getElementById('participant2-search-results');
    p2search.addEventListener('input', debounce(async (e)=>{
      const q = e.target.value.trim();
      p2results.innerHTML = '';
      const month = document.getElementById('lessons-month-select').value;
      const rows = await searchParticipants(month, q);
      rows.forEach(r=>{
        const div = document.createElement('div');
        div.style.padding='6px';
        div.style.cursor='pointer';
        div.textContent = `${r.name} ${r.phone ? '• '+r.phone : ''}`;
        if (r.source === 'other_month') {
          div.style.color = 'var(--text-gray)';
          div.style.fontSize = '0.9rem';
        }
        div.addEventListener('click', ()=>{
          document.getElementById('participant2-selected-id').value = r.id;
          document.getElementById('participant2-name').value = r.name;
          document.getElementById('participant2-phone').value = r.phone || '';
          p2results.innerHTML = '';
          p2search.value = r.name;
          p2search.disabled = true;
          p2search.dataset.selected = 'true';
          document.getElementById('participant2-badge').style.display = 'inline';
        });
        p2results.appendChild(div);
      });
    }, 300));

    // save lesson
    saveCreateLessonBtn.addEventListener('click', async () => {
      const month = document.getElementById('lessons-month-select').value;
      const day = document.getElementById('lesson-day').value;
      const start = document.getElementById('lesson-start').value;
      const trainer = document.getElementById('lesson-trainer').value.trim();
      const amount = parseFloat(document.getElementById('lesson-amount').value) || 0;

      const p1name = document.getElementById('participant1-name').value.trim();
      const p1phone = document.getElementById('participant1-phone').value.trim();
      const p2name = document.getElementById('participant2-name').value.trim();
      const p2phone = document.getElementById('participant2-phone').value.trim();

      const dayOfMonth = parseInt(document.getElementById('lesson-day-of-month').value) || null;
      if (!day || !start) { alert('Uzupełnij dzień i godzinę'); return; }

      // helper to build title: "Lekcja [trainer]"
      const buildTitle = (trainerName) => `Lekcja ${trainerName || ''}`;

      try {
        if (currentEditingLessonId) {
          // on edit, fetch participants to construct title
          const { data: partsExisting } = await supabase.from('participants_lessons_month').select('participants_month(name)').eq('month', month).eq('lesson_id', currentEditingLessonId);
          const names = (partsExisting || []).map(x => x.participants_month?.name).filter(Boolean);
          const titleGen = buildTitle(trainerId);

          const { error: updErr } = await supabase.from('lessons_month').update({ title: titleGen, day: day, start_time: start, trainer: trainerId, amount: amount }).match({ id: currentEditingLessonId, month: month });
          if (updErr) throw updErr;

          // optional: try to set day_of_month if column exists
          try {
            if (dayOfMonth !== null) {
              const { error: dowErr } = await supabase.from('lessons_month').update({ day_of_month: dayOfMonth }).match({ id: currentEditingLessonId, month: month });
              if (dowErr) console.warn('Could not update day_of_month (maybe column missing):', dowErr.message || dowErr);
            }
          } catch (e) { console.warn('Ignored error updating day_of_month:', e); }

          // adjust payments evenly across existing lesson payments
          const { data: payments, error: payErr } = await supabase.from('lesson_payments_month').select('id, participant_id').eq('month', month).eq('lesson_id', currentEditingLessonId);
          if (!payErr && payments && payments.length > 0) {
            const n = payments.length;
            const base = parseFloat((amount / n).toFixed(2));
            let sum = base * n;
            let diff = parseFloat((amount - sum).toFixed(2));
            for (let i = 0; i < payments.length; i++) {
              let val = base + (i === payments.length -1 ? diff : 0);
              const { error: e } = await supabase.from('lesson_payments_month').update({ amount: val }).match({ id: payments[i].id });
              if (e) console.warn('Error updating lesson payment amount:', e);
            }
          }

          createLessonModal.classList.remove('active');
          currentEditingLessonId = null;
          await loadLessons();
          return;
        }

        // create new lesson: build title from trainer and participant names (do NOT duplicate trainer)
        const participantsForTitle = [];
        if (p1name) participantsForTitle.push(p1name);
        if (p2name) participantsForTitle.push(p2name);
        const titleGen = buildTitle(trainerId);

        // Try RPC insertion first (may exist after SQL update). Fallback to direct insert with/without day_of_month.
        let lessonId = null;
        try {
          const { data: rpcId, error: rpcErr } = await supabase.rpc('insert_lesson_month', { p_month: month, p_title: titleGen, p_day: day, p_day_of_month: dayOfMonth, p_start_time: start, p_trainer: trainerId, p_amount: amount, p_lesson_type: currentLessonType });
          if (rpcErr) throw rpcErr;
          lessonId = rpcId;
        } catch (rpcCatch) {
          // fallback: try direct insert including day_of_month
          try {
            const { data: insertedLesson, error: insErr } = await supabase.from('lessons_month').insert({ month: month, title: titleGen, day: day, day_of_month: dayOfMonth, start_time: start, trainer: trainerId, amount: amount, lesson_type: currentLessonType }).select('id').single();
            if (insErr) throw insErr;
            lessonId = insertedLesson ? insertedLesson.id : null;
          } catch (insCatch) {
            // final fallback: insert without day_of_month (older schema)
            const { data: insertedLesson2, error: insErr2 } = await supabase.from('lessons_month').insert({ month: month, title: titleGen, day: day, start_time: start, trainer: trainerId, amount: amount, lesson_type: currentLessonType }).select('id').single();
            if (insErr2) throw insErr2;
            lessonId = insertedLesson2 ? insertedLesson2.id : null;
          }
        }
        if (!lessonId) throw new Error('Nie udało się utworzyć lekcji');

        // create participants and payments respecting selected existing IDs
        let primaryParticipantId = null;
        let partnerParticipantId = null;
        const sel1 = document.getElementById('participant1-selected-id').value || null;
        const sel2 = document.getElementById('participant2-selected-id').value || null;

        // Primary: use selected id if present, otherwise create if name provided
        if (sel1) {
          primaryParticipantId = sel1;
          // avoid duplicate association
          const { data: assocCheck } = await supabase.from('participants_lessons_month').select('id').match({ month: month, participant_id: primaryParticipantId, lesson_id: lessonId });
          if (!assocCheck || assocCheck.length === 0) {
            await supabase.from('participants_lessons_month').insert({ month: month, participant_id: primaryParticipantId, lesson_id: lessonId, role: 'primary' });
          }
          const { data: paymentCheck } = await supabase.from('lesson_payments_month').select('id').match({ month: month, participant_id: primaryParticipantId, lesson_id: lessonId });
          if (!paymentCheck || paymentCheck.length === 0) {
            await supabase.from('lesson_payments_month').insert({ month: month, participant_id: primaryParticipantId, lesson_id: lessonId, amount: amount, confirmed: false });
          }
        } else if (p1name) {
          // try to find existing participant by exact name+phone (if phone provided) or by name case-insensitive
          try {
            const phoneNormalized = (p1phone || '').trim();
            let existingArr = null;
            if (phoneNormalized) {
              const res = await supabase.from('participants_month').select('id,name,phone').eq('month', month).ilike('name', p1name).eq('phone', phoneNormalized).limit(1);
              existingArr = res.data;
            } else {
              const res = await supabase.from('participants_month').select('id,name,phone').eq('month', month).ilike('name', p1name).limit(1);
              existingArr = res.data;
            }

            if (existingArr && existingArr.length > 0 && existingArr[0].id) {
              const existing = existingArr[0];
              primaryParticipantId = existing.id;
              document.getElementById('participant1-selected-id').value = primaryParticipantId;
              document.getElementById('participant1-badge').style.display = 'inline';
              // link and create payment for existing participant
              await supabase.from('participants_lessons_month').insert({ month: month, participant_id: primaryParticipantId, lesson_id: lessonId, role: 'primary' });
              await supabase.from('lesson_payments_month').insert({ month: month, participant_id: primaryParticipantId, lesson_id: lessonId, amount: amount, confirmed: false });
            } else {
              const { data: createdPid1, error: e1 } = await supabase.rpc('insert_participant_month', { p_month: month, p_name: p1name, p_phone: p1phone || null, p_email: null, p_rodo: false });
              if (e1) console.warn('Error creating participant1:', e1);
              else {
                primaryParticipantId = createdPid1;
                await supabase.from('participants_lessons_month').insert({ month: month, participant_id: primaryParticipantId, lesson_id: lessonId, role: 'primary' });
                await supabase.from('lesson_payments_month').insert({ month: month, participant_id: primaryParticipantId, lesson_id: lessonId, amount: amount, confirmed: false });
              }
            }
          } catch (e) {
            console.warn('Error checking/creating participant1:', e);
            const { data: createdPid1, error: e1 } = await supabase.rpc('insert_participant_month', { p_month: month, p_name: p1name, p_phone: p1phone || null, p_email: null, p_rodo: false });
            if (e1) console.warn('Error creating participant1 fallback:', e1);
            else {
              primaryParticipantId = createdPid1;
              await supabase.from('participants_lessons_month').insert({ month: month, participant_id: primaryParticipantId, lesson_id: lessonId, role: 'primary' });
              await supabase.from('lesson_payments_month').insert({ month: month, participant_id: primaryParticipantId, lesson_id: lessonId, amount: amount, confirmed: false });
            }
          }
        }

        // Partner: use selected id if present, otherwise create if name provided
        if (sel2) {
          partnerParticipantId = sel2;
          if (partnerParticipantId === primaryParticipantId) {
            console.warn('Partner is same as primary; skipping partner association');
          } else {
            const { data: assocCheckP } = await supabase.from('participants_lessons_month').select('id').match({ month: month, participant_id: partnerParticipantId, lesson_id: lessonId });
            if (!assocCheckP || assocCheckP.length === 0) {
              await supabase.from('participants_lessons_month').insert({ month: month, participant_id: partnerParticipantId, lesson_id: lessonId, role: 'partner' });
            }
          }
          // split amounts
          const half = parseFloat((amount / 2).toFixed(2));
          if (primaryParticipantId) {
            const { error: updErr } = await supabase
              .from('lesson_payments_month')
              .update({ amount: half })
              .match({ month: month, lesson_id: lessonId, participant_id: primaryParticipantId });
            if (updErr) console.warn('Error updating primary payment to half:', updErr);
            await supabase.from('lesson_payments_month').insert({ month: month, participant_id: partnerParticipantId, lesson_id: lessonId, amount: half, confirmed: false });
          } else {
            await supabase.from('lesson_payments_month').insert({ month: month, participant_id: partnerParticipantId, lesson_id: lessonId, amount: amount, confirmed: false });
          }
        } else if (p2name) {
          // try to find existing partner by exact name+phone if phone provided, else by name
          try {
            const phoneNormalized2 = (p2phone || '').trim();
            let existingArr2 = null;
            if (phoneNormalized2) {
              const res2 = await supabase.from('participants_month').select('id,name,phone').eq('month', month).ilike('name', p2name).eq('phone', phoneNormalized2).limit(1);
              existingArr2 = res2.data;
            } else {
              const res2 = await supabase.from('participants_month').select('id,name,phone').eq('month', month).ilike('name', p2name).limit(1);
              existingArr2 = res2.data;
            }

            if (existingArr2 && existingArr2.length > 0 && existingArr2[0].id) {
              const existing2 = existingArr2[0];
              partnerParticipantId = existing2.id;
              document.getElementById('participant2-selected-id').value = partnerParticipantId;
              document.getElementById('participant2-badge').style.display = 'inline';
              await supabase.from('participants_lessons_month').insert({ month: month, participant_id: partnerParticipantId, lesson_id: lessonId, role: 'partner' });
              const half2 = parseFloat((amount / 2).toFixed(2));
              if (primaryParticipantId) {
                const { error: updErr } = await supabase
                  .from('lesson_payments_month')
                  .update({ amount: half2 })
                  .match({ month: month, lesson_id: lessonId, participant_id: primaryParticipantId });
                if (updErr) console.warn('Error updating primary payment to half:', updErr);
                await supabase.from('lesson_payments_month').insert({ month: month, participant_id: partnerParticipantId, lesson_id: lessonId, amount: half2, confirmed: false });
              } else {
                await supabase.from('lesson_payments_month').insert({ month: month, participant_id: partnerParticipantId, lesson_id: lessonId, amount: amount, confirmed: false });
              }
            } else {
              const { data: createdPid2, error: e2 } = await supabase.rpc('insert_participant_month', { p_month: month, p_name: p2name, p_phone: p2phone || null, p_email: null, p_rodo: false });
              if (e2) console.warn('Error creating participant2:', e2);
              else {
                partnerParticipantId = createdPid2;
                await supabase.from('participants_lessons_month').insert({ month: month, participant_id: partnerParticipantId, lesson_id: lessonId, role: 'partner' });
                const half = parseFloat((amount / 2).toFixed(2));
                if (primaryParticipantId) {
                  const { error: updErr } = await supabase
                    .from('lesson_payments_month')
                    .update({ amount: half })
                    .match({ month: month, lesson_id: lessonId, participant_id: primaryParticipantId });
                  if (updErr) console.warn('Error updating primary payment to half:', updErr);
                  await supabase.from('lesson_payments_month').insert({ month: month, participant_id: partnerParticipantId, lesson_id: lessonId, amount: half, confirmed: false });
                } else {
                  await supabase.from('lesson_payments_month').insert({ month: month, participant_id: partnerParticipantId, lesson_id: lessonId, amount: amount, confirmed: false });
                }
              }
            }
          } catch (e) {
            console.warn('Error checking/creating participant2:', e);
            const { data: createdPid2, error: e2 } = await supabase.rpc('insert_participant_month', { p_month: month, p_name: p2name, p_phone: p2phone || null, p_email: null, p_rodo: false });
            if (e2) console.warn('Error creating participant2 fallback:', e2);
            else {
              partnerParticipantId = createdPid2;
              await supabase.from('participants_lessons_month').insert({ month: month, participant_id: partnerParticipantId, lesson_id: lessonId, role: 'partner' });
              const half = parseFloat((amount / 2).toFixed(2));
              if (primaryParticipantId) {
                const { error: updErr } = await supabase
                  .from('lesson_payments_month')
                  .update({ amount: half })
                  .match({ month: month, lesson_id: lessonId, participant_id: primaryParticipantId });
                if (updErr) console.warn('Error updating primary payment to half:', updErr);
                await supabase.from('lesson_payments_month').insert({ month: month, participant_id: partnerParticipantId, lesson_id: lessonId, amount: half, confirmed: false });
              } else {
                await supabase.from('lesson_payments_month').insert({ month: month, participant_id: partnerParticipantId, lesson_id: lessonId, amount: amount, confirmed: false });
              }
            }
          }
        }

        createLessonModal.classList.remove('active');
        await loadLessons();
      } catch (err) {
        alert('Błąd tworzenia/edycji lekcji: ' + (err.message || 'Nieznany'));
      }
    });

    async function loadLessons(lessonType = null) {
      // Increment token to invalidate previous loads
      const myToken = ++lessonsLoadToken;
      lessonsList.innerHTML = '<div class="empty-state"><span class="loading"></span><p>Ładowanie lekcji...</p></div>';
      const month = document.getElementById('lessons-month-select').value;
      const typeToUse = lessonType || currentLessonType || null;
      try {
        const { data: lessons, error: lessonErr } = await supabase.rpc('list_lessons_month', { p_month: month, p_type: typeToUse });
        if (lessonErr) throw lessonErr;
        // If a newer load started, abort
        if (myToken !== lessonsLoadToken) return;
        if (!lessons || lessons.length === 0) { lessonsList.innerHTML = '<div class="empty-state"><p>Brak lekcji w tym miesiącu</p></div>'; return; }

        lessonsList.innerHTML = '';

        for (const lesson of lessons) {
          // if a newer load started, stop processing
          if (myToken !== lessonsLoadToken) return;
          // fetch participants for this lesson
          let parts = null;
          let partsErr = null;
          try {
            const result = await supabase
              .from('participants_lessons_month')
              .select('participant_id, participants_month(id, name, phone)')
              .eq('month', month)
              .eq('lesson_id', lesson.id);
            parts = result.data;
            partsErr = result.error;
          } catch (err) {
            console.warn('Tabela participants_lessons_month może nie istnieć:', err.message);
          }
          if (partsErr) {
            console.warn('Błąd pobierania uczestników lekcji:', partsErr);
          }

          const participantIds = (parts || []).map(p => p.participant_id);
          const { data: payments, error: payErr } = await supabase
            .from('lesson_payments_month')
            .select('participant_id, amount, payment_method, confirmed, comment')
            .eq('month', month)
            .eq('lesson_id', lesson.id)
            .in('participant_id', participantIds || []);
          if (payErr) console.warn('Błąd pobierania płatności lekcji:', payErr);

          const paymentLookup = {};
          (payments || []).forEach(p => { paymentLookup[p.participant_id] = p; });

          // build participant names string
          const namesStr = (parts || []).map(p => p.participants_month?.name || '').filter(Boolean).join(', ');

          const el = document.createElement('div');
          el.className = 'group-card';
          el.style.marginBottom = '12px';

          // header with trainer, participants and amount + actions
          el.innerHTML = `
            <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;">
              <div style="flex:1;">
                <h4 style="margin:0;color:var(--gold);">${lesson.title}</h4>
                <div style="color:var(--text-gray);font-size:0.9rem">${lesson.day_of_month ? lesson.day_of_month + ' ' : ''}${lesson.day} ${lesson.start_time}${lesson.day_of_month ? ' <span style="color:var(--gold);font-weight:500;">(' + formatDateToDDMM(lesson.day_of_month, month) + ')</span>' : ''}<div style="color:var(--text-light);font-weight:600">${namesStr}</div></div>
              </div>
              <div style="text-align:right; min-width:160px;">
                <div style="font-size:0.85rem;color:var(--text-gray);">Kwota lekcji</div>
                <div style="font-weight:700;color:var(--gold);" class="lesson-total" data-lesson-id="${lesson.id}">${(lesson.amount || 0).toFixed(2)} zł</div>
              </div>
              <div style="min-width:80px; display:flex; gap:8px; align-items:center;">
                <button class="btn btn-outline lesson-edit-btn" data-lesson-id="${lesson.id}"><i class="fas fa-edit"></i></button>
                <button class="btn btn-outline lesson-delete-btn" data-lesson-id="${lesson.id}"><i class="fas fa-trash"></i></button>
              </div>
            </div>
          `;

          // wire edit/delete handlers
          const editBtn = el.querySelector('.lesson-edit-btn');
          if (editBtn) {
            editBtn.addEventListener('click', async (e) => {
              e.stopPropagation();
              // fetch lesson details and open modal populated
              const { data: lessonDetail, error: ldErr } = await supabase.from('lessons_month').select('*').eq('id', lesson.id).single();
              if (ldErr) { alert('Błąd pobierania lekcji: ' + (ldErr.message || 'Nieznany')); return; }
              openCreateLessonModal(lessonDetail);
            });
          }

          const delBtn = el.querySelector('.lesson-delete-btn');
          if (delBtn) {
            delBtn.addEventListener('click', async (e) => {
              e.stopPropagation();
              if (!confirm('Usunąć lekcję?')) return;
              try {
                // get associated participant ids BEFORE deletion
                const { data: assoc, error: assocErr } = await supabase.from('participants_lessons_month').select('participant_id').eq('month', month).eq('lesson_id', lesson.id);
                if (assocErr) throw assocErr;
                const pids = (assoc || []).map(a => a.participant_id).filter(Boolean);

                // call RPC to delete lesson and its payments/links
                const { error: rpcErr } = await supabase.rpc('delete_lesson_month', { p_month: month, p_id: lesson.id });
                if (rpcErr) throw rpcErr;

                // remove orphan participants for this month
                for (const pid of pids) {
                  const { data: remainingGroups } = await supabase.from('participant_groups_month').select('id').match({ month: month, participant_id: pid });
                  const { data: remainingLessons } = await supabase.from('participants_lessons_month').select('id').match({ month: month, participant_id: pid });
                  const hasAny = (remainingGroups && remainingGroups.length) || (remainingLessons && remainingLessons.length);
                  if (!hasAny) {
                    const { error: delP } = await supabase.from('participants_month').delete().match({ month: month, id: pid });
                    if (delP) console.warn('Error deleting orphan participant:', delP);
                  }
                }

                await loadLessons();
              } catch (err) { alert('Błąd usuwania lekcji: ' + (err.message || 'Nieznany')); }
            });
          }

          // participants container
          const partsContainer = document.createElement('div');
          partsContainer.style.marginTop = '10px';

          if (!parts || parts.length === 0) {
            partsContainer.innerHTML = '<div class="empty-state"><p>Brak uczestników</p></div>';
          } else {
            parts.forEach((p, idx) => {
              const pdata = p.participants_month || {};
              const pay = paymentLookup[p.participant_id] || {};
              const amountVal = pay.amount || 0;

              const row = document.createElement('div');
              row.className = 'participant-row';
              row.style.padding = '10px';
              row.style.borderRadius = '6px';
              row.style.marginBottom = '8px';
              // Use same green/red styling as used in group participant cards
              // Use same green/red styling as used in group participant cards
              // apply unified classes instead of inline colors
              if (pay && pay.confirmed) { row.classList.add('payment-paid'); row.classList.remove('payment-unpaid'); }
              else { row.classList.add('payment-unpaid'); row.classList.remove('payment-paid'); }

              row.innerHTML = `
                <div class="participant-number" style="min-width:30px;text-align:center;font-weight:bold;color:var(--text-gray);">${idx+1}.</div>
                <div class="participant-info" style="flex:0 0 220px; overflow:hidden; text-overflow:ellipsis;">
                  <div style="font-weight:bold">${pdata.name || 'Brak'}</div>
                  <div style="color:var(--text-gray);font-size:0.9rem">${pdata.phone || 'Brak'}</div>
                  </div>
                <div class="amount-section" style="min-width:120px;">
                  <div style="display:flex;align-items:center;gap:6px;">
                    <input type="number" class="lesson-amount-input form-control" value="${amountVal}" step="0.01" min="0" data-participant-id="${p.participant_id}" data-lesson-id="${lesson.id}" style="width:100px;text-align:center;" />
                    <span style="font-size:0.9rem;color:var(--text-gray);">zł</span>
                  </div>
                </div>
                <div class="payment-method-section" style="min-width:150px;">
                  <select class="lesson-payment-method-select form-control" data-participant-id="${p.participant_id}" data-lesson-id="${lesson.id}" style="width:130px;">
                    <option value="">Sposób płatności</option>
                    <option value="karta" ${pay.payment_method === 'karta' ? 'selected' : ''}>Karta</option>
                    <option value="przelew" ${pay.payment_method === 'przelew' ? 'selected' : ''}>Przelew</option>
                    <option value="gotowka" ${pay.payment_method === 'gotowka' ? 'selected' : ''}>Gotówka</option>
                    </select>
                  </div>
                <div class="comment-section" style="flex:1;min-width:120px;">
                  <input type="text" class="lesson-payment-comment form-control" placeholder="Komentarz" value="${pay.comment || ''}" data-participant-id="${p.participant_id}" data-lesson-id="${lesson.id}" style="width:100%;" />
                  </div>
                <div class="action-buttons" style="min-width:120px;display:flex;align-items:center;gap:8px;">
                  ${pay.confirmed ? `<button class="btn btn-outline lesson-delete-payment-btn" data-participant-id="${p.participant_id}" data-lesson-id="${lesson.id}"><i class="fas fa-times"></i></button>` : `<button class="btn btn-primary lesson-confirm-payment-btn" data-participant-id="${p.participant_id}" data-lesson-id="${lesson.id}"><i class="fas fa-check"></i></button>`}
                </div>
              `;

              // amount change -> update payment amount and recompute lesson total, update header in-place with a short fade
              const lessonAmountInput = row.querySelector('.lesson-amount-input');
              // lock input if payment confirmed
              if (pay && pay.confirmed) {
                lessonAmountInput.disabled = true;
                lessonAmountInput.classList.add('readonly-locked');
              }
              lessonAmountInput.addEventListener('change', async (e) => {
                const newAmount = parseFloat(e.target.value) || 0;
                const pid = e.target.dataset.participantId;
                const lid = e.target.dataset.lessonId;
                try {
                  const { error } = await supabase.from('lesson_payments_month').update({ amount: newAmount }).match({ month: month, participant_id: pid, lesson_id: lid });
        if (error) throw error;
                  // recompute lesson total
                  const { data: allPays, error: apErr } = await supabase.from('lesson_payments_month').select('amount').eq('month', month).eq('lesson_id', lid);
                  if (!apErr && allPays) {
                    const sum = (allPays || []).reduce((s,p) => s + parseFloat(p.amount || 0), 0);
                    const { error: updLessonErr } = await supabase.from('lessons_month').update({ amount: sum }).match({ id: lid, month: month });
                    if (updLessonErr) console.warn('Error updating lesson total:', updLessonErr);
                    // update header value in DOM without reloading everything
                    const headerSpan = document.querySelector('.lesson-total[data-lesson-id="' + lid + '"]');
                    if (headerSpan) {
                      headerSpan.textContent = sum.toFixed(2) + ' zł';
                      const card = headerSpan.closest('.group-card');
                      if (card) {
                        card.style.transition = 'opacity 0.12s ease';
                        card.style.opacity = '0.5';
                        setTimeout(() => { card.style.opacity = '1'; }, 140);
                      }
                    }
                  }
                } catch (err) { alert('Błąd aktualizacji kwoty: ' + (err.message || 'Nieznany')); }
              });

              // comment input -> update in realtime
              row.querySelector('.lesson-payment-comment').addEventListener('input', async (e) => {
                const newComment = e.target.value;
                const pid = e.target.dataset.participantId;
                const lid = e.target.dataset.lessonId;
                try {
                  const { error } = await supabase.from('lesson_payments_month').update({ comment: newComment || null }).match({ month: month, participant_id: pid, lesson_id: lid });
          if (error) throw error;
                } catch (err) { console.warn('Błąd aktualizacji komentarza:', err); }
              });

              // payment method: do not save on change; saved only on confirm

              // confirm payment
              const confirmBtn = row.querySelector('.lesson-confirm-payment-btn');
              if (confirmBtn) {
                confirmBtn.addEventListener('click', async (e) => {
                  e.stopPropagation();
                  const pid = e.currentTarget.dataset.participantId;
                  const lid = e.currentTarget.dataset.lessonId;
                  const select = row.querySelector('.lesson-payment-method-select');
                  const method = select.value;
                  const comment = row.querySelector('.lesson-payment-comment').value || null;
                  if (!method) { alert('Wybierz sposób płatności'); return; }
                  try {
                    const { error } = await supabase.from('lesson_payments_month').update({ confirmed: true, payment_method: method, comment: comment }).match({ month: month, participant_id: pid, lesson_id: lid });
                    if (error) throw error;
        await loadLessons();
        // refresh groups/home to reflect newly locked status
        await loadGroups();
        await loadHomeData();
                  } catch (err) { alert('Błąd potwierdzania płatności: ' + (err.message || 'Nieznany')); }
                });
              }

              // delete payment (reset)
              const deleteBtn = row.querySelector('.lesson-delete-payment-btn');
              if (deleteBtn) {
                deleteBtn.addEventListener('click', async (e) => {
                  e.stopPropagation();
                  const pid = e.currentTarget.dataset.participantId;
                  const lid = e.currentTarget.dataset.lessonId;
                  try {
                    const { error } = await supabase.from('lesson_payments_month').update({ confirmed: false, payment_method: null, comment: null }).match({ month: month, participant_id: pid, lesson_id: lid });
                    if (error) throw error;
                    await loadLessons();
                    // after deletion, refresh groups/home so fields become editable again
                    await loadGroups();
                    await loadHomeData();
                  } catch (err) { alert('Błąd usuwania płatności: ' + (err.message || 'Nieznany')); }
                });
              }

              partsContainer.appendChild(row);
            });
          }

          el.appendChild(partsContainer);
          // before appending ensure this load is still current
          if (myToken !== lessonsLoadToken) return;
          lessonsList.appendChild(el);
        }

      } catch (err) {
        console.error('Błąd ładowania lekcji:', err);
        lessonsList.innerHTML = '<div class="empty-state"><p>Błąd ładowania lekcji</p></div>';
      }
    }

    // add nav link handler - insert before logout button
    const navLessons = document.createElement('li');
    navLessons.innerHTML = `<a href="#" id="nav-lessons"><i class="fas fa-chalkboard-teacher"></i><span class="link-text">Lekcje</span></a>`;
    const navLinks = document.querySelector('.nav-links');
    const logoutBtn = document.getElementById('logoutBtn').closest('li');
    navLinks.insertBefore(navLessons, logoutBtn);
    document.getElementById('nav-lessons').addEventListener('click', (e) => { e.preventDefault(); setActiveNav('lessons'); });

    // extend setActiveNav to handle lessons
    const _origSetActive = setActiveNav;
    setActiveNav = function(section) {
      _origSetActive(section);
      if (section === 'lessons') {
        document.getElementById('lessons-section').style.display = 'block';
        document.getElementById('groups-section').style.display = 'none';
        document.getElementById('home-section').style.display = 'none';
        populateMonthSelectors();
        document.getElementById('lessons-month-select').value = getCurrentMonth();
        // initialize lesson type buttons and apply current selection
        ensureLessonTypeButtons();
        setLessonType(currentLessonType);
      } else {
        document.getElementById('lessons-section').style.display = 'none';
      }
    };

    // When user inputs day-of-month, auto-set weekday based on selected lessons month
    function getWeekdayName(year, monthIndex, day) {
      try {
        const d = new Date(year, monthIndex, day);
        return d.toLocaleDateString('pl-PL', { weekday: 'long' }).replace(/^./, s => s.toUpperCase());
      } catch (e) { return null; }
    }

    document.getElementById('lesson-day-of-month').addEventListener('change', (e) => {
      const val = parseInt(e.target.value);
      if (!val) return;
      const monthSelect = document.getElementById('lessons-month-select');
      const monthVal = monthSelect ? monthSelect.value : null;
      if (!monthVal) return;
      const [yy, mm] = monthVal.split('-').map(Number);
      const weekday = getWeekdayName(yy, (mm - 1), val);
      if (weekday) document.getElementById('lesson-day').value = weekday;
    });

    // Participant mode toggles (show new vs existing)
    document.getElementById('participant1-mode-new').addEventListener('click', () => {
      document.getElementById('participant1-new-container').style.display = 'block';
      document.getElementById('participant1-existing-container').style.display = 'none';
      document.getElementById('participant1-selected-id').value = '';
      document.getElementById('participant1-badge').style.display = 'none';
    });
    document.getElementById('participant1-mode-existing').addEventListener('click', () => {
      document.getElementById('participant1-new-container').style.display = 'none';
      document.getElementById('participant1-existing-container').style.display = 'block';
      document.getElementById('participant1-name').value = '';
      document.getElementById('participant1-phone').value = '';
      document.getElementById('participant1-badge').style.display = 'none';
    });

    document.getElementById('participant2-mode-new').addEventListener('click', () => {
      document.getElementById('participant2-new-container').style.display = 'block';
      document.getElementById('participant2-existing-container').style.display = 'none';
      document.getElementById('participant2-selected-id').value = '';
      document.getElementById('participant2-badge').style.display = 'none';
    });
    document.getElementById('participant2-mode-existing').addEventListener('click', () => {
      document.getElementById('participant2-new-container').style.display = 'none';
      document.getElementById('participant2-existing-container').style.display = 'block';
      document.getElementById('participant2-name').value = '';
      document.getElementById('participant2-phone').value = '';
      document.getElementById('participant2-badge').style.display = 'none';
    });

    // clicking badge clears selection
    document.getElementById('participant1-badge').addEventListener('click', () => {
      document.getElementById('participant1-selected-id').value = '';
      document.getElementById('participant1-badge').style.display = 'none';
      p1search.value = '';
      p1search.disabled = false;
      delete p1search.dataset.selected;
    });

    document.getElementById('participant2-badge').addEventListener('click', () => {
      document.getElementById('participant2-selected-id').value = '';
      document.getElementById('participant2-badge').style.display = 'none';
      p2search.value = '';
      p2search.disabled = false;
      delete p2search.dataset.selected;
    });

    // Attendance Journal functionality
    let currentAttendanceMonth = getCurrentMonth();
    let attendanceData = {}; // Store attendance data for current session

    // Update existing view switch buttons to reload attendance journal
    const existingViewAttendanceJournalBtn = document.getElementById('view-attendance-journal-btn');
    if (existingViewAttendanceJournalBtn) {
      // Clone and replace to remove existing listeners
      const newAttendanceBtn = existingViewAttendanceJournalBtn.cloneNode(true);
      existingViewAttendanceJournalBtn.parentNode.replaceChild(newAttendanceBtn, existingViewAttendanceJournalBtn);

      // Add new click handler
      newAttendanceBtn.addEventListener('click', () => {
        switchGroupView('attendance');
      });
    }

    // Load attendance journal for current group
    async function loadAttendanceJournal() {
      const container = document.getElementById('attendance-journal-container');

      // Show loading state
      container.innerHTML = `
        <div class="loading-state">
          <div class="loading"></div>
          <p>Ładowanie dziennika obecności...</p>
        </div>
      `;

      try {
        console.log('loadAttendanceJournal called, currentGroupId:', currentGroupId, 'currentGroupName:', currentGroupName, 'currentGroupData:', currentGroupData);

        if (!currentGroupId || !currentGroupData) {
          console.error('currentGroupId or currentGroupData is not set');
          container.innerHTML = '<p class="text-center text-gray">Nie wybrano grupy lub brak danych grupy</p>';
          return;
        }

        // Use stored group data instead of querying database
        const group = currentGroupData;

        // Get selected month from selector
        const selectedMonth = document.getElementById('attendance-month-select').value || currentAttendanceMonth;

        const { data: participantsData, error: participantsError } = await supabase
          .from('participant_groups_month')
          .select(`
            participant_id,
            participants_month!inner (
              id,
              name,
              phone
            )
          `)
          .eq('group_id', currentGroupId)
          .eq('month', selectedMonth);

        if (participantsError) throw participantsError;

        // Debug: check group object properties
        console.log('Group object:', group);
        console.log('Group day property:', group.day);
        console.log('Group day_of_week property:', group.day_of_week);

        // Parse days for the group - handle both single day and multiple days
        let groupDays = [];
        if (group.day) {
          try {
            // Try to parse as JSON array (multiple days)
            const parsed = JSON.parse(group.day);
            if (Array.isArray(parsed)) {
              groupDays = parsed;
            } else {
              // It's a single day string
              groupDays = [group.day];
            }
          } catch (e) {
            // It's a single day string
            groupDays = [group.day];
          }
        } else if (group.day_of_week) {
          groupDays = [group.day_of_week];
        }

        console.log('Group days:', groupDays);

        if (groupDays.length === 0) {
          throw new Error('Brak informacji o dniach tygodnia grupy');
        }

        // Get training dates for all days of the group
        const allTrainingDates = [];
        groupDays.forEach(dayOfWeek => {
          const datesForDay = getTrainingDatesForMonth(selectedMonth, dayOfWeek);
          allTrainingDates.push(...datesForDay.map(date => ({
            date: date,
            dayOfWeek: dayOfWeek,
            dayName: dayOfWeek
          })));
        });

        // Sort dates chronologically
        allTrainingDates.sort((a, b) => new Date(a.date) - new Date(b.date));

        // Create attendance table
        const tableHTML = createAttendanceTable(participantsData, allTrainingDates, selectedMonth);
        container.innerHTML = tableHTML;

        // Load existing attendance data
        await loadExistingAttendanceData(currentGroupId, selectedMonth, participantsData, allTrainingDates);

        console.log('Attendance journal loaded successfully');

      } catch (err) {
        console.error('Error loading attendance journal:', err);
        container.innerHTML = `<p class="text-center text-danger">Błąd ładowania dziennika: ${err.message}</p>`;
      }
    }

    // Get training dates for a month based on day of week
    function getTrainingDatesForMonth(month, dayOfWeek) {
      const dates = [];
      const [year, monthNum] = month.split('-').map(Number);

      // Convert day name to number (0-6, Sunday=0)
      const dayMap = {
        'niedziela': 0, 'poniedziałek': 1, 'wtorek': 2, 'środa': 3,
        'czwartek': 4, 'piątek': 5, 'sobota': 6
      };
      const targetDay = dayMap[dayOfWeek.toLowerCase()];

      if (targetDay === undefined) return dates;

      const firstDay = new Date(year, monthNum - 1, 1);
      const lastDay = new Date(year, monthNum, 0);

      for (let date = new Date(firstDay); date <= lastDay; date.setDate(date.getDate() + 1)) {
        if (date.getDay() === targetDay) {
          dates.push(new Date(date));
        }
      }

      return dates;
    }

    // Create attendance table HTML
    function createAttendanceTable(participants, trainingDates, month) {
      let tableHTML = `
        <table class="attendance-table">
          <thead>
            <tr>
              <th class="participant-name">Uczestnik</th>
      `;

      // Add date columns with approve/edit buttons
      trainingDates.forEach(dateObj => {
        const date = new Date(dateObj.date);
        const dateStr = date.toISOString().split('T')[0];
        const formattedDate = date.toLocaleDateString('pl-PL', {
          day: '2-digit',
          month: '2-digit'
        });

        tableHTML += `
          <th class="date-column" data-date="${dateStr}" data-day="${dateObj.dayOfWeek}">
            <div>${formattedDate}</div>
            <div style="font-size: 0.7rem; color: var(--text-gray); margin-top: 2px;">${dateObj.dayName}</div>
            <button class="btn approve-btn" data-date="${dateStr}">Zatwierdź</button>
          </th>
        `;
      });

      tableHTML += `
            </tr>
          </thead>
          <tbody>
      `;

      // Add participant rows
      participants.forEach(participant => {
        const p = participant.participants_month;
        tableHTML += `
          <tr data-participant-id="${p.id}">
            <td class="participant-name">${p.name}</td>
        `;

        // Add checkbox cells for each training date
        trainingDates.forEach(dateObj => {
          const date = new Date(dateObj.date);
          const dateStr = date.toISOString().split('T')[0];
          tableHTML += `
            <td>
              <input type="checkbox" class="attendance-checkbox"
                     data-participant-id="${p.id}"
                     data-date="${dateStr}"
                     data-day="${dateObj.dayOfWeek}">
            </td>
          `;
        });

        tableHTML += `</tr>`;
      });

      tableHTML += `
          </tbody>
        </table>
      `;

      return tableHTML;
    }

    // Load existing attendance data from Supabase database
    async function loadExistingAttendanceData(groupId, month, participants, trainingDates) {
      try {
        // Load attendance data from Supabase
        const { data: attendanceRecords, error } = await supabase
          .from('attendance')
          .select('*')
          .eq('group_id', groupId)
          .eq('month', month);

        if (error) {
          console.error('Error loading attendance data from database:', error);
          return;
        }

        // Clear existing attendance data
        attendanceData = {};

        // Process attendance records
        if (attendanceRecords && attendanceRecords.length > 0) {
          attendanceRecords.forEach(record => {
            const participantId = record.participant_id;
            const dateStr = record.date;

            if (!attendanceData[participantId]) {
              attendanceData[participantId] = {};
            }

            attendanceData[participantId][dateStr] = {
              present: record.present,
              approved: record.approved
            };
          });
        }

        // Set checkboxes based on loaded data
        participants.forEach(participant => {
          const p = participant.participants_month;
          trainingDates.forEach(dateObj => {
            const date = new Date(dateObj.date);
            const dateStr = date.toISOString().split('T')[0];
            const checkbox = document.querySelector(
              `input[data-participant-id="${p.id}"][data-date="${dateStr}"]`
            );

            if (checkbox && attendanceData[p.id] && attendanceData[p.id][dateStr]) {
              checkbox.checked = attendanceData[p.id][dateStr].present;

              // Check if column is approved
              if (attendanceData[p.id][dateStr].approved) {
                const column = checkbox.closest('td');
                column.classList.add('attendance-column-approved');
                checkbox.disabled = true;
              }
            }
          });
        });

        // Update approve buttons based on stored approval status
        updateApproveButtons(trainingDates);

        console.log('Attendance data loaded from database:', attendanceRecords?.length || 0, 'records');

      } catch (err) {
        console.error('Error loading existing attendance data:', err);
      }
    }

    // Update approve/edit buttons based on approval status
    function updateApproveButtons(trainingDates) {
      trainingDates.forEach(dateObj => {
        const date = new Date(dateObj.date);
        const dateStr = date.toISOString().split('T')[0];
        const approveBtn = document.querySelector(`button[data-date="${dateStr}"].approve-btn`);

        if (approveBtn) {
          // Check if all participants for this date are approved
          const checkboxes = document.querySelectorAll(`input[data-date="${dateStr}"]`);
          const allApproved = Array.from(checkboxes).every(cb => {
            const participantId = cb.dataset.participantId;
            return attendanceData[participantId] &&
                   attendanceData[participantId][dateStr] &&
                   attendanceData[participantId][dateStr].approved;
          });

          if (allApproved) {
            approveBtn.textContent = 'Edytuj';
            approveBtn.className = 'btn edit-btn';
          } else {
            approveBtn.textContent = 'Zatwierdź';
            approveBtn.className = 'btn approve-btn';
          }
        }
      });
    }

    // Handle checkbox changes
    document.addEventListener('change', async (e) => {
      if (e.target.classList.contains('attendance-checkbox')) {
        const participantId = e.target.dataset.participantId;
        const date = e.target.dataset.date;
        const isChecked = e.target.checked;
        const month = document.getElementById('attendance-month-select').value || currentAttendanceMonth;

        try {
          // Update or insert attendance record in Supabase
          const { data: existingRecord, error: selectError } = await supabase
            .from('attendance')
            .select('*')
            .eq('group_id', currentGroupId)
            .eq('participant_id', participantId)
            .eq('date', date)
            .single();

          if (selectError && selectError.code !== 'PGRST116') { // PGRST116 = not found
            console.error('Error checking existing attendance record:', selectError);
            return;
          }

          if (existingRecord) {
            // Update existing record
            const { error: updateError } = await supabase
              .from('attendance')
              .update({
                present: isChecked,
                approved: false // Reset approval when checkbox changes
              })
              .eq('id', existingRecord.id);

            if (updateError) {
              console.error('Error updating attendance record:', updateError);
              return;
            }
          } else {
            // Insert new record
            const { error: insertError } = await supabase
              .from('attendance')
              .insert({
                group_id: currentGroupId,
                participant_id: participantId,
                date: date,
                month: month,
                present: isChecked,
                approved: false
              });

            if (insertError) {
              console.error('Error inserting attendance record:', insertError);
              return;
            }
          }

          // Update local attendance data structure
          if (!attendanceData[participantId]) {
            attendanceData[participantId] = {};
          }

          if (!attendanceData[participantId][date]) {
            attendanceData[participantId][date] = {};
          }

          attendanceData[participantId][date].present = isChecked;
          attendanceData[participantId][date].approved = false;

          // Remove approved class if checkbox was unchecked
          if (!isChecked) {
            const column = e.target.closest('td');
            column.classList.remove('attendance-column-approved');
            e.target.disabled = false;
          }

          console.log('Attendance updated in database:', participantId, date, isChecked);

        } catch (err) {
          console.error('Error updating attendance:', err);
        }
      }
    });

    // Handle approve/edit button clicks
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('approve-btn') || e.target.classList.contains('edit-btn')) {
        const date = e.target.dataset.date;
        const isEditMode = e.target.classList.contains('edit-btn');

        if (isEditMode) {
          // Enable editing for this date column
          enableColumnEditing(date);
          e.target.textContent = 'Zatwierdź';
          e.target.className = 'btn approve-btn';
        } else {
          // Approve attendance for this date
          approveColumnAttendance(date);
          e.target.textContent = 'Edytuj';
          e.target.className = 'btn edit-btn';
        }
      }
    });

    // Approve attendance for a date column
    async function approveColumnAttendance(date) {
      const checkboxes = document.querySelectorAll(`input[data-date="${date}"]`);
      const month = document.getElementById('attendance-month-select').value || currentAttendanceMonth;

      try {
        // Update all attendance records for this date to approved
        for (const cb of checkboxes) {
          const participantId = cb.dataset.participantId;

          // Update attendance record in database
          const { error: updateError } = await supabase
            .from('attendance')
            .update({ approved: true })
            .eq('group_id', currentGroupId)
            .eq('participant_id', participantId)
            .eq('date', date);

          if (updateError) {
            console.error('Error approving attendance record:', updateError);
            continue;
          }

          // Update local data structure
          if (!attendanceData[participantId]) {
            attendanceData[participantId] = {};
          }
          if (!attendanceData[participantId][date]) {
            attendanceData[participantId][date] = {};
          }

          attendanceData[participantId][date].approved = true;
          attendanceData[participantId][date].present = cb.checked;

          // Disable checkbox and mark column as approved
          cb.disabled = true;
          const column = cb.closest('td');
          column.classList.add('attendance-column-approved');
        }

        console.log('Column approved in database:', date);

      } catch (err) {
        console.error('Error approving column:', err);
      }
    }

    // Enable editing for a date column
    async function enableColumnEditing(date) {
      const checkboxes = document.querySelectorAll(`input[data-date="${date}"]`);
      const month = document.getElementById('attendance-month-select').value || currentAttendanceMonth;

      try {
        // Update all attendance records for this date to not approved
        for (const cb of checkboxes) {
          const participantId = cb.dataset.participantId;

          // Update attendance record in database
          const { error: updateError } = await supabase
            .from('attendance')
            .update({ approved: false })
            .eq('group_id', currentGroupId)
            .eq('participant_id', participantId)
            .eq('date', date);

          if (updateError) {
            console.error('Error enabling editing for attendance record:', updateError);
            continue;
          }

          // Re-enable checkbox
          cb.disabled = false;

          // Remove approved class
          const column = cb.closest('td');
          column.classList.remove('attendance-column-approved');

          // Reset approval status in local data
          if (attendanceData[participantId] && attendanceData[participantId][date]) {
            attendanceData[participantId][date].approved = false;
          }
        }

        console.log('Column editing enabled in database:', date);

      } catch (err) {
        console.error('Error enabling column editing:', err);
      }
    }

    // Handle attendance month selector change
    const attendanceMonthSelect = document.getElementById('attendance-month-select');
    if (attendanceMonthSelect) {
      attendanceMonthSelect.addEventListener('change', () => {
        // Sync with participants month selector
        document.getElementById('participants-month-select').value = attendanceMonthSelect.value;
        // Reload attendance journal if it's currently visible
        const attendanceJournalView = document.getElementById('attendance-journal-view');
        if (attendanceJournalView && attendanceJournalView.style.display !== 'none') {
          loadAttendanceJournal();
        }
      });
    }

    // Group participant modal handlers
    const groupParticipantModeNew = document.getElementById('group-participant-mode-new');
    const groupParticipantModeExisting = document.getElementById('group-participant-mode-existing');
    const groupParticipantNewContainer = document.getElementById('group-participant-new-container');
    const groupParticipantExistingContainer = document.getElementById('group-participant-existing-container');
    const groupParticipantSearch = document.getElementById('group-participant-search');
    const groupParticipantSearchResults = document.getElementById('group-participant-search-results');
    const groupParticipantSelectedId = document.getElementById('group-participant-selected-id');
    const groupParticipantBadge = document.getElementById('group-participant-badge');

    // Handle mode switching
    groupParticipantModeNew.addEventListener('click', () => {
      groupParticipantModeNew.classList.add('active');
      groupParticipantModeExisting.classList.remove('active');
      groupParticipantNewContainer.style.display = 'block';
      groupParticipantExistingContainer.style.display = 'none';
      groupParticipantSelectedId.value = '';
      groupParticipantBadge.style.display = 'none';
      groupParticipantSearch.value = '';
      groupParticipantSearch.disabled = false;
      delete groupParticipantSearch.dataset.selected;
    });

    groupParticipantModeExisting.addEventListener('click', () => {
      groupParticipantModeExisting.classList.add('active');
      groupParticipantModeNew.classList.remove('active');
      groupParticipantExistingContainer.style.display = 'block';
      groupParticipantNewContainer.style.display = 'none';
      participantNameInput.value = '';
      participantPhoneInput.value = '';
    });

    // Handle search input
    groupParticipantSearch.addEventListener('input', debounce(async (e) => {
      const q = e.target.value.trim();
      groupParticipantSearchResults.innerHTML = '';
      const rows = await searchParticipantsGlobal(q);
      rows.forEach(r => {
        const div = document.createElement('div');
        div.style.padding = '6px';
        div.style.cursor = 'pointer';
        div.textContent = `${r.name} ${r.phone ? '• ' + r.phone : ''}`;
        if (r.source === 'other_month') {
          div.style.color = 'var(--text-gray)';
          div.style.fontSize = '0.9rem';
        }
        div.addEventListener('click', () => {
          groupParticipantSelectedId.value = r.id;
          participantNameInput.value = r.name;
          participantPhoneInput.value = r.phone || '';
          groupParticipantSearchResults.innerHTML = '';
          groupParticipantSearch.value = r.name;
          groupParticipantSearch.disabled = true;
          groupParticipantSearch.dataset.selected = 'true';
          groupParticipantBadge.style.display = 'inline';
        });
        groupParticipantSearchResults.appendChild(div);
      });
    }, 300));

    // Clear search when clicking badge
    groupParticipantBadge.addEventListener('click', () => {
      groupParticipantSelectedId.value = '';
      groupParticipantBadge.style.display = 'none';
      groupParticipantSearch.value = '';
      groupParticipantSearch.disabled = false;
      delete groupParticipantSearch.dataset.selected;
    });

    // Trainer functionality
    const createTrainerModal = document.getElementById('create-trainer-modal');
    const closeCreateTrainerModal = document.getElementById('close-create-trainer-modal');
    const cancelCreateTrainerBtn = document.getElementById('cancel-create-trainer-btn');
    const saveCreateTrainerBtn = document.getElementById('save-create-trainer-btn');
    const addTrainerBtn = document.getElementById('add-trainer-btn');

    // Load trainers into dropdowns
    async function loadTrainersIntoDropdowns() {
      try {
        const { data: trainers, error } = await supabase
          .from('profiles')
          .select('id, email, first_name, last_name')
          .eq('role', 'trainer');

        if (error) throw error;

        // Get all trainer dropdowns
        const groupTrainerSelect = document.getElementById('group-trainer');
        const lessonTrainerSelect = document.getElementById('lesson-trainer');

        // Clear existing options except the first one
        [groupTrainerSelect, lessonTrainerSelect].forEach(select => {
          if (select) {
            const firstOption = select.querySelector('option[value=""]');
            select.innerHTML = '';
            if (firstOption) select.appendChild(firstOption);
          }
        });

        // Add trainer options
        if (trainers && trainers.length > 0) {
          trainers.forEach(trainer => {
            const fullName = (trainer.first_name || trainer.last_name)
              ? `${trainer.first_name || ''} ${trainer.last_name || ''}`.trim()
              : trainer.email;

            const option = document.createElement('option');
            option.value = trainer.id;
            option.textContent = fullName;

            if (groupTrainerSelect) groupTrainerSelect.appendChild(option.cloneNode(true));
            if (lessonTrainerSelect) lessonTrainerSelect.appendChild(option);
          });
        }
      } catch (error) {
        console.error('Błąd podczas ładowania trenerów do dropdownów:', error);
      }
    }

    // Load trainers from database
    async function loadTrainers() {
      try {
        const { data: trainers, error } = await supabase
          .from('profiles')
          .select('id, email, role, created_at, first_name, last_name')
          .eq('role', 'trainer');

        if (error) throw error;

        const trainersList = document.getElementById('trainers-list');
        trainersList.innerHTML = '';

        if (trainers && trainers.length > 0) {
          trainers.forEach(trainer => {
            const trainerCard = document.createElement('div');
            trainerCard.className = 'card';
            const fullName = (trainer.first_name || trainer.last_name)
              ? `${trainer.first_name || ''} ${trainer.last_name || ''}`.trim()
              : 'Trener';

            trainerCard.innerHTML = `
              <div class="card-header">
                <h4>${fullName}</h4>
                <div class="card-actions">
                  <button class="btn btn-sm btn-outline edit-trainer-btn" data-id="${trainer.id}">
                    <i class="fas fa-edit"></i>
                  </button>
                  <button class="btn btn-sm btn-danger delete-trainer-btn" data-id="${trainer.id}">
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              </div>
              <div class="card-body">
                <p><strong>Email:</strong> ${trainer.email || ''}</p>
                <p><strong>Rola:</strong> Trener</p>
                <p><strong>Data utworzenia:</strong> ${new Date(trainer.created_at).toLocaleDateString('pl-PL')}</p>
              </div>
            `;
            trainersList.appendChild(trainerCard);
          });

          // Add event listeners for edit and delete buttons
          document.querySelectorAll('.edit-trainer-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
              const trainerId = e.currentTarget.dataset.id;
              editTrainer(trainerId);
            });
          });

          document.querySelectorAll('.delete-trainer-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
              const trainerId = e.currentTarget.dataset.id;
              if (confirm('Czy na pewno chcesz usunąć tego trenera?')) {
                await deleteTrainer(trainerId);
              }
            });
          });
        } else {
          trainersList.innerHTML = '<p style="text-align: center; padding: 2rem; color: var(--text-gray);">Brak trenerów w systemie.</p>';
        }
      } catch (error) {
        console.error('Błąd podczas ładowania trenerów:', error);
        alert('Wystąpił błąd podczas ładowania listy trenerów.');
      }
    }

    // Open create trainer modal
    addTrainerBtn.addEventListener('click', () => {
      document.getElementById('trainer-first-name').value = '';
      document.getElementById('trainer-last-name').value = '';
      document.getElementById('trainer-email').value = '';
      createTrainerModal.style.display = 'block';
    });

    // Close trainer modal
    closeCreateTrainerModal.addEventListener('click', () => {
      createTrainerModal.style.display = 'none';
    });

    cancelCreateTrainerBtn.addEventListener('click', () => {
      createTrainerModal.style.display = 'none';
    });

    // Save trainer
    saveCreateTrainerBtn.addEventListener('click', async () => {
      const firstName = document.getElementById('trainer-first-name').value.trim();
      const lastName = document.getElementById('trainer-last-name').value.trim();
      const email = document.getElementById('trainer-email').value.trim();

      if (!firstName || !lastName || !email) {
        alert('Wszystkie pola są wymagane!');
        return;
      }

      try {
        // Create auth user
        const { data: authData, error: authError } = await supabase.auth.signUp({
          email: email,
          password: 'TempPass123!', // Temporary password that trainer will change
        });

        if (authError) throw authError;

        // Create profile with trainer role
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([{
            id: authData.user.id,
            email: email,
            first_name: firstName,
            last_name: last_name,
            role: 'trainer'
          }]);

        if (profileError) throw profileError;

        alert('Trener został pomyślnie dodany! Trener otrzyma email z instrukcjami logowania.');
        createTrainerModal.style.display = 'none';
        loadTrainers();
        loadTrainersIntoDropdowns();
      } catch (error) {
        console.error('Błąd podczas tworzenia trenera:', error);
        alert('Wystąpił błąd podczas tworzenia trenera: ' + error.message);
      }
    });

    // Edit trainer (placeholder for future implementation)
    async function editTrainer(trainerId) {
      alert('Funkcjonalność edycji trenera będzie dostępna wkrótce.');
    }

    // Delete trainer
    async function deleteTrainer(trainerId) {
      try {
        const { error } = await supabase
          .from('profiles')
          .delete()
          .eq('id', trainerId);

        if (error) throw error;

        loadTrainers();
        alert('Trener został usunięty.');
      } catch (error) {
        console.error('Błąd podczas usuwania trenera:', error);
        alert('Wystąpił błąd podczas usuwania trenera.');
      }
    }

  </script>
</body>
</html>
