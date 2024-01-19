import { ThemeType } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    flex-direction: column;
    padding: 16px 8px;
    background-color: ${({ theme }: any) => theme.COLORS.BACKGROUND};
`;

export const Header = styled.View`
    width: 100%;
    align-items: center;
    margin-top: 32px;
    margin-bottom: 32px;
`;

export const FormView = styled.View`
    
`;

export const InputText = styled.TextInput`
    width: 100%;
    padding: 8px 6px;
    margin-bottom: 24px;
    background-color: ${({ theme }: any) => theme.COLORS.WHITE};
    text-transform: lowercase;
`;

export const FormButton = styled.TouchableOpacity`
    flex-direction: row;
    height: 48px;
    background-color: ${({ theme }: any) => theme.COLORS.GREEN_100};
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;

export const RegisterButtonText = styled.Text`
    color: ${({ theme }: any) => theme.COLORS.BACKGROUND};
    font-weight: 700;
`;

export const GoogleButton = styled.TouchableOpacity`
    flex-direction: row;
    height: 48px;
    background-color: rgba(58,128,101,0.29);
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;