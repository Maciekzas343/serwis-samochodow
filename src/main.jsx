import { createRoot } from "react-dom/client";

const currentDate = new Date();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();

function getRandomNumber() {
  return Math.round(Math.random() * 100);
}

const number = getRandomNumber();

const element = <div>{number}</div>;
console.log(hours, minutes);

createRoot(document.getElementById("root")).render(element);
