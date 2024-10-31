import { useState } from "react";
import { Form } from "./components/Form";
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
  {
    name: "Puchacz",
    tel: 123456789,
    city: "",
  },
];

const PersonInfoElements = people.map((person) => (
  <PersonInfo
    key={person.tel}
    name={person.name}
    tel={person.tel}
    city={person.city}
  />
));

function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  const AddPerson = (data) => {
    console.log(data);
  };

  return (
    <>
      {isFormShown ? (
        <Form onAddPerson={AddPerson} />
      ) : (
        <button onClick={() => setIsFormShown(true)}>Dodaj</button>
      )}

      {PersonInfoElements}
    </>
  );
}

export default App;
