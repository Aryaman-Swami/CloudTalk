import React, { useState, useEffect } from "react";
import styled from "styled-components";
import App from "../App";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #0a0e11;
  height: 100vh;
`;

const Header = styled.div`
  color: white;
  width: 100%;
  font-weight: bold;
  background-color: #56bca6;
  padding: 50px 50px 140px;
  font-size: 14px;
`;
const CardView = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 30px 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -80px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 40px;
  flex-wrap: wrap;
`;

const Instructions = styled.div`
  padding: 20px;
  font-size: 16px;

  ol {
    margin: 40px 0;
  }

  li {
    margin: 15px 0;
  }
`;

const Heading = styled.span`
  font-size: 24px;
  color: #525252;
`;
const SubHeading = styled.span`
  font-size: 16px;
  color: #525252;
`;

const QRCode = styled.img`
  width: 264px;
  height: 264px;
  background-color: white;
`;

const LoginComponent = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
   
  }, []);


  return (
    <>
      {userInfo ? (
        <App/>
      ) : (
        <Container>
          <Header>CloudTalk</Header>
          <CardView>
            <Instructions>
              <Heading>To use cloudtalk on your computer:</Heading>
              <br></br>
              
              
              {/* <button>Sign In using Google</button> */}
              <form action={`http://localhost:8000/auth/google`}>
              <button type="submit" className="">
                <div className="">
                  
                  <p className="">Google</p>
                </div>
              </button>
          </form>
             
            </Instructions>
            {/* <QRCode src="whatsapp-clone/qr-placeholder.png" /> */}
          </CardView>
        </Container>
      )}
    </>
  );
};
export default LoginComponent;
