// import React from 'react'
// import { useState } from 'react'

// const Semdata1 = () => {
//     let [number, setNumber] = useState(0)
//     let getRandomNumber = () => {
//         setNumber( Math.round(Math.random() * 100));
//     }
//   return (
//       <div>
//           <h1>{number}</h1>
//           <button onClick={getRandomNumber}>click</button>
//     </div>
//   )
// }

// export default Semdata1

import React, { useState } from 'react'
const Semdata1 = () => {
  // without distructure
  let [count, setCount] = useState(0);
  // 2nd method
  let Incre = () => {
    // setCount(count+1);
      setCount(prevValue => prevValue + 10);
      setCount(prevValue => prevValue + 10);
  };
 let Decre = () => {
    // setCount(count -1);
     setCount(prevValue => prevValue - 10);
      setCount(prevValue => prevValue - 2);
    };
  let  Reset = () => {
      setCount(0);
    };
    return (
      <div>
        <section id="countGrade">
          <article>
            <h1>{count}</h1>
            <button onClick={Incre}>Increment</button>
            <button onClick={Decre}>Decrement</button>
            <button onClick={Reset}>Reset</button>
          </article>
        </section>
      </div>
    );
}

export default Semdata1