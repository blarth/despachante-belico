import React from 'react'
import styled from "styled-components"
import { useState } from 'react';



const infoLinks = ["Aquisição arma de fogo" , "Resgistro Arma de fogo" , "Renovação Arma Fogo" , "Porte de Arma de Fogo" , "Laudos Psicologicos" , "Laudos Instrutores"]

export default function ContainerNav() {

    const [links, setLinks] = useState([...infoLinks])

    return (
        <>
        <ContainerInfoNav>
            
            <h2>Serviços</h2>

        </ContainerInfoNav>
        <ContainerNavBar>
            {links.map( link => {
                return <ContainerLinks>{link}</ContainerLinks>
            })}
        </ContainerNavBar>

        </>   
            
        
    )
}


const ContainerInfoNav = styled.div`
    width:20%;
    margin-top: 150px;
    margin-bottom: 10px;
    display:flex;
    height: 70px;
    background-color: blue;
    z-index:2;
    justify-content: center;
    align-items: center;
    margin-left: 75px;

    h2{
        font-family: Roboto;
        font-size: 35px;
        font-weight: 700;


    }
`;

const ContainerNavBar = styled.div`
width: 30%;
height: 450px;
background-color : purple;
z-index: 2;
display:flex;
flex-direction: column;
justify-content: space-around;
align-items: center
`;


const ContainerLinks = styled.div`

width: 80%;
height: 60px;
font-size: 24px;
font-family: Roboto;
border: 3px solid black;
display:flex;
justify-content: center;
align-items: center;
`;

