import React, { useState , useEffect } from 'react'
import styled from 'styled-components';
// import { contactList } from '../mockData';
import {getUserData} from '../service/api.js'
import { Routes, Route, useParams } from 'react-router-dom';

const Container = styled.div`
display:flex;
flex-direction:column;
height:100%;
width:100%;
flex:1.6;
`;

const ProfileInfoDiv = styled.div`
display:flex;
flex-direction:row;
background:#ededed;
padding:10px`


const ProfileImage = styled.img`
width:32px;
height:32px;
border-radius:50%;
`;

const SearchBox = styled.div`
background:#f6f6f6
padding:10px;
`;

export const SearchContainer = styled.div`
display:flex;
flex-direction:row;
background:white;
border-radius:16px;

width:100%;
padding:5px 15px;
`;

const SearchIcon = styled.img`
width:28px;
height:28px;
padding:0px 10px;
`
export const SearchInput = styled.input`
width:100%;
outline:none;
border:none;
font-size:15px;
margin-left:10px;
`;
const ContactItem = styled.div`
display:flex;
flex-direction:row;
width:100%;
border-bottom:1px solid #f2f2f2;
background:white;
cursor:pointer;
padding:15px 12px;

:hover{
    background: #ebebeb;
}

`;
const ProfileIcon = styled(ProfileImage)`
width:38px;
height:38px;
`;
const ContactInfo = styled.div`
display:flex;
flex-direction:column;
width:100%;
margin:0 12px;
`;
const ContactName = styled.span`
font-size:16px;
color:black;
width:100%;
`;
const MessageText = styled.span`
font-size:12px;
margin-right:10px;
white-space: nowrap;
color:rgba(0,0,0,0.8);
`;

const MessageTime = styled.span`
font-size:14px;
width:100%;
margin-top:3px;
color:rgba(0,0,0,0.8);
`;



const ContactComponent = (props) => {
    const { userData, setChat } = props;
    

    return (<ContactItem onClick={()=> setChat(userData)}>
            <ProfileIcon src={userData.profilePic}></ProfileIcon>
        <ContactInfo>
            <ContactName>
                {userData.name}
            </ContactName>
            {/* <MessageText>{userData.lastText}</MessageText> */}
        </ContactInfo>
        {/* <MessageTime>{userData.lastTextTime}</MessageTime> */}
    </ContactItem>);
}


export default function ContactListComponent(props) {
    const [userinfo , setUserInfo]= useState(null);
    //extract _id from url params
     const { userId } = useParams();
     
    useEffect(() => {
        const getUser = async () => {
          const [err , user] = await getUserData(userId);
          if(err) console.log(err);
          console.log(user);
          setUserInfo(user.data.responseData);
          console.log(userinfo);
          
          }
          getUser();
      
        
      }, [])

      

        return (
            <Container>
                <ProfileInfoDiv>
                    <ProfileImage src="profile.jpg" />
                </ProfileInfoDiv>
                <SearchBox>
                    <SearchContainer>
                        <SearchIcon src="search.png" />
                        <SearchInput placeholder="Search or start new chat" />
                    </SearchContainer>
                </SearchBox>
                {userinfo !== null && userinfo.friendsList.length > 0 && userinfo.friendsList.map((userData) => {
                    return <ContactComponent userData={userData} setChat={props.setChat}/>
                })}

            </Container>
        )
    }

