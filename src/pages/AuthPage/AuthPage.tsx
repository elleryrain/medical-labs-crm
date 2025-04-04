import styled from "styled-components"
import Mail from "@img/Mail.svg?react"
import Lock from "@img/Lock.svg?react"

const AuthPageContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 18.5vh;
    color: white;
`

const AuthContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 70px;
    width: 600px;
`

const TitleContainer = styled.div`
    
`

const Title = styled.h1`
    font-size: 40px;
    font-weight: 500;
`

const NameCompany = styled.h1`
    font-size: 40px;
    font-weight: 500;
    color: #BDFF67;
`

const AuthFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
    
    padding: 24px 22px;
    border-radius: 15px;
    background-color: #333333;
    
`

const Input = styled.input`
    background: transparent;
    border: none;
    outline: none;
    color: white;
    font-size: 24px;
    font-weight: 500;
    width: 100%;

    &::placeholder {
        color: #B9B9B9;
    }
`

const ForgotPassword = styled.div`
    cursor: pointer;
    text-align: right;
    font-size: 20px;
    font-weight: 500;
`

const SubmitButton = styled.button`
    margin-top: 20px;
    cursor: pointer;
    font-size: 24px;
    font-weight: 500;
    height: 71px;
    border-radius: 15px;
`

export const AuthPage = () => {
    return (
        <AuthPageContainer>
            <AuthContainer>
                <TitleContainer>
                    <Title>Добро пожаловать в</Title>
                    <NameCompany>SmartLab</NameCompany>
                </TitleContainer>
                <AuthFormContainer action="">
                    <InputContainer>
                        <InputWrapper>
                            <Mail />
                            <Input placeholder="Электронная почта" type="email"/>
                        </InputWrapper>
                        <InputWrapper>
                            <Lock />
                            <Input placeholder="Пароль" type="password"/>
                        </InputWrapper>
                    </InputContainer>
                    <ForgotPassword>Забыли пароль?</ForgotPassword>
                    <SubmitButton type="submit">Вход</SubmitButton>
                </AuthFormContainer>
            </AuthContainer>
        </AuthPageContainer>
    )
}