import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import ReactDOM from 'react-dom';

import './styles.css';


function ListFilter (props) {

  const [journeysList, setJourneyList] = useState([]);

  function listFilterById(idListItemFilter) {
    if(idListItemFilter != 0){
      api.get(`journey/${idListItemFilter}`).then(response => {
        const journeyList = response.data;
  
        setJourneyList(journeyList);
      });
    } else{
      api.get(`journey`).then(response => {
        const journeyList = response.data;
  
        setJourneyList(journeyList);
      });
    }
    
  } 

  useEffect(()=>{
    console.log(journeysList)
  },[journeysList])

  return(
      <ul>
        <li><div className='iconName'> <img src={props.icons} alt='tableIcon'/> <p id={props.idList} onClick={() => listFilterById(props.idList)}> {props.nameFilter} </p></div> <p className='contFilter'>{props.countFilter}</p> </li>
      </ul>
  );
}

export default ListFilter