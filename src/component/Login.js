import React from "react";
import styled from "styled-components";
import { Form, Input } from "antd";
import { Btn } from "./Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [UserErr, setUserErr] = useState(false);
  const [passErr, setpassErr] = useState(false);

  const navigate = useNavigate();

  function emailHandler(e) {
    e.preventDefault();

    const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const item = e.target.value;

    setemail(item);
    if (item.match(pattern)) {
      setUserErr(false);
    } else {
      setUserErr(true);
    }
  }

  function passHandler(e) {
    const item = e.target.value;

    if (item.length < 4) {
      setpassErr(true);
    } else {
      setpassErr(false);
    }

    setpassword(item);
  }
  function validate() {
    if (email.length < 4 || password.length < 4) {
      alert("Please enter valid credentials");
    } else {
      alert("login successfull");
      navigate("/login");
    }

    
  }

  return (
    <div>
      <Wraper>
        <Form layout="verticle">
          <header>
            <h1>Login</h1>
          </header>

          <section>
            <Form.Item name="Email">
              <span>Please enter your email address and password to login</span>
              <Input placeholder="Email" name="email" onChange={emailHandler}></Input>
              {UserErr ? <p>enter valid value</p> : ""}
            </Form.Item>

            <Form.Item name="Password">
              <Input
                placeholder="password"
                name="password"
                onChange={passHandler}
              ></Input>
              {passErr ? <p>maximum length 4</p> : ""}
            </Form.Item>

            <Link to="/Forgot">
              <div>Forgot your Password?</div>
            </Link>
          </section>
          <Btn type="submit" onClick={validate}>
            Login
          </Btn>
        </Form>
      </Wraper>
    </div>
  );
}

export const Wraper = styled.div`
  margin: auto;
  width: 30%;

  margin-top: 150px;

  section {
    margin-top: 30px;
  }
  span {
    font-size: bold;
    font-weight: bold;
  }
  p {
    color: red;
  }
`;

export default Login;
