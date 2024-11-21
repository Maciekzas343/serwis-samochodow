import { useState, useEffect } from "react";

function App() {
  const [content, setContent] = useState("glowny");
  const [loggedInUser, setLoggedInUser] = useState(null); // Stan dla zalogowanego użytkownika
  const [users, setUsers] = useState([]); // Przechowywanie danych użytkowników
  const [vehicles, setVehicles] = useState([]); // Lista pojazdów użytkownika
  const [repairs, setRepairs] = useState([]); // Przechowywanie historii napraw

  // Pobieranie użytkowników z API
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Błąd pobierania użytkowników:", error));
  }, []);

  // Pobieranie pojazdów dla zalogowanego użytkownika
  useEffect(() => {
    if (loggedInUser) {
      fetch(`http://localhost:5000/vehicles?userId=${loggedInUser.id}`)
        .then((response) => response.json())
        .then((data) => setVehicles(data))
        .catch((error) => console.error("Błąd pobierania pojazdów:", error));
    }
  }, [loggedInUser]);

  // Pobieranie historii napraw
  useEffect(() => {
    fetch("http://localhost:5000/repairs")
      .then((response) => response.json())
      .then((data) => setRepairs(data))
      .catch((error) => console.error("Błąd pobierania napraw:", error));
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
      setContent("auto");
    } else {
      alert("Nieprawidłowe dane logowania!");
    }
  };

  // Poprawka w handleAddRepair
  const handleAddRepair = (event, vehicleId) => {
    event.preventDefault();
    const title = event.target.title.value;
    const date = event.target.date.value;
    const description = event.target.description.value;

    const newRepair = {
      vehicleId, // Poprawne przypisanie vehicleId
      title,
      date,
      description,
    };

    fetch("http://localhost:5000/repairs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRepair),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Błąd dodawania naprawy");
        }
      })
      .then((savedRepair) => {
        setRepairs((prevRepairs) => [...prevRepairs, savedRepair]);
        alert("Naprawa została dodana!");
      })
      .catch((error) => console.error("Błąd dodawania naprawy:", error));
  };

  const handleAddVehicle = (event) => {
    event.preventDefault();
    const type = event.target.type.value;
    const registrationNumber = event.target.registrationNumber.value;
    const vin = event.target.vin.value;
    const lastInspectionDate = event.target.lastInspectionDate.value;
    const inspectionExpiryDate = event.target.inspectionExpiryDate.value;

    const newVehicle = {
      userId: loggedInUser.id,
      type,
      registrationNumber,
      vin,
      lastInspectionDate,
      inspectionExpiryDate,
    };

    fetch("http://localhost:5000/vehicles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newVehicle),
    })
      .then((response) => {
        if (response.ok) {
          return response.json(); // Pobierz odpowiedź z serwera
        } else {
          throw new Error("Błąd dodawania pojazdu");
        }
      })
      .then((savedVehicle) => {
        setVehicles((prevVehicles) => [...prevVehicles, savedVehicle]); // Dodajemy pojazd z ID
        alert("Pojazd został dodany!");
      })
      .catch((error) => console.error("Błąd dodawania pojazdu:", error));
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

  const glowny_content = (
    <>
      <div className="container mt-4">
        <h1>Profesjonalne Serwisowanie Auta</h1>
        <p>Zapewniamy kompleksową obsługę Twojego pojazdu w Radomiu.</p>
        <a
          href="#"
          onClick={() => setContent("oferta")}
          className="btn btn-primary"
        >
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

  const add_vehicle_content = (
    <>
      <div className="container mt-4">
        <h2>Dodaj Pojazd</h2>
        <form onSubmit={handleAddVehicle}>
          <div className="form-group">
            <label htmlFor="type">Typ pojazdu</label>
            <select id="type" name="type" className="form-control" required>
              <option value="Samochód osobowy">Samochód osobowy</option>
              <option value="Pojazd ciężarowy">Pojazd ciężarowy</option>
              <option value="Czterokołowiec (Quad)">
                Czterokołowiec (Quad)
              </option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="registrationNumber">Numer rejestracyjny</label>
            <input
              type="text"
              id="registrationNumber"
              name="registrationNumber"
              className="form-control"
              pattern=".{7,8}"
              title="Numer rejestracyjny musi mieć 7-8 znaków."
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="vin">Numer VIN</label>
            <input
              type="text"
              id="vin"
              name="vin"
              className="form-control"
              pattern=".{17}"
              title="Numer VIN musi mieć dokładnie 17 znaków."
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastInspectionDate">
              Data ostatniego przeglądu
            </label>
            <input
              type="date"
              id="lastInspectionDate"
              name="lastInspectionDate"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="inspectionExpiryDate">
              Data ważności przeglądu
            </label>
            <input
              type="date"
              id="inspectionExpiryDate"
              name="inspectionExpiryDate"
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-success mt-3">
            Zapisz
          </button>
        </form>
        <button
          className="btn btn-secondary mt-3"
          onClick={() => setContent("auto")}
        >
          Powrót
        </button>
      </div>
    </>
  );

  const auto_content = (
    <>
      <div className="container mt-4">
        <h2>Status Twojego Auta</h2>
        {vehicles.filter((vehicle) => vehicle.userId === loggedInUser.id)
          .length === 0 ? (
          <p>
            Brak pojazdów. Kliknij przycisk poniżej, aby dodać pierwszy pojazd.
          </p>
        ) : (
          <ul className="list-group">
            {vehicles
              .filter((vehicle) => vehicle.userId === loggedInUser.id)
              .map((vehicle, index) => (
                <li key={index} className="list-group-item">
                  <strong>Typ:</strong> {vehicle.type} <br />
                  <strong>Rejestracja:</strong> {vehicle.registrationNumber}{" "}
                  <br />
                  <strong>VIN:</strong> {vehicle.vin} <br />
                  <strong>Data ostatniego przeglądu:</strong>{" "}
                  {vehicle.lastInspectionDate} <br />
                  <strong>Data ważności przeglądu:</strong>{" "}
                  {vehicle.inspectionExpiryDate}
                  <h5 className="mt-3">Historia Napraw:</h5>
                  <ul>
                    {repairs
                      .filter((repair) => repair.vehicleId === vehicle.id) // Filtrujemy według poprawnego ID pojazdu
                      .map((repair, idx) => (
                        <li key={idx}>
                          <strong>{repair.date}</strong>: {repair.title} -{" "}
                          {repair.description}
                        </li>
                      ))}
                  </ul>
                  <form
                    className="mt-3"
                    onSubmit={(e) => handleAddRepair(e, vehicle.id)}
                  >
                    <h6>Dodaj Naprawę</h6>
                    <div className="form-group">
                      <label htmlFor="title">Tytuł</label>
                      <input
                        type="text"
                        name="title"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="date">Data</label>
                      <input
                        type="date"
                        name="date"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="description">Opis</label>
                      <textarea
                        name="description"
                        className="form-control"
                        rows="3"
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-success mt-2">
                      Dodaj Naprawę
                    </button>
                  </form>
                </li>
              ))}
          </ul>
        )}
        <button
          className="btn btn-primary mt-4"
          onClick={() => setContent("add_vehicle")}
        >
          Dodaj pojazd
        </button>
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
      case "add_vehicle":
        return add_vehicle_content;
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
