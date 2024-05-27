import React from 'react'
import PropTypes from 'prop-types'


export const ThirdComponent = ({name, lastName, card}) => {
  return (
    <div>
        <h2>Comunicación entre componentes</h2>
        <ul>

            <li>{ name }</li>
            <li>{ lastName }</li>
            {
                    Object.entries(card).map((card, index) => {
                    return <li key={index}>{card}</li>;
                  })
            }
            {/* <li>{name}</li> */}
            {/* <li>{ props.card.allergies }</li>
            <li>{ props.card.bloodgroup }</li>
            <li>{ props.card.height }</li> */}
        </ul>
    </div>
  )
}

ThirdComponent.propTypes={
  name: PropTypes.string,
  lastName: PropTypes.string,
  card: PropTypes.object
}