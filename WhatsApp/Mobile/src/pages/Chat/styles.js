import styled from 'styled-components/native';


export const MessageContainer = styled.View`
   width:100%;
   height:100%;
   background-color:#ECE5DD;
`



export const NameUser = styled.Text`
    color:#fff;
    align-self:center;
    font-size:18px;
    font-weight:bold;
    margin-left:10px;
    
` 
export const ProfileContainer = styled.View`
    background-color:#075e54;
    
    height:60px;
    flex-direction:row;
    align-items:center;
    
`
export const ImageUser = styled.Image`
    width:50px;
    height:50px;
    border-radius:25px;
    margin-top:7px;
    margin-left:10px;
    
`
export const ChatBox = styled.View`
    width:400px;
    max-height:710px;
    
    
    
`

export const UserMessage = styled.View`
  
    margin-top:20px;
    
    
`
export const OtherUser = styled.View`
    align-self:flex-start;
    min-width:200px;
    max-width:300px;
    min-height:30px;
    margin-top:15px;
    background-color:#fff;
    border-radius:4px;
    margin-left:15px;
    
`
export const MyUser = styled.View`
    min-width:200px;
    max-width:300px;
    min-height:30px;
    
    align-self:flex-end;
    background-color:#e1fec6;
    border-radius:4px;
    margin-right:15px;
    
`

export const Keyboard = styled.View`
    position:absolute;
    bottom:0;
    height:40px;
    margin-bottom:10px;
    flex-direction:row;
`
export const Message = styled.Text`
    padding:10px;
`

export const InputUserContainer = styled.View`
   
    background-color:white;
    border-radius:15px;
    width:300px;
    margin-left:30px;
   
`

export const SendContainer = styled.View`
    margin-left:15px;
    padding:5px;
    
`
export const MessageInput = styled.TextInput`
    font-size:15px;
    padding:10px;
`

