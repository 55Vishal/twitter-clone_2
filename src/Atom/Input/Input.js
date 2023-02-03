import React, { useState } from "react";
// import style from "../styled.module.css";
function Input(props) {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type={props.type}
        className={props.className}
        placeholder={props.placeholder}
        onChange={e => props.handleOnchange(e.target.value)}
      />
    </div>
  );
}

export default Input;
