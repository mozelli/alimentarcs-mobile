import React from 'react';
import { Image, Text } from 'react-native';
import { 
    Container, 
    FormView, 
    Header, 
    InputText, 
    FormButton, 
    GoogleButton, 
    RegisterButtonText } from './styles';
    
const Login: React.FC = () => {
  return (

    <Container>
        <Header>
            <Image
                source={require('../../assets/images/rounded_logo_240_240.jpg')}
                style={{ width: 120, height: 120 }}
            />
        </Header>
        <FormView>
            <InputText
                placeholder='Digite aqui seu e-mail'
                autoCorrect={ false }
            />
            <InputText
                placeholder='Digite aqui sua senha'
                autoCorrect={ false }
                onChangeText={() => {}}
            />
            <FormButton>
                <RegisterButtonText>
                    Entrar
                </RegisterButtonText>
            </FormButton>
            <Text style={{ fontSize: 16, textAlign: 'center', marginTop: 8, marginBottom: 8 }}>
                Ou
            </Text>
            <GoogleButton>
                <Image
                    source={require('../../assets/icons/google_logo_64_64.png')}
                    style={{ width: 32, height: 32 }}
                />
                <Text style={{ color: "#111827", fontWeight: "700", marginLeft: 16 }}>
                    Entrar com o Google
                </Text>
            </GoogleButton>
            <Text style={{ textAlign: 'center', marginTop: 24 }}>
                Não possui conta? Cadastre-se!
            </Text>
            <Text style={{ textAlign: 'center', marginTop: 24, fontSize: 12, color: "#4B5563" }}>
                Mozelli Marketing Digital
            </Text>
        </FormView>
    </Container>
  );
}

export default Login;