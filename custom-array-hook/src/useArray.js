import { useState } from "react";

export function useArray(initialValue) {
  const [array, setArray] = useState(initialValue);

  const set = (newArray) => {
    setArray(newArray);
    return array;
  };
  const push = (elment) => {
    setArray((currentArr) => {
      return [...currentArr, elment];
    });
  };

  const replace = (index, elment) => {
    setArray((currentArr) => {
      return [
        ...currentArr.slice(0, index),
        elment,
        ...currentArr.slice(index + 1),
      ];
    });
  };

  const filter = (callback) => {
    setArray(array.filter(callback));
  };

  const remove = (index) => {
    setArray((prevArray) => prevArray.filter((_, i) => i !== index));
  };

  const clear = () => {
    setArray([]);
  };

  const reset = () => {
    setArray(initialValue);
  };
  return { array, set, push, replace, filter, remove, clear, reset };
}
