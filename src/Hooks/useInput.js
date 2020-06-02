import { useState, useEffect } from "react";

export default useInput = (intialValue) => {
  const [value, setValue] = useState(intialValue);
  onChange = (e) => {
    setValue(e.target.value);
  };
  return [value, onChange];
};
