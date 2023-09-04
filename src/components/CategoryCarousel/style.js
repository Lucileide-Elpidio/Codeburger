import Styled from 'styled-components'

export const Container = Styled.div`
background:#efefef;
display:flex;
flex-direction:column;
align-items:center;
gap:35px;
padding:35px 0;

.rec.rec-arrow{
    background-color: #9758A6;
    color:#efefef;
    box-shadow: 0px 4px 4px 0px #00000040;

}

.rec.rec-arrow:hover{
    border:2px solid  #9758A6;
    background-color:#efefef;
    color: #9758A6;
}

.rec.rec-arrow:disabled{
border:none;
background-color:#bebebe;
color:#efefef
}
`
export const CategoryImg = Styled.img`
`

export const ContainerItems = Styled.div`
display:flex;
flex-direction:column;
`
export const Image = Styled.img`
width:200px;
border-radius: 10px;
`
export const Button = Styled.button`
margin-top:10px;
background-color: #9758A6;
height:58px;
border-radius: 8px;
border:none;
gap: 10px;
color: #FFFFFF;
font-size: 18px;
font-weight: 700;
text-align: center;
cursor:pointer;

&:hover{
    opacity:0.8;
}

&:active:{
    opacity:0.6;
}
`
