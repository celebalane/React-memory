import React from 'react'
import PropTypes from 'prop-types'
import './HallOfFame.css'

//Tableau des scores
const HallOfFame = ({ entries }) => (
  <table className="hallOfFame">
    <tbody>
      	{entries.map(({id, guesses, date, player}) =>(
      		<tr key={id}>
      			<td className="date">{date}</td>
      			<td className="guesses">{guesses}</td>
      			<td className="player">{player}</td>
      		</tr>
      	))}
    </tbody>
  </table>
)

HallOfFame.propTypes = { //Définitions des props
	entries: PropTypes.arrayOf( //Plus compliqué pour un tableau
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			guesses: PropTypes.number.isRequired,
			date: PropTypes.string.isRequired,
			player: PropTypes.string.isRequired,
		})
	).isRequired,
}

export default HallOfFame

// Faux tableau (pour le moment?)

export const FAKE_HOF = [
  { id: 3, guesses: 18, date: '10/10/2017', player: 'Jane' },
  { id: 2, guesses: 23, date: '11/10/2017', player: 'Kevin' },
  { id: 1, guesses: 31, date: '06/10/2017', player: 'Louisa' },
  { id: 0, guesses: 48, date: '14/10/2017', player: 'Marc' },
]