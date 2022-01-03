import React from 'react'
import background from "../assets/background.jpeg"
import styled from "styled-components";
import ContainerMain from './ContainerMain';
import ContainerNav from './ContainerNav';

export default function MainPage() {
    return (
        <ContainerApp>
            <Background src={background} alt='erro' />
            <ContainerMain></ContainerMain>
            <ContainerNav></ContainerNav>
        </ContainerApp>
    )
}

const Background = styled.img`
width: 100%;
z-index:1;
height: 100%;
position: fixed;
top: 0;
left: 0;

`;

const ContainerApp = styled.div`
display:flex;
flex-direction: column;
width: 100%;

`;
