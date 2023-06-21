import React from "react";
import styled from "styled-components";

export const Btn = styled.div`
  padding: 4px 8px;
  border: none;
  margin-top: 50px;
  background-color: rgb(47, 161, 237);
  color: white;
  text-align: center;
  border-radius: 5px;
`;

function Button() {
  return (
    <div>
      <Btn></Btn>
    </div>
  );
}

export default Button;
