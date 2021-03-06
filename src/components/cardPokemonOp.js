import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';

import './cardPokemon.css';

export default function CardPokemonOp(props){

    let imgF = "https://cdn.bulbagarden.net/upload/7/79/Dream_Pok%C3%A9_Ball_Sprite.png";
    let imgT = "https://cdn.bulbagarden.net/upload/9/95/Normal_icon_SwSh.png";
    let pokemonOp = props.nome;
    let nomeOp = 'pokemon oponente';
    //const pokemonChoice = props.nome;
    
    if (pokemonOp == 1){
        imgF = "https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/375px-004Charmander.png";
        imgT = "https://cdn.bulbagarden.net/upload/thumb/a/ab/Fire_icon_SwSh.png/96px-Fire_icon_SwSh.png";
        nomeOp = 'charmander';
    }else if (pokemonOp == 2){
        imgF = "https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/375px-001Bulbasaur.png";
        imgT = "https://cdn.bulbagarden.net/upload/thumb/a/a8/Grass_icon_SwSh.png/96px-Grass_icon_SwSh.png";
        nomeOp = 'bulbasaur';
    }else if (pokemonOp == 3){
        imgF = "https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/375px-007Squirtle.png";
        imgT = "https://cdn.bulbagarden.net/upload/thumb/8/80/Water_icon_SwSh.png/96px-Water_icon_SwSh.png";
        nomeOp = 'squirtle';
    }else if (pokemonOp == 4){
        imgF = "https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/375px-025Pikachu.png";
        imgT = "https://cdn.bulbagarden.net/upload/thumb/7/7b/Electric_icon_SwSh.png/96px-Electric_icon_SwSh.png";
        nomeOp = 'pikachu';
    }
    
    return(
        <Container fluid id="card">
            <Row id="imgR">
                <img src={imgF} id="img"></img>
            </Row>
            <Row id="nomeR">
                {nomeOp}
            </Row>
            <Row id="imgR">
                <img src={imgT} id="img"></img>
            </Row>
        </Container>
    );
}