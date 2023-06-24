
import styled from 'styled-components';
import { useState } from 'react';
import ContactListComponent from './components/ContactListComponent';
import Conversation from './components/Conversation';

const Container = styled.div`
display:flex;
flex-direction:row;
height:100vh;
width:100%;
background:#f8f9fb;

`;
const PlaceHolder = styled.div`
flex:3;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
font-size:14px;
color:rgba(0,0,0,0.45);
gap:10px;
span{
  font-size:32px;
  color:#525252;
}
`;

const ChatPlaceholder = styled.div`
width:240px;
height:240px;
border-radius:50%;
object-fit:contain;

`;

function App() {
  const [selectedChat, setChat] = useState();

  return (
    <Container>
      <ContactListComponent setChat={setChat}></ContactListComponent>
      {selectedChat ? <Conversation selectedChat={selectedChat}></Conversation> : (
        <PlaceHolder>
          <ChatPlaceholder src="profile.jpg" />
          <span>Keep Your Phone Connected</span>
        </PlaceHolder>
      )}
    </Container>)
    ;
}

export default App;
