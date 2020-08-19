import React from 'react';
import { Image  } from 'react-native';
import WhatsAppLogo from "../../../../images/WhatsAppImage.png"
import {RegisterContainer,Header,HeaderContainer,DescriptionContainer,Description,ButtonContainer,Button} from "../GlobalRegisterStyles/styles.js"
import {TermContainer, TermContent, TermBold, ImageContainer} from './styles.js';

export default function RegisterFirstStep({navigation}) {
  return (
    <RegisterContainer>
        <HeaderContainer>
            <Header>WhatsApp</Header>
        </HeaderContainer>
        
        <DescriptionContainer>
            <Description>Uma ferramenta fácil para você se comunicar com seus amigos
                em qualquer parte do mundo.
            </Description>
        </DescriptionContainer>
      <ImageContainer>
        <Image  source={WhatsAppLogo}/>
        </ImageContainer>
        
        <TermContainer>
            <TermContent>Toque em "Concordar e continuar" para aceitar os 
           <TermBold> Termos de serviço
                do WhatsApp </TermBold>
                <TermContent>  e </TermContent>
                <TermBold> Politicas de privacidade</TermBold>
            </TermContent>
            </TermContainer>    
      <ButtonContainer onPress={()=>navigation.navigate("SecondStep")}>
          <Button>CONCORDAR E CONTINUAR</Button>
          </ButtonContainer>  
    </RegisterContainer>
  )
}

