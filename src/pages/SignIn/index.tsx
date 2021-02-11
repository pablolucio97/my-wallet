import React, {ChangeEvent, useState} from 'react';

import {Container, Logo, Form, FormTitle} from './styles'

import logoImg from '../../assets/logo.svg'
import Input from '../../components/Input'
import SingInButton from '../../components/SignInButton'

import {useAuth} from '../../hooks/auth'

const SignIn: React.FC = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const {signIn} = useAuth()

    return (
        <Container>
            <Logo>
                <img src={logoImg} alt="My wallet"/>
                <h2>My Wallet</h2>
            </Logo>
            <Form onSubmit={() => signIn(email, password)}>
                <FormTitle>Enter</FormTitle>
                <Input 
                type="email"
                required
                placeholder='type your e-mail'
                onChange={(e: ChangeEvent<HTMLInputElement>) => {setEmail(e.target.value)}}
                />
                <Input 
                type="password"
                required
                placeholder='type your password'
                onChange={(e: ChangeEvent<HTMLInputElement>) => {setPassword(e.target.value)}}
                />
                <SingInButton type='submit'>SignIn</SingInButton>
            </Form>
        </Container>
    );
}

export default SignIn;