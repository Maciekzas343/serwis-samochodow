import { useState } from "react";
//import { Form } from "./components/Form";
//import { PersonInfo } from "./components/PersonInfo";

const login_content = (
  <>
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
  </>
);

const glowny_content = (
  <>
    <div className="container mt-4">
      <h2>Zrealizowane Serwisy</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <span className="data-serwisu">2024-05-10</span>
          <span className="opis-serwisu">Wymiana oleju</span>
          <span className="koszt-serwisu">50 zł</span>
        </li>
        <li className="list-group-item">
          <span className="data-serwisu">2024-03-15</span>
          <span className="opis-serwisu">Wymiana klocków hamulcowych</span>
          <span className="koszt-serwisu">120 zł</span>
        </li>
      </ul>

      <h2 className="mt-4">Nadchodzące Serwisy</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <span className="data-serwisu">2024-11-20</span>
          <span className="opis-serwisu">Rotacja opon</span>
          <span className="szacowany-koszt">40 zł</span>
        </li>
        <li className="list-group-item">
          <span className="data-serwisu">2025-01-10</span>
          <span className="opis-serwisu">Kontrola akumulatora</span>
          <span className="szacowany-koszt">30 zł</span>
        </li>
      </ul>

      <div className="powiadomienia mt-4">
        <h2>Powiadomienia</h2>
        <p>Włącz powiadomienia SMS o nadchodzących przeglądach:</p>
        <form id="formularz-powiadomien">
          <div className="form-group">
            <label htmlFor="telefon">Numer telefonu:</label>
            <input
              type="tel"
              className="form-control"
              id="telefon"
              name="telefon"
              placeholder="Wpisz numer telefonu"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Włącz powiadomienia SMS
          </button>
        </form>
      </div>
    </div>
  </>
);

const auto_content = (
  <>
    <div className="container mt-4">
      <h2>Status Twojego Auta</h2>
      <p>Aktualny stan techniczny:</p>
      <ul className="list-group">
        <li className="list-group-item">
          Poziom oleju: <strong>Właściwy</strong>
        </li>
        <li className="list-group-item">
          Stan klocków hamulcowych: <strong>Do wymiany</strong>
        </li>
        <li className="list-group-item">
          Ciśnienie w oponach: <strong>Ok</strong>
        </li>
        <li className="list-group-item">
          Stan akumulatora: <strong>Dobry</strong>
        </li>
      </ul>

      <h2 className="mt-4">Historia przeglądów</h2>
      <ul className="list-group">
        <li className="list-group-item">2024-05-10: Wymiana oleju</li>
        <li className="list-group-item">
          2024-03-15: Wymiana klocków hamulcowych
        </li>
      </ul>
    </div>
  </>
);

const register_content = (
  <>
    <div className="container mt-5">
      <h2 className="text-center">Rejestracja</h2>
      <form id="register-form" method="POST" action="process_register.php">
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
          <label htmlFor="email">Adres e-mail</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Wpisz adres e-mail"
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
        <div className="form-group">
          <label htmlFor="confirm-password">Potwierdź hasło</label>
          <input
            type="password"
            className="form-control"
            id="confirm-password"
            name="confirm-password"
            placeholder="Potwierdź hasło"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Zarejestruj się
        </button>
      </form>
      <p className="mt-3 text-center">
        Masz już konto ? <a href="login.html">Zaloguj się</a>
      </p>
    </div>
  </>
);

const oferta_content = (
  <>
    <div className="container mt-4">
      <h2>Nasza Oferta Serwisowa</h2>

      <h3>Pakiety Serwisowe</h3>
      <ul className="list-group">
        <li className="list-group-item">
          <h4>Pakiet Podstawowy</h4>
          <p>Wymiana oleju oraz filtru oleju. Cena: 100 zł.</p>
        </li>
        <li className="list-group-item">
          <h4>Pakiet Komfortowy</h4>
          <p>
            Wymiana oleju, filtru oleju oraz kontrola stanu technicznego. Cena:
            300 zł.
          </p>
        </li>
        <li className="list-group-item">
          <h4>Pakiet Premium</h4>
          <p>
            Wszystko w Pakiecie Komfortowym + wymiana klocków hamulcowych. Cena:
            500 zł.
          </p>
        </li>
      </ul>

      <h3 className="mt-4">Naprawy Samochodowe</h3>
      <ul className="list-group">
        <li className="list-group-item">
          <h4>Wymiana Klocków Hamulcowych</h4>
          <p>Kompleksowa wymiana klocków hamulcowych. Cena: 250 zł.</p>
        </li>
        <li className="list-group-item">
          <h4>Wymiana Opon</h4>
          <p>Wymiana opon letnich/zimowych. Cena: 150 zł.</p>
        </li>
        <li className="list-group-item">
          <h4>Naprawa Zawieszenia</h4>
          <p>Pełna diagnoza i naprawa zawieszenia. Cena: od 400 zł.</p>
        </li>
        <li className="list-group-item">
          <h4>Wymiana Akumulatora</h4>
          <p>Wymiana akumulatora i kontrola systemu ładowania. Cena: 200 zł.</p>
        </li>
        <li className="list-group-item">
          <h4>Diagnostyka Komputerowa</h4>
          <p>Pełna diagnostyka komputerowa pojazdu. Cena: 150 zł.</p>
        </li>
      </ul>

      <h3 className="mt-4">Usługi Dodatkowe</h3>
      <ul className="list-group">
        <li className="list-group-item">
          <h4>Polerowanie Lakieru</h4>
          <p>Usługa polerowania lakieru samochodowego. Cena: 300 zł.</p>
        </li>
        <li className="list-group-item">
          <h4>Czyszczenie Wnętrza</h4>
          <p>Kompleksowe czyszczenie wnętrza samochodu. Cena: 200 zł.</p>
        </li>
        <li className="list-group-item">
          <h4>Przegląd Techniczny</h4>
          <p>Pełny przegląd techniczny pojazdu. Cena: 150 zł.</p>
        </li>
      </ul>
    </div>
  </>
);

function App() {
  const [content, setContent] = useState("glowny");

  const renderContent = () => {
    switch (content) {
      case "glowny":
        return glowny_content;
      case "auto":
        return auto_content;
      case "oferta":
        return oferta_content;
      case "login":
        return login_content;
      case "register":
        return register_content;
      default:
        return glowny_content;
    }
  };

  const nav_bar = (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#" onClick={() => setContent("glowny")}>
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
            <a
              className="nav-link"
              href="#"
              onClick={() => setContent("glowny")}
            >
              Strona Główna
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => setContent("auto")}>
              Status Auta
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              onClick={() => setContent("oferta")}
            >
              Oferta
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a
              className="nav-link btn btn-primary text-white"
              href="#"
              onClick={() => setContent("login")}
            >
              Log in
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );

  // Główny render
  return (
    <div>
      {nav_bar}
      {renderContent()}
    </div>
  );
}

export default App;
