import { createRoot } from "react-dom/client";

/* const currentDate = new Date();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();

function getRandomNumber() {
  return Math.round(Math.random() * 100);
}

const number = getRandomNumber();
*/

const person = {
  name: "Maciek",
  tel: 213769420,
  city: "kraków",
};

const newPerson = {
  name: "Kacper",
  tel: 111111111,
  city: "Warszawa",
};

const Tel = (tel) => <a href={tel}>{tel}</a>;

const element = (
  <>
    {person.name}, tel: <a href={person.tel}>{person.tel}</a>
    <h2>Tel: {Tel(person.tel)}</h2>
    <h3>Tel: {Tel(newPerson.tel)}</h3>
  </>
);

createRoot(document.getElementById("root")).render(element);
