import React from 'react';
import DefaultImage from '../images/epinard.jpg';

const Card = ({ details }) => {
  const ingredients = details.ingredients.split(',').map(item => <li key={ item }>{ item }</li>);
  const instructions = details.instructions.split('\n').map(item => <li key={ item }>{ item }</li>);
  /*const requireImage = path => {
    try {
      return require(`./src/images/${ path }`);
    } catch (e) {
      return require(`./src/images/default.jpeg`);
    }
  }*/

  return (
    <div className='card'>
      <div className='image'>
        <img src={ DefaultImage } alt={ details.nom } />
      </div>
      <div className='recipe'>
        <h2>{ details.nom }</h2>
        <ul className='liste-ingredients'>{ ingredients }</ul>
        <ol className='liste-instructions'>{ instructions }</ol>
      </div>
    </div>
  )
}

export default Card;
