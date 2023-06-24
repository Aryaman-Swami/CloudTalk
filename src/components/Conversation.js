import React, { useState } from 'react';
import styled from 'styled-components';
import { messagesList } from '../mockData';
import { SearchContainer, SearchInput } from './ContactListComponent';
import Picker from 'emoji-picker-react';
import { useEffect } from 'react';
import { fetchConversation, sendMessage } from '../service/api';
import { useParams } from 'react-router-dom';

const Container = styled.div`
display:flex;
flex-direction:column;
height:100%;
flex:3;
background:#f6f7f8;
`;

const ProfileHeader = styled.div`
display:flex;
flex-direction:row;
background:#ededed;
padding:10px;
align-items:center;
gap:10px;
`;
const ProfileImage = styled.img`
width:32px;
height:32px;
border-radius:50%;
`;

const ChatBox = styled.div`
display:flex;
background:#f0f0f0;
padding:10px;
align-items:center;
bottom:0;
`;
const EmojiImage = styled.img`
width:28px;
height:28px;
opacity:0.4;
cursor:pointer;
`;

const MessageContainer = styled.div`
display:flex;
flex-direction:column;
height:100%;
background:#e5ddd6;
overflow-y:auto;

`;

const MessageDiv = styled.div`
justify-content:${(props) => (props.isYours ? "flex-end" : "flex-start")};
display:flex;
margin:5px 15px;
`;
const Message = styled.div`
background:${(props) => (props.isYours ? "#daf8cb" : "white")};
max-width:50%;
color:#303030;
padding:8px 10px;
font-size:14px;
border-radius:7px;
`;


export default function Conversation(props) {
    const { selectedChat } = props;

    // console.log(selectedChat, "selectedChat")
    const { userId } = useParams();
    useEffect(() => {
        const ini = async () => {

            const [err, convo] = await fetchConversation(selectedChat.id);
            if (err) {
                console.log(err);

            }
            console.log(convo);
            setMessageList(convo.data.responseData.messages);
        }
        ini();
    }, [selectedChat.id])


    const [text, setText] = useState("");
    const [picker, togglePicker] = useState(false);
    const [messageList, setMessageList] = useState([]);

    const onEmojiClick = (event, emojiObj) => {
        setText(text + emojiObj.emoji);
    };

    const onEnterPress = async (event) => {
        if (event.key === "Enter") {
            const messages = [...messageList];
            const msg = {
                text,
                senderId: userId,
            };
            messages.push(msg);
            setMessageList(messages);
            setText("");

            const [sendMsgerr, sendMsg] = await sendMessage(selectedChat.id, msg);
            if (sendMsgerr) {
                console.log(sendMsgerr);
            }
            if (selectedChat.id = "00000000") {
                const nmessages = [...messageList];
                nmessages.push(sendMsg.data.responseData);
                setMessageList(nmessages);

            }


        }
    }
    return (
        <Container>

            <ProfileHeader>
                <ProfileImage src="profile.jpg" />
                {selectedChat.name}
            </ProfileHeader>
            <MessageContainer>

                {messageList && messageList.length > 0 && messageList.map((messageData) => {

                    return <MessageDiv isYours={messageData.senderId == userId}>
                        <Message isYours={messageData.senderId == userId}>{messageData.text}</Message>
                    </MessageDiv>
                })}


            </MessageContainer>
            <ChatBox>
                <SearchContainer>
                    {picker && (<Picker
                        pickerStyle={{ position: "absolute", bottom: "60px" }}
                        onEmojiClick={onEmojiClick} />)}
                    <EmojiImage src="emoji.png" onClick={() => togglePicker(!picker)}></EmojiImage>
                    <SearchInput placeholder='Type a message' value={text} onChange={(e) => setText(e.target.value)}
                        onKeyDown={onEnterPress}
                    ></SearchInput>
                </SearchContainer>
            </ChatBox>
        </Container>
    )
}

