import { createRoot } from "react-dom/client";
import App from "./App";

import "./index.css";

const index = (
  <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="index.html">
        Śledzenie Serwisowania Auta
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="index.html">
              Strona główna
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="login.html">
              Logowanie
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="register.html">
              Rejestracja
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <div className="container mt-5">
      <h2 className="text-center">Logowanie</h2>
      <form id="login-form" method="POST" action="process_login.php">
        <div className="form-group">
          <label htmlFor="username">Nazwa użytkownika</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            placeholder="Wpisz nazwę użytkownika"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Hasło</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Wpisz hasło"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Zaloguj się
        </button>
      </form>
      <p className="mt-3 text-center">
        Nie masz konta? <a href="register.html">Zarejestruj się</a>
      </p>
    </div>

    <footer className="bg-dark text-white text-center py-3 mt-5">
      <p>&copy; 2024 Śledzenie Serwisowania Auta</p>
    </footer>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  </>
);

createRoot(document.getElementById("root")).render(index);
