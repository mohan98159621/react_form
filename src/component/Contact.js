import styled from "styled-components";
import { Col, Row, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Btn } from "./Button";
import { useState } from "react";

function Contact() {
  const [Inp, setInp] = useState({});

  const [first, setfirst] = useState(false);
  
  const [data, setdata] = useState([]);

  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };



  function onchangeHandler(e) {




    
    const { value, name } = e.target;

    setInp(() => {
      return {
        ...Inp,
        [name]: value,
      };
    });
    numValidation()
    
   
  
  }

  function numValidation(){



console.log(Inp.phone);
    if(Inp.phone==="9"){
      
      setfirst(true )
      

      
    }else if(Inp.phone==="1"){

      setfirst(false)
      console.log(first)
    }else {

  
    }

  }

  const addData = () => {






    console.log([...data, Inp]);

    navigate("/login");
  };

  return (
    <div>
      <Wrapper>
        <h1>Let's Create an Account</h1>

        <Form layout="vertical"   initialValues={{ remember: true }}  onFinish={onFinish}  onFinishFailed={onFinishFailed}  >
          <Row justify="space-between">
            <Col span={11}>
              <Form.Item label="First Name" name="firstName"
              
              
              rules={[
                {
                  required: true,
                  message: 'Please input your FirstName!',
                },
              ]}
              
              >
                <Input
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  value={Inp.firstName}
                  onChange={onchangeHandler}
                ></Input>
              </Form.Item>


{/* <Form.Item
      label="First Name"
      name="firstName"
    
    >
      <Input  onChange={onchangeHandler} />
    </Form.Item> */}
            </Col>
            <Col span={11}>
              <Form.Item label="Last Name"  name="lastName"  rules={[
                {
                  required: true,
                  message: 'Please input your LastName!',
                },
              ]}   >
                <Input
                  placeholder="Last Name"
                  type="text"
                  name="lastName"
                  value={Inp.lastName}
                  onChange={onchangeHandler}
                ></Input>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label="Email"   name="Email" rules={[
                {
                  required: true,
                  message: 'Please input your Email!',
                },
              ]}   >
            <Input
              placeholder="Email"
              type="email"
              name="Email"
              value={Inp.Email}
              onChange={onchangeHandler}
            ></Input>
          </Form.Item>

          <Form.Item label="Organization" name="Organization"   rules={[
                {
                  required: true,
                  message: 'Please input your Orgnization!',
                },
              ]}    >
            <Input
              placeholder="organization"
              type="text"
              value={Inp.Organization}
              onChange={onchangeHandler}
              name="Organization"
            ></Input>
          </Form.Item>

          <Form.Item label="Phone Number"  name="phone"   rules={[
                {
                  required: true,
                  message: 'Please input your phone!',
                },
              ]}>
            <Input
              placeholder="Phone Number"
              type="tele"
              pattern="[0-9]"
              name="phone"
               maxLength={10}
              onChange={onchangeHandler}
              value={Inp.phone}
            
            ></Input>{first? <span>indian number</span>: ""}
          </Form.Item>

          <Form.Item label="password"  name="password"   rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}>
            <Input
              placeholder="Password"
              type="password"
              name="password"
              value={Inp.password}
              onChange={onchangeHandler}
            ></Input>
          </Form.Item>
          <Btn block htmlType="submit"  onClick={addData}  >
            Register
          </Btn>
        </Form>
        <p>
          Already have an account?{" "}
          <Link to="/" style={{ textDecoration: "none", color: "green" }}>
            sign in
          </Link>
        </p>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`


margin:auto;
  width:30%;
  
  
  
Form{



margin-top:50px  !important;
}


  
  h1{

  text-align: center;
  padding-top:50px;


  }
Row{


  direction="vertical";
  size="middle";
}
label{

font-size:bold;
font-weight:bold;

}
p{


  margin-top:25px;
}
span{
  color:red;
}


 

`;

export default Contact;
