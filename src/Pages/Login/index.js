import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import Logo from '../../assets/logo.svg'
import LogoImage from '../../assets/LogoLogin.svg'
import Button from '../../components/Button'
import { useUser } from '../../hooks/UserContext'
import api from '../../Services/api'
import {
  Container,
  LoginImage,
  ContainerItems,
  Label,
  Input,
  ErrorsMessage,
  SingninLink
} from './style'

function Login() {
  const navigate = useNavigate()
  const { putUserData } = useUser()
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
    try {
      const { status, data } = await api.post(
        'users',
        {
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )
      if (status === 201 || status === 200) {
        toast.success('Logado com sucesso')
        putUserData(data)
        setTimeout(() => {
          navigate('/')
        }, 1000)
      } else if (status === 400) {
        toast.error('Email e/ou senha inválido, tente novamente')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema tente novamente')
    }
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

          <Button type="submit" style={{ marginTop: 30, marginBottom: 25 }}>
            Entrar
          </Button>
        </form>
        <SingninLink>
          Não possui conta?{' '}
          <Link to="/cadastro" style={{ color: 'white' }}>
            Cadastre aqui
          </Link>
        </SingninLink>
      </ContainerItems>
    </Container>
  )
}

export default Login
