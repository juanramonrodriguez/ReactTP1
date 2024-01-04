import styled from "styled-components";


export const NavbarContainer = styled.div`
display: flex;
background-color: white;
width: 100%;
height: 50px;
justify-content: center;
align-items: center;
gap: 200px;
position: fixed;
`
export const NavbarLogo = styled.div`
img{
    width: 240px;
    height: 30px;
}
img:hover{
    filter: drop-shadow(10px 8px 6px black);
}
`
export const NavbarInfo = styled.div`
display: flex;
ul{
    display: flex;
    gap: 30px;
}
li{
    cursor: pointer;
}
li:hover{
    border-bottom: 1px solid black;
}
`
export const NavbarUsuario = styled.div`
display: flex;
gap: 20px;


`