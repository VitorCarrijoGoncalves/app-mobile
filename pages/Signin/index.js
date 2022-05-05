import React from 'react';
import { Title, KeyBoardView, Container, Input, ButtonSubmit, TextSubmit } from './styles';
import Header from '../../components/Header'

function Signin(params) {
  return (
    <KeyBoardView>
      <Header />
      <Container>
        <Title>Login</Title>
        <Input
          placeholderTextColor="#fff"
          placeholder="E-mail"
        />
        <Input
          placeholder="Senha"
          secureTextEntry
        />
        <ButtonSubmit>
          <TextButton>Entrar</TextButton>
        </ButtonSubmit>
      </Container>
    </KeyBoardView>
  )
}

export default Signin;
