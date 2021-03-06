import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from "./ChatInput"; 
import ChatMessage from "./ChatMessage";
import db from '../firebase';
import { useParams } from 'react-router';
import firebase from  "firebase";
//import firebase from "../firebase"
function Chat({user}) {

    let { channelId } = useParams();

    const [channel, setChannel] = useState();
    const [messages, setMessages] = useState([]);

    const getChannel = ()=> {
        db.collection("rooms")
        .doc(channelId)
        .onSnapshot((snapshot)=>{
             console.log(snapshot.data());
           setChannel(snapshot.data());
        })
    }

    // const getMessages = ()=>{
    //     db.collection("rooms")
    //     .doc(channelId)
    //     .collection('messages')
    //     .orderBy('timestamp','asc')
    //     .onSnapshot((snapshot)=>{
    //         let messages = snapshot.doc.map((doc)=>doc.data());
    //         console.log(messages);
    //         setMessages(messages);
    //     })
    // }
   

    useEffect(() => {
        getChannel();
        getMessages();
    }, [channelId]); // when the channel id is goinf to change  get channel function is called


    const getMessages = () => {
        db.collection('rooms')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot)=>{
            let messages = snapshot.docs.map((doc)=>doc.data());
            console.log(messages);
            setMessages(messages);
        })
    }

    const sendMessage = (text) => {
        if(channelId){
            let payload = {
                text: text,
                timestamp: firebase.firestore.Timestamp.now(),
                user: user.name,
                userImage: user.photo
            }

            console.log(payload);
            db.collection("rooms").doc(channelId).collection('messages').add(payload);
        }
    }

    return (
       <Container>
          <Header>
            <Channel>
                <ChannelName>
                   # {channel && channel.name} 
                </ChannelName>

                <ChannelInfo>
                    learn to clone websites
                </ChannelInfo>
              

            </Channel>

            <ChannelDetails>
                <div>
                    Details
                </div>
                <info>
                     <InfoOutlinedIcon/> 
                </info>
            </ChannelDetails>
          </Header>

          <MessageContainer>
                {
                    messages.length > 0 &&
                    messages.map((data, index)=>(
                        <ChatMessage
                            text = {data.text}
                            name = {data.user}
                            image = {data.userImage}
                            timestamp = {data.timestamp}
                        />
                    ))
                }
                
          </MessageContainer>
          
          <ChatContainer>
             <ChatInput sendMessage={sendMessage}/>
          </ChatContainer>
          

       </Container>
    );
}

export default Chat;

const Container = styled.div `
    display: grid;
    grid-template-rows: 64px auto min-content ;
    min-height:0;
`
const Header = styled.div `
    padding-left:20px;
    padding-right:20px;
    display:flex;
    align-items:center;
     border-bottom: 2px solid rgba(83,39,83,.13);
     justify-content: space-between;
 
`
 const Channel = styled.div ``

 const ChannelName = styled.div `
    font-weight:700;
`
 const ChannelInfo = styled.div ` 
    font-weight:400;
    color:#606060;
    font-size: 13px;
    margin-top:8px; 
 `

 const ChannelDetails = styled.div `
   display:flex;
   align-items:center;
   color:#606060;

 `
 // add the css to that icon

const info = styled(InfoOutlinedIcon) `
    margin-left: 10px; 
`

const MessageContainer = styled.div `
    display:flex;
    flex-direction:column;
    overflow-y :scroll;

`
const ChatContainer= styled.div `
    border: 1px solid #808080;
    margin-buttom: auto;
`

 