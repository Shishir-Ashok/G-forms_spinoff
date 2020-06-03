import React from "react";
import { useInput } from "../../Hooks/useInput";
import { TextField } from "@material-ui/core";

export default function SignUp() {
  const username = useInput("");
  const email = useInput("");

  return (
    <div>
      <TextField label="Username" {...username}></TextField>
    </div>
  );
}
