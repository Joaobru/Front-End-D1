import React, {useState, useEffect} from 'react';
import api from '../../services/api';

import NavBar from '../../components/navBar';
import ListFilter from '../../components/listFilter';
import ListJourneys from '../../components/listJourneys';

import './styles.css'
import logoMenu from '../../assets/images/logotipo.png';

import bedIcon from '../../assets/icons/bed.svg';
import checkIcon from '../../assets/icons/check.svg';
import paperPlaneIcon from '../../assets/icons/paper-plane.svg';
import penIcon from '../../assets/icons/pen.svg';
import playCircleIcon from '../../assets/icons/play-circle.svg';
import tableIcon from '../../assets/icons/table.svg';

function Home() {

  const objectIcon = [tableIcon, paperPlaneIcon, playCircleIcon, penIcon, bedIcon, checkIcon]

  let cont = 0;

  const [filters, setFilters] = useState([]);
  const [journeys, setJourney] = useState([]);

  useEffect(() => {
    api.get('filter').then(response => {
      const filterObject = response.data;

      setFilters(filterObject)
    });

    api.get('journey').then(response => {
      const journeyList = response.data;

      setJourney(journeyList);
    });
  }, [])

  function counterFilter() {
    cont ++
  }


  return(
    <>
      <div className='lateralMenu'>
        <div className="logotipo"> 
          <img src={logoMenu} alt="Logo Tipo"/>
        </div>
      </div>

      <div className='container'>
        <NavBar/>
        <div className='containerList'>
          <div className='listFilter'>
            <h1>Jornadas</h1>
            {filters.map(filter => (
              <>
                <ListFilter nameFilter={filter.name} key={filter.id} icons={objectIcon[cont]} countFilter={filter.quantity} idList={filter.id}/>
                {counterFilter()}
              </>
            ))}
          </div>
        <div className= 'listJourneys'>
          <div className= 'titleJourneys'>
            <p className="titleJourneyName">Nome</p>
            <p className="titleJourneyInfo">Destinatários</p>
            <p className="titleJourneyInfo">Sucesso</p>
            <p className="titleJourneyInfo">Status</p>
          </div>
          {journeys.map(journey => (
            <ListJourneys idJourney={journey.status} name={journey.name} destinatary={journey.recipients} success={journey.success} status={journey.status}/>
          ))}        
          </div>
        </div>
      </div>
    </>
  );
}

export default Home