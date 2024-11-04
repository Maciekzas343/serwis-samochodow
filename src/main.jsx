import { createRoot } from "react-dom/client";
import App from "./App";

import "./index.css";

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

createRoot(document.getElementById("root")).render(glowny_content);
