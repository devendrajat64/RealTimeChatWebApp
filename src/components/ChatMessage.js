import React from 'react'
import styled from "styled-components";
function ChatMessage({text,name,image,timestamp}) {
    return (
      <Container>
           <UserAvatar>
               <img src={image}/>
           </UserAvatar>
           <MessageContent>
               <Name>
                    {name}
                  <span>{new Date(timestamp.toDate()).toUTCString()}</span>
               </Name>
               <Text>
                    {text}
               </Text>
           </MessageContent>
      </Container>
      
    )
}

export default ChatMessage;

const Container = styled.div `
    background: #ffff ;
    padding: 8px 20px;
    align-items:center;
    :hover{
      background:#fdfd;
  }
`
const UserAvatar = styled.div `
    width:36px;
    height:36px;
    border-radius:50%;
    overflow: hidden;
    img{
        width:100%;
    }

`
const MessageContent = styled.div `
 display: flex;
 flex-direction:column;
  
`
const Name = styled.span `
    font-weight:900;
    font-size:15px;
    line-height:1.4;
   
    span{
        margin-left:8px;
        font-weight:400;
        color:rgb(97,96,97);
        font-size:13px;
    }

`
const Text = styled.span ``



