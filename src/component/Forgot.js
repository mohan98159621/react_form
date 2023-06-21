import React from "react";
import styled from "styled-components";
import { Form, Input } from "antd";

import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useState } from "react";

import { Btn } from "./Button";

function Forgot() {
  const [email, setemail] = useState("");
  const [UserErr, setUserErr] = useState(false);

  function emailHandeler(e) {
    const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const item = e.target.value;

    setemail(item);
    if (item.match(pattern)) {
      setUserErr(false);
    } else {
      setUserErr(true);
    }
  }

  return (
    <div>
      <Wraper>
        <section>
          <span>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              {" "}
              <ArrowLeftOutlined></ArrowLeftOutlined> Back
            </Link>
          </span>

          <header>
            <h1>Forgot your Password?</h1>
            <p>Please enter the email you use to sign in to Gaize.</p>
          </header>
          <Form layout="vertical">
            <Form.Item label="Email">
              <Input
                placeholder="email"
                name="Email"
                onChange={emailHandeler}
              ></Input>
              {UserErr ? <span>enter valid value</span> : ""}
            </Form.Item>
          </Form>

          <Btn> Send Reset Email</Btn>
        </section>
      </Wraper>
    </div>
  );
}
export const Wraper = styled.div`
  margin: auto;
  width: 30%;

  margin-top: 150px;

  label {
    font-size: bold;
    font-weight: bold;
  }
  header {
    margin-top: 30px;
    text-align: center;
  }
  span{

    color:red;
  }
`;

export default Forgot;
