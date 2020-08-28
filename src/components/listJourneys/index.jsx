import React from 'react';

import './styles.css';

import bedIcon from '../../assets/icons/bed.svg';
import checkIcon from '../../assets/icons/check.svg';
import paperPlaneIcon from '../../assets/icons/paper-plane.svg';
import penIcon from '../../assets/icons/pen.svg';
import playCircleIcon from '../../assets/icons/play-circle.svg';

const objectIcon = [ paperPlaneIcon, playCircleIcon, penIcon, bedIcon, checkIcon];
const objectJourneys = ['Enviando','Ativa', 'Configurando', 'Ociosa', 'Concluida'];

function ListJourneys({propsJourneys}) { 

  function iconsVerify(status) {
    return (
      <>
        <img src={objectIcon[status - 1]} alt={objectJourneys[status - 1]}/>
        {objectJourneys[status - 1]}
      </>
    )
  }

  return(
    <>
    <div className= 'titleJourneys'>
      <p className='titleJourneyName'>Nome</p>
      <p className='titleJourneyInfo'>Destinatários</p>
      <p className='titleJourneyInfo'>Sucesso</p>
      <p className='titleJourneyInfo'>Status</p>
    </div>
    <div>
      {propsJourneys.map(journey => (
        <div key={journey.id} className= 'journeys'>
          <p id={journey.status} className='nameJourney'>{journey.name}</p>
          <p id={journey.status} className='infoJourney'>{journey.recipients}</p>
          <p id={journey.status} className='infoJourney'>{journey.success}</p>    
          <p id={journey.status} className='statusJourney'>{iconsVerify(journey.status)}</p>
        </div> 
      ))}  
    </div>
    </>      
  );
}

export default ListJourneys;