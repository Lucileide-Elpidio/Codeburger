import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

import Logo from '../../assets/logo.svg'
import LogoImage from '../../assets/LogoLogin.svg'
import api from '../../Services/api'
import {
  Container,
  LoginImage,
  ContainerItems,
  Label,
  Input,
  ErrorsMessage,
  Button,
  SingninLink
} from './style'

function Login() {
  const schema = Yup.object({
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter no mínimo 6 dígitos')
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = async clientData => {
    const response = await api.post('/sessions', {
      email: clientData.email,
      password: clientData.password
    })
    console.log(response)
  }

  return (
    <Container>
      <LoginImage src={LogoImage} alt="login-image" />
      <ContainerItems>
        <img src={Logo} alt="logo" />
        <h1>Login</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            {...register('email')}
            type="email"
            error={errors.email?.message}
          />
          <ErrorsMessage>{errors.email?.message}</ErrorsMessage>

          <Label>Senha</Label>
          <Input
            {...register('password')}
            type="password"
            error={errors.password?.message}
          />
          <ErrorsMessage>{errors.password?.message}</ErrorsMessage>

          <Button type="submit">Entrar</Button>
        </form>
        <SingninLink>
          Não possui conta? <a>Cadastre aqui</a>
        </SingninLink>
      </ContainerItems>
    </Container>
  )
}

export default Login
