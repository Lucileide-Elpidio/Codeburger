import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

import RegisterImage from '../../assets/Login.svg'
import Logo from '../../assets/logo.svg'
import Button from '../../components/Button'
import api from '../../Services/api'
import {
  Container,
  ImageRegister,
  ContainerItems,
  Label,
  Input,
  ErrorsMessage,
  SingninLink
} from './style'

function Register() {
  const schema = Yup.object({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter no mínimo 6 dígitos'),
    confimPassword: Yup.string()
      .required('A senha é obrigatória')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = async clientData => {
    const response = await api.post('users', {
      name: clientData.name,
      email: clientData.email,
      password: clientData.password
    })
    console.log(response)
  }

  return (
    <Container>
      <ImageRegister src={RegisterImage} alt="register-image" />
      <ContainerItems>
        <img src={Logo} alt="logo" />
        <h1>Cadastre-se</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Name</Label>
          <Input
            {...register('name')}
            type="text"
            error={errors.name?.message}
          />
          <ErrorsMessage>{errors.name?.message}</ErrorsMessage>

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

          <Label>Confirmar senha</Label>
          <Input
            {...register('confimPassword')}
            type="password"
            error={errors.confimPassword?.message}
          />
          <ErrorsMessage>{errors.confimPassword?.message}</ErrorsMessage>

          <Button type="submit" style={{ marginTop: 15, marginBottom: 13 }}>
            Cadastrar
          </Button>
        </form>
        <SingninLink>
          Já possui conta? <a>Login</a>
        </SingninLink>
      </ContainerItems>
    </Container>
  )
}

export default Register
