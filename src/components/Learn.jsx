import React, { useState } from "react";
import JSON from "./Github.json";
import User from "./User";

// functional component with state example
const Learn = () => {
  let [state, setState] = useState(JSON);
  console.log(state);
  return (
    <>
      <table>
        <thead>
          <th>Photo</th>
          <th>name</th>
          <th>repo</th>
          <th>veiw</th>
        </thead>
        <tbody>
          {state.map(user => {
            return <User {...user} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default Learn;
