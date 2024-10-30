import { PersonInfo } from "./components/PersonInfo";

/* const currentDate = new Date();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();

function getRandomNumber() {
  return Math.round(Math.random() * 100);
}

const number = getRandomNumber();
*/

// Tel: <Tel tel={newPerson1.tel} />

const people = [
  {
    name: "Maciek",
    tel: 213769420,
    city: "kraków",
  },
  {
    name: "Kacper",
    tel: 111111111,
    city: "Warszawa",
  },
];

function App() {
  return (
    <>
      <PersonInfo
        name={people[0].name}
        tel={people[0].tel}
        city={people[0].city}
      />

      <PersonInfo
        name={people[1].name}
        tel={people[1].tel}
        city={people[1].city}
      />
    </>
  );
}

export default App;
