import React from "react";

import Card from "../Card/Card";

import "./card-list.styles.css";

function CardList(props) {
  return (
    <div className="card-list">
      {
        props.monsters.map((monster, index) => {
          return <Card key={monster.id} monster={monster}/>
        })
      }
    </div>
  )
}
export default CardList