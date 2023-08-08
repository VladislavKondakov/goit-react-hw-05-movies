import styled from "@emotion/styled";
 

export const DivGallery = styled.div`
display:flex;
justify-content:center;
gap:25px;
flex-wrap:wrap;
`

export const ImgGallery = styled.img`
width:300px;
height:450px;
transition: transform 0.3s;
&:hover{
  transform: scale(1.05)
}
`

export const LinkCardGallery = styled.a`
display-flex:flex;

`

export const HeaderNav = styled.nav`
display:flex;
justify-content:space-around;
text-decoration: none;
margin:30px;
`

export const FilterDiv = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;

`

export const FilterInput = styled.input`
background-color: #333;
box-shadow: none;
border: solid 1px black;
border-radius:10px;
height:25px;
color:orange;
padding-left:10px;

 &:focus {
    outline: none; 
    border-color: orange; 
    background-color: #333; 
    color: orange; 
  }
`

export const SvgInput = styled.svg`
height:25px;
width:25px;
background-color:#333;

&:hover{
    fill:orange;
     transition: fill 0.5s ease
}
`
export const ButtonInput = styled.button`
background-color:#333;
border:none;

`

export const FormInput = styled.form`
display: flex;
 align-items: center;
 margin-bottom:30px;
`

export const CollectionDiv = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
gap:20px;
`

export const CardsDiv = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
gap:15px;
`

export const DivCast = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
`

export const DivMainInf = styled.div`
display:flex;
flex-direction: row-reverse;
gap:400px;
justify-content:center;

`
export const DivTextCollection = styled.div`
display:flex;
flex-direction:column;
width:500px;
margin-right:200px;
`

export const DivContainer = styled.div`
width:1800px;
margin:0;
`

export const ButtonGallery = styled.button`
background-color:orange;
border:none;
border-radius:10px;
width:200px;
height:30px;
font-size:20px;
cursor:pointer;
transition: color 0.3s ease;

&:hover{
color:white;
}
`

export const DivReviews = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width:1600px;

`
export const DivMainReviews = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const DivButtons = styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
gap:50px;
margin:40px;
`

export const ButtonBack = styled.button`
background-color:orange;
border:none;
border-radius:10px;
width:100px;
height:30px;
font-size:20px;
cursor:pointer;
transition: color 0.3s ease;

&:hover{
color:white;
}
`