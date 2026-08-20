import {} from "react";
import { useState } from "react";
import { Button } from "./components/Button/Button";

// export const Counter = () => {
//     let count = 1;

//     return (
//         <button onClick = {() => ++count}>
//             count is {count}
//         </button>
//     );
// };

export const Counter = () => {
  const [count, setCount] = useState(0);

  const setConterHandler = () => {
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // асинхронный способ
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    // синхронное колбэк функии - предсказуемое обновление состояния
  };

  return <Button onClick={setConterHandler}>count is {count}</Button>;
};
