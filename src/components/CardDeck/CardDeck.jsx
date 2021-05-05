import React from 'react'
import Card from './../Card'
import { ReactComponent as Credit } from "./../../assets/img/icons/footerCard.svg";

const CardDeck = () => {
    return (
        <div>
            <Card icon={<Credit />}/>
            <Card />
            <Card />
        </div>
    )
}

export default CardDeck
