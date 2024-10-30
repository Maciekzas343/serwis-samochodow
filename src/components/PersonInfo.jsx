import { useState } from "react";
import { Tel } from "./Tel";

export const PersonInfo = (props) => {
  let stateArray = useState(false);
  let isExpanded = stateArray[0];
  let setIsExpanded = stateArray[1];

  const buttonE1 = (
    <button
      onClick={() => {
        setIsExpanded(true);
      }}
    >
      Pokaż
    </button>
  );

  return (
    <>
      <h2>{props.name}</h2>

      {!isExpanded && buttonE1}
      {isExpanded && (
        <>
          <h3>
            Telefon: <Tel tel={props.tel} />
          </h3>
          {props.city !== undefined ? <h3>Miasto: {props.city}</h3> : null}
        </>
      )}
      <hr />
    </>
  );
};
