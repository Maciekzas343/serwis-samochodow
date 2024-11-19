import { useState, useEffect } from "react";

function App() {
  const [content, setContent] = useState("glowny");
  const [posts, setPosts] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null); // Stan dla zalogowanego użytkownika
  const [users, setUsers] = useState([]); // Przechowywanie danych użytkowników

  // Pobieranie postów z API (JSON Server)
  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Błąd pobierania danych:", error));
  }, []);

  // Pobieranie użytkowników z API
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Błąd pobierania użytkowników:", error));
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setLoggedInUser(user);
      alert("Zalogowano!");
      setContent("glowny");
    } else {
      alert("Nieprawidłowe dane logowania!");
    }
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    const userExists = users.some((user) => user.username === username);

    if (userExists) {
      alert("Użytkownik o tej nazwie już istnieje!");
      return;
    }

    const newUser = { username, email, password };

    // Wysyłanie nowego użytkownika do JSON Server
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => {
        if (response.ok) {
          setUsers((prevUsers) => [...prevUsers, newUser]);
          alert("Rejestracja zakończona sukcesem!");
          setContent("login");
        }
      })
      .catch((error) => console.error("Błąd rejestracji:", error));
  };

  const admin_content = (
    <>
      <div className="container mt-4">
        <h2>Panel Administratora</h2>
        <p>Zarządzaj użytkownikami platformy:</p>
        <ul className="list-group">
          {users.map((user) => (
            <li
              key={user.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{user.username}</strong> - {user.email}
              </div>
              <button className="btn btn-primary btn-sm">Dodaj</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  const glowny_content = (
    <>
      <div className="container mt-4">
        <h1>Profesjonalne Serwisowanie Auta</h1>
        <p>Zapewniamy kompleksową obsługę Twojego pojazdu w Radomiu.</p>
        <a href="#services" className="btn btn-primary">
          Zobacz nasze usługi
        </a>

        <div className="container mt-5">
          <h2 className="text-center">Nasze Usługi</h2>
          <div className="row" id="services">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Przeglądy Techniczne</h5>
                  <p className="card-text">
                    Zadbaj o bezpieczeństwo swojego pojazdu. Oferujemy przeglądy
                    techniczne.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Naprawy Mechaniczne</h5>
                  <p className="card-text">
                    Nasza ekipa specjalistów zajmie się każdą naprawą
                    mechaniczną.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Serwis Klimatyzacji</h5>
                  <p className="card-text">
                    Zapewniamy pełen serwis klimatyzacji w Twoim aucie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const auto_content = (
    <>
      <div className="container mt-4">
        <h2>Status Twojego Auta</h2>
        <ul className="list-group">
          {posts.map((post) => (
            <li key={post.id} className="list-group-item">
              <span className="data-serwisu">{post.date}</span>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
              <small>Autor: {post.author}</small>
            </li>
          ))}
        </ul>
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
              Wymiana oleju, filtru oleju oraz kontrola stanu technicznego.
              Cena: 300 zł.
            </p>
          </li>
          <li className="list-group-item">
            <h4>Pakiet Premium</h4>
            <p>
              Wszystko w Pakiecie Komfortowym + wymiana klocków hamulcowych.
              Cena: 500 zł.
            </p>
          </li>
        </ul>
      </div>
    </>
  );

  const login_content = (
    <>
      <div className="container mt-5">
        <h2 className="text-center">Logowanie</h2>
        <form onSubmit={handleLogin}>
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
          Nie masz konta?{" "}
          <a href="#" onClick={() => setContent("register")}>
            Zarejestruj się
          </a>
        </p>
      </div>
    </>
  );

  const register_content = (
    <>
      <div className="container mt-5">
        <h2 className="text-center">Rejestracja</h2>
        <form onSubmit={handleRegister}>
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
          <button type="submit" className="btn btn-primary btn-block">
            Zarejestruj się
          </button>
        </form>
        <p className="mt-3 text-center">
          Masz już konto?{" "}
          <a href="#" onClick={() => setContent("login")}>
            Zaloguj się
          </a>
        </p>
      </div>
    </>
  );

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
      case "admin":
        return admin_content;
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
          {loggedInUser &&
            loggedInUser.username === "admin" && ( // Sprawdzamy, czy zalogowany użytkownik to admin
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => setContent("admin")}
                >
                  Panel Admina
                </a>
              </li>
            )}
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            {loggedInUser ? (
              <span className="nav-link">Witaj, {loggedInUser.username}</span>
            ) : (
              <a
                className="nav-link btn btn-primary text-white"
                href="#"
                onClick={() => setContent("login")}
              >
                Logowanie
              </a>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );

  return (
    <div>
      {nav_bar}
      {renderContent()}
    </div>
  );
}

export default App;
