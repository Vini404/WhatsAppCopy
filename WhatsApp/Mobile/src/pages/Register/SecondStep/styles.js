

import styled from 'styled-components/native';




export const InputContainer = styled.View`
    width:310px;
    margin-top:40px;
    margin-left:40px;
    
`

export const InputEmail = styled.TextInput`
   border:1px solid ${props=>props.error?"red":"black"};
   border-radius:5px;
   margin-top:15px;
   height:45px;
   padding-left:5px;

`

export const InputName = styled.Text`
    font-size:15px;
    
    
`


