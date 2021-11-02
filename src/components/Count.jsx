import { useState } from "react";

export const Count = () => {
  const [count, setCount] = useState(0);
  const onClickButton = () => {
    // 更新関数の中で関数
    setCount((c) => c + 1);
  };

  return (
    <>
      <h1>カウント： {count}</h1>
      <button onClick={onClickButton}>+</button>
    </>
  );
};
