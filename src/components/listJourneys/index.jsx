import React from 'react';

import './styles.css'

import bedIcon from '../../assets/icons/bed.svg';
import checkIcon from '../../assets/icons/check.svg';
import paperPlaneIcon from '../../assets/icons/paper-plane.svg';
import penIcon from '../../assets/icons/pen.svg';
import playCircleIcon from '../../assets/icons/play-circle.svg';

const objectIcon = [ paperPlaneIcon, playCircleIcon, penIcon, bedIcon, checkIcon]

function ListJourneys(props) { 

  let count = 0;

  function iconsVerify(status) {
    
    for (let i = 1; i <= objectIcon.length; i++) {
      if (status === i) {
        return <img src={objectIcon[count]}/>
      }
      count ++
    }
  }

  return(
    <div className= 'journeys'>
      <p id={props.idJourney} className='nameJourney'>{props.name}</p>
      <p id={props.idJourney} className='infoJourney'>{props.destinatary}</p>
      <p id={props.idJourney} className='infoJourney'>{props.success}</p>    
      <p id={props.idJourney} className='infoJourney'>{iconsVerify(props.status)}</p> 
    </div>
  );
}

export default ListJourneys