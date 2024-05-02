import PropTypes from 'prop-types';
import '../css/card.css';

function Card(props) {
    
    return(
        <button className="card" id='card'>
            <h2 className='card-title'>{props.name}</h2>
            <p className='card-text'>{props.description}</p>
        </button>
    );
}

Card.propTypes = {
    index: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    calif: PropTypes.number
}

export default Card
