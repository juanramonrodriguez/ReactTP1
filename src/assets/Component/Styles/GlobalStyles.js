import {createGlobalStyle}from "styled-components"

export const GlobalStyles=createGlobalStyle`
 html{
    scroll-behavior: smooth;
}
body{
    margin:0 ;
    padding: 0;
    overflow-x: hidden;
    background-color: white;
    color: black;
    font-family: 'Montserrat', sans-serif;
}
a{
    text-decoration: none;
    color: black;
}
li{
    list-style: none;
}
`