import './styles.css';
import React, {useState, useEffect} from 'react';

import api from '../../services/config/api';
import Modal from '../../components/ComponentModal';
import LateralMenu from '../../components/LateralMenu';
import NavBar from '../../components/NavBar';
import ListFilter from '../../components/ListFilter';
import ListJourneys from '../../components/ListJourneys';

function Home() {

  const [filters, setFilters] = useState([]);
  const [journeys, setJourney] = useState([]);
  const [idJourneys, setIdJourney] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if(idJourneys !== 0) {
      api.get(`journey/${idJourneys}`).then(response => {
        const journeyList = response.data;
  
        setJourney(journeyList);
      }).catch(err => console.log(err));;
    } else {
      api.get(`journey`).then(response => {
        const journeyList = response.data;
  
        setJourney(journeyList);
      }).catch(err => console.log(err));;
    }
    api.get('filter').then(response => {
      const filterObject = response.data;

      setFilters(filterObject)
    }).catch(err => console.log(err));;
  }, [idJourneys]);

  return (
    <>
      <LateralMenu/>
      <div className='container'>
        <NavBar propsModalOpen={modalOpen} propsSetModalOpen={setModalOpen}/>
        <div className='containerList'>
          <ListFilter propsFilters={filters} propsSetIdJourney={setIdJourney}/>
          <div className= 'listJourneys'>
            <ListJourneys propsJourneys={journeys}/>     
          </div>
        </div>
      </div>
      <Modal propsModalOpen={modalOpen} propsSetModalOpen={setModalOpen}/>
    </>
  );
}

export default Home;