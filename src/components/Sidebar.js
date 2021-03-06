import React from 'react'
import styled from "styled-components";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {sidebarItemsData} from "../data/Sidebar";
import AddIcon from '@material-ui/icons/Add';
import db from "../firebase";
import {useHistory} from "react-router-dom";
function Sidebar(props) {

   // console.log(props); room:[{}{}]
   const history = useHistory();

   const goToChannel = (id)=>{
       if(id){
           console.log(id); 
            history.push(`/chat/${id}`)
       }
   }

   const addChannel = ()=>{
       const promptName = prompt("Enter the channel Name");
       if(promptName){
           db.collection("rooms").add({
               name:promptName
           })
       }
       console.log(promptName); 
       //first we have to call db actual data
   }

    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    Devendra Kumar Jat
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon/>
                </NewMessage>
            </WorkspaceContainer>
            
            <MainChannels>
              {
                sidebarItemsData.map(item=>{
                    return(
                    <MainChannelItem>
                        {item.icon}
                        {item.text}
                    </MainChannelItem>
                        
                    ); 
                })
             } 
            </MainChannels>
            <ChannelsContainer>
                <NewChannelContainer>
                 <div>
                     MainChannels
                 </div>
                  <AddIcon onClick={addChannel}/>
                </NewChannelContainer>
            
                 <ChannelList>
                    {
                        props.rooms.map(item=>(
                            <Channel onClick = {()=>goToChannel(item.id)} >
                                 # {item.name}
                            </Channel>
                        ))
                     
                    }
                    {/*
                    Default channels
                     <Channel>
                        #channel 1
                    </Channel>
                    <Channel>
                        #channel 2
                    </Channel> */}

                </ChannelList>

            </ChannelsContainer>

        </Container>
    )
}

export default Sidebar;

const Container = styled.div `
    background: #3f0e40   ;

`
const WorkspaceContainer = styled.div `
 color:white;
 height:64px;
 display:flex;
 align-items:center;
 padding-left:19px; 
 justify-content:space-between;
 border-bottom: 1px solid #532753
`

const Name = styled.div ``

const NewMessage= styled.div `
    width:36px;
    height:36px;
    background:white;
    color: #3F0E40;
    fill: #3f0e40;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    margin-right:20px;
    cursor:pointer;

    
`

const MainChannels =styled.div `
 padding-top: 20px;


`

const MainChannelItem = styled.div `
     color:rgb(188,171,188);
     dispaly: grid;
     display: flex; 
     grid-template-columns:15% auto;
     height: 20px;
     align-items: center;
     padding-left:19px;
     margin-bottom:4px;
     cursor:pointer; 
     padding-top:20px;
     justify-content:space;
     :hover{
        background: #358036
    }
`

const ChannelsContainer = styled.div `

`
const NewChannelContainer= styled.div `
    display: flex;  
    justify-content: space-between;
    align-items: center;
    height: 20px;
    padding-left:19px;
    padding-right:19px;
`
const ChannelList =styled.div ``
const Channel =styled.div `
    color:white;
    height:20px;
    display: flex;

    align-tems:center;
    padding-left:19px; 
    cursor:pointer;
    :hover{
        background: #358036
    }

`