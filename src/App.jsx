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


 Tel: <Tel tel={newPerson1.tel} />

const initialPeople = [
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
  {
    name: "Jan",
    tel: 534654621,
    city: "Gdańsk",
  },
];


const [isFormShown, setIsFormShown] = useState(false);
  const [people, setPeople] = useState(initialPeople);

  const AddPerson = (data) => {
    const newPeople = [...people, data];
    setPeople(newPeople);
    setIsFormShown(false);
  };


  return

  {isFormShown ? (
        <Form onAddPerson={AddPerson} />
      ) : (
        <button onClick={() => setIsFormShown(true)}>Dodaj</button>
      )}
      {people.map((person) => (
        <PersonInfo
          key={person.tel}
          name={person.name}
          tel={person.tel}
          city={person.city}
        />
      ))}


*/

function App() {
  return 0;
}

export default App;
