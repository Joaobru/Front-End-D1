import './styles.css';
import React from 'react';

import bedIcon from '../../assets/icons/bed.svg';
import checkIcon from '../../assets/icons/check.svg';
import paperPlaneIcon from '../../assets/icons/paper-plane.svg';
import penIcon from '../../assets/icons/pen.svg';
import playCircleIcon from '../../assets/icons/play-circle.svg';
import tableIcon from '../../assets/icons/table.svg';


const objectIcon = [tableIcon, paperPlaneIcon, playCircleIcon, penIcon, bedIcon, checkIcon];

function ListFilter({propsFilters, propsSetIdJourney}) {

  function listFilterById(idListItemFilter) {
    propsSetIdJourney(idListItemFilter);
  } 

  return (
    <>
      <div className='listFilter'>
        <h1>Jornadas</h1>
        <ul>
          {propsFilters.map(filter => (
              <li key={filter.id}><div className='iconName'> <img src={objectIcon[filter.id]} alt='tableIcon'/> <p onClick={() => listFilterById(filter.id)}> {filter.name} </p></div><p className='contFilter'>{filter.quantity}</p></li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListFilter;