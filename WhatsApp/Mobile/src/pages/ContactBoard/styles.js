import styled,{css}from 'styled-components/native';

const Style =css`
 height:30px;
  width:200px;
  background-color:#fff;
  align-self:center;
  border-radius:100px;


  
`


export const Container = styled.View`
    
`;
export const Header = styled.View`
    display:flex;
    height:80px;
    background-color:#075e54;
    padding-top:30px;
    flex-direction:row;
    position:relative;
`;

export const WhatsApp = styled.Text`
  display:flex;
  color:#fff;
  padding:10px;
  font-size:25px;

`

export const IconsContainer = styled.View` 
   flex-direction:row; 
   position:absolute;
   bottom:0;
   right:10px; 
   padding:10px;

 
`


export const SearchContainer = styled.View`
  padding-right:13px;
  
`

export const ContactContainer = styled.View`
      padding-left:10px;
`

export const TextInput  = styled.TextInput`
  ${props=>props.active?Style:""}

   
`

export const MessageBoard = styled.TouchableOpacity  `
  display:flex;
  padding:10px 0 5px 10px;  
  flex-direction:row;
  width:100%;
  margin-top:10px;
 
`;

export const MessageContainer = styled.View`
    
    padding-left:8px;
    position:relative;
    
`
export const Avatar = styled.Image`
  width:60px;
  height:60px;
  border-radius:30px;
`
export const Name = styled.Text`
  font-size:20px;
  color:grey;
  font-weight:bold;
  
`
export const LastMessage = styled.Text`
    padding-top:5px;
`

export const NotificationContainer = styled.View`  
  width:26px;
  height:26px;  
  position:absolute;
  right:0;
  bottom:5;
  margin:0 15px 8px ;
  background:#128C7E;
  justify-content:center;  
  border-radius:13px;
`

export const Notification = styled.Text`  
    padding:5px;
    color:#fff;

`

export const TimeTheLastMessage  = styled.Text`
  position:absolute;
  right:0;
  padding:10px;
  color:#25d366;

`

export const Buttons = styled.Image`
  padding-left:10px;
`



