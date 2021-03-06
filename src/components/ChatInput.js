import React, { useState } from 'react'
import styled from "styled-components";
import SendIcon from '@material-ui/icons/Send';

function ChatInput({sendMessage}) {

    const [input, setInput] = useState("");// to keep track of our writing
    

    const send  = (e)=>{
        e.preventDefault();//to stod the page refreshing
        if(!input) return;
        sendMessage(input)
        setInput("")
    }

    return (
        <Container>
            <InputContainer>
                <form >
                 <input 
                     onChange={(e)=>setInput(e.target.value)}
                     type="text" 
                     value={input}
                     placeholder ="message here................. "/>
                <SendButton
                type="submit"
                 onClick={send}>
                      <Send/>
                </SendButton>
                </form>
            </InputContainer>
        </Container>
    )
}

export default ChatInput;

const Container = styled.div `
    padding-left:20px;
    pdding-right:20px;
    padding-bottom:24px;
    border:1 px solid #8D8D8E;  

`
const InputContainer = styled.div `
  border: 1px solid #808080;
  border-radius: 4px;
  form{
      display:flex;
      height:42px;
      align-items:center;
      padding-left:10px;
       input{
           flex:1;
           border:none;
           font-size:13px; 
       }
       input:focus{
           border:none;
           outline:none;
       }

  }
`
 const SendButton = styled.button `
    background:green;
    border-radius:25%;
    width:32px;
    height:32px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:5px;
    cursor:pointer;
     
    .MuiSvgIcon-root{
      width:18px  
    }
    :hover{
        background:#140567;
    }
`

 const Send = styled(SendIcon) `
    color:#D9D9D9;
`