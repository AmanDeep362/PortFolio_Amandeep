import Particle from "./Particle";
import React, { useState } from "react";
import laptopImg from "./../Assets/about.png";
import {useHistory} from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";
const HireMe = () => {
  const history = useHistory();
  const [contact,SetContact] = useState({
    name:"",email:"",Contact:"",city:"",Message:""
  })
  let name ,value;
  const handleInput = (e)=>{
     name = e.target.name;
     value=e.target.value;
     SetContact({...contact,[name]:value})
  }
  const PostMessage =async (e)=>{
    e.preventDefault();
    const {name,email,Contact,city,Message} = contact;
        const res =  await fetch("/hireme" ,{
            method : "POST",
            headers : { 
                "content-Type" : "application/json"
            },
            body : JSON.stringify({
                name,email,Contact,city,Message
            })
        });

      // const data = await res.json();
      // console.log(contact)

    if(res.status === 201){
          window.alert("Your Message is Succesfully Sent");
          
          history.push("/");
      }
    else {
        window.alert("Error occured , try again")
    }
  }
  console.log(contact);
  return (
    <>
      <Container fluid className="about-section">
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
                <img src={laptopImg} alt="about" className="img-fluid" />
                </Col>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <div style={{ display: "block", padding: 30 }}>
                <h4
                  className="purple"
                  style={{
                    fontSize: "62px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hire me
                </h4>
                <div>
                  <form method="POST">
                    <input
                      type="text"
                    
                      style={{
                        background: "transparent",
                        borderTop: "none",
                        color: "white",
                        margin:"3% 0%",
                        width:"100%",
                        borderLeft: "none",
                        borderRight: "none",
                        borderBottom: "4px solid purple",
                      }}
                      placeholder="Enter Your Name"
                      className="input-box"
                      name="name"
                      onChange={handleInput}
                      value={contact.name}
                    /> <br></br>
                    <input
                      type="email"
                    
                      style={{
                        background: "transparent",
                        borderTop: "none",
                        color: "white",
                        margin:"3% 0%",
                        borderLeft: "none",
                        borderRight: "none",
                        width:"100%",
                        borderBottom: "4px solid purple",
                      }}
                      placeholder="Enter Your Email"
                      className="input-box"
                      name="email"
                      onChange={handleInput}
                      value={contact.email}
                    /> <br/>
                    <input
                      type="text"
                    
                      style={{
                        background: "transparent",
                        borderTop: "none",
                        color: "white",
                        margin:"3% 0%",
                        borderLeft: "none",
                        width:"100%",
                        borderRight: "none",
                        borderBottom: "4px solid purple",
                      }}
                      placeholder="Enter Your Contact"
                      className="input-box"
                      name="Contact"
                      onChange={handleInput}
                      value={contact.Contact}
                    /><br/>
                    <input
                      type="text"
                    
                      style={{
                        background: "transparent",
                        borderTop: "none",
                        color: "white",
                        margin:"3% 0%",
                        width:"100%",
                        borderLeft: "none",
                        borderRight: "none",
                        borderBottom: "4px solid purple",
                      }}
                      placeholder="Enter Your City"
                      className="input-box"
                      name="city"
                      onChange={handleInput}
                      value={contact.city}
                    /><br/>
                    <textarea
                      type="text"
                    
                      style={{
                        background: "transparent",
                        borderTop: "none",
                        width:"100%",
                        color: "white",
                        margin:"3% 0%",
                        borderLeft: "none",
                        borderRight: "none",
                        borderBottom: "4px solid purple",
                      }}
                      placeholder="Why You Hire Me"
                      className="input-box"
                      name="Message"
                      onChange={handleInput}
                      value={contact.Message}
                    />
                    <input type="submit" value="submit Your Response"
                    style={{
                        width:"100%",
                        height:"50px",
                        color: "white",
                        margin:"3% 0%",
                    backgroundColor:"purple"
                  }}
                  onClick={PostMessage}
                    />
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default HireMe;
