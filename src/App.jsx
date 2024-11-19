import { useState, useEffect } from "react";

function App() {
  const [content, setContent] = useState("glowny");
  const [posts, setPosts] = useState([]);

  // Pobieranie postów z API (JSON Server)
  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Błąd pobierania danych:", error));
  }, []);

  const glowny_content = (
    <>
      <div className="container mt-4">
        <div>
          <h1>Profesjonalne Serwisowanie Auta</h1>
          <p>Zapewniamy kompleksową obsługę Twojego pojazdu w Radomiu.</p>
          <a href="#services" className="btn btn-primary">
            Zobacz nasze usługi
          </a>
        </div>

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

          <div className="promotion mt-4">
            <h3 className="text-center">Aktualne Promocje</h3>
            <ul>
              <li>10% zniżki na pierwszy przegląd!</li>
              <li>Bezpłatna diagnostyka komputerowa przy każdej naprawie!</li>
              <li>Wymiana oleju z rabatem 15% w miesiącu marcu!</li>
            </ul>
          </div>
        </div>

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

  const renderContent = () => {
    switch (content) {
      case "glowny":
        return glowny_content;
      case "auto":
        return auto_content;
      case "oferta":
        return oferta_content;
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
