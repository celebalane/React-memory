    
import React from 'react'
import PropTypes from 'prop-types'

import './GuessCount.css'

//Nombre de tentatives
const GuessCount = ({ guesses }) => <div className="guesses">{guesses}</div>

GuessCount.propTypes = { //Définition de la prop
	guesses: PropTypes.number.isRequired,
}

export default GuessCount