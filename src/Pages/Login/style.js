import Styled from 'styled-components'

import Background from '../../assets/background.png'

export const Container = Styled.div`
height:100vh;
width:100vw;
background:url('${Background}');
display:flex;
justify-content:center;
align-items:center;
`

export const LoginImage = Styled.img`
height:85%;

`

export const ContainerItems = Styled.div`
background: #373737;
border-radius:0px 10px 10px 0px;
height:85%;
padding:25px 75px;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

h1{
font-size: 24px;
font-weight: 500;
line-height: 28px;
text-align: center;
color:#FFF;
margin-top:60px;
}

form{
    display:flex;
    flex-direction:column;
}

`

export const Label = Styled.p`
width: 197.39px;
height: 19.707px;
color: #FFF;
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-top:25px;
margin-bottom:5px;
margin-right:150px;
`

export const Input = Styled.input`
border:${props => (props.error ? ` 2px solid #CC1717;` : `none`)} ;
background: #FFF;
box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
width: 391.416px;
height: 38.319px;
padding-left:10px;
`
export const ErrorsMessage = Styled.p`
font-size: 14px;
font-weight: 400;
line-height: 16px;
color: #CC1717;
margin-top:5px;

`

export const Button = Styled.button`

background: #9758A6;
width: 183px;
height: 48px;
margin-top:55px;
margin-bottom:25px;
border-radius:30px;
border:none;
color: #EEE;
text-align: center;
font-size: 16px;
cursor:pointer;

hover:{
    box-shadow: 0 0 0.8rem #9758A6;
}

active:{
opacity:0.6;
}
`

export const SingninLink = Styled.p`
color: #FFF;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;

a{
    cursor:pointer;
    text-decoration:underline;
}

`
