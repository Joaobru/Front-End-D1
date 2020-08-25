import React, {useState, useEffect} from 'react';
import api from '../../services/api';

import ListJourneys from '../../components/listJourneys';
import Modal from 'react-modal';

import './styles.css'
import logoMenu from '../../assets/images/logotipo-branco.png';
import acmeLogo from '../../assets/images/acme-logo.png';
import bedIcon from '../../assets/icons/bed.svg';
import checkIcon from '../../assets/icons/check.svg';
import paperPlaneIcon from '../../assets/icons/paper-plane.svg';
import penIcon from '../../assets/icons/pen.svg';
import playCircleIcon from '../../assets/icons/play-circle.svg';
import tableIcon from '../../assets/icons/table.svg';
import { FiSearch } from 'react-icons/fi';

Modal.setAppElement('#root')
function Home(props) {

  const objectIcon = [tableIcon, paperPlaneIcon, playCircleIcon, penIcon, bedIcon, checkIcon];

  const [filters, setFilters] = useState([]);
  const [journeys, setJourney] = useState([]);
  const [idJourneys, setIdJourney] = useState(0);
  const [modalOpen, setModalOpen] = useState(false)

  let counter = 0;

  useEffect(() => {
    if(idJourneys !== 0){
      api.get(`journey/${idJourneys}`).then(response => {
        const journeyList = response.data;
  
        setJourney(journeyList);
      });
    } else{
      api.get(`journey`).then(response => {
        const journeyList = response.data;
  
        setJourney(journeyList);
      });
    }
    api.get('filter').then(response => {
      const filterObject = response.data;

      setFilters(filterObject)
    });
  }, [idJourneys]);

  function listFilterById(idListItemFilter) {
    setIdJourney(idListItemFilter);
  } 

  function counterFilter() {
    counter ++;
  }

  return(
    <>
      <Modal isOpen={modalOpen} className='modal' >
        <div className='containerModal'>
          <h2>Nova Jornada</h2>
          <hr/>
          <div className='components'>
            <p>De um <strong>nome</strong> para essa Jornada</p>
            <input type='text'/>
            <p>Você pode alterar essa informação depois</p>
          </div>
          <div className='buttons'>
            <button onClick={() => {setModalOpen(!modalOpen)}}>Continuar</button>
            <button onClick={() => {setModalOpen(!modalOpen)}}>Cancelar</button>
          </div>
        </div>
      </Modal>

      <div className='lateralMenu'>
        <div className='logotipo'> 
          <img src={logoMenu} alt='Logo'/>
        </div>
        <div className='containerImages'>
          <div className='lateralTooltip'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className='groupImagesLeft'>
              <path d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 14.875 5.0625 C 14.917969 5.058594 14.957031 5.066406 15 5.0625 L 15 16.40625 L 15.28125 16.71875 L 23.0625 24.46875 C 21.15625 26.0625 18.6875 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 10.292969 9.320313 5.625 14.875 5.0625 Z M 17 5.0625 C 22.285156 5.539063 26.460938 9.714844 26.9375 15 L 17 15 Z M 18.4375 17 L 26.9375 17 C 26.730469 19.292969 25.863281 21.394531 24.46875 23.0625 Z"/>
            </svg>
            <h4 className='lateralTooltiptext'>
              Análises
            </h4>
          </div>

          <div className='lateralTooltip'>
            <svg width='32' height='28' viewBox='0 0 32 28' xmlns='http://www.w3.org/2000/svg' className='groupImagesLeft'>
              <path d="M25.9062 3.5C25.2109 3.5 24.2422 3.52734 23.2188 3.60938C21.1719 3.77686 18.8086 4.07764 17.3438 5.35938C16.1133 6.43604 13.5703 9.29346 11.2188 11.9766C10.7539 12.5063 10.7734 12.4961 10.3438 12.9883L8.625 12.9062C7.34766 12.8481 6.11719 13.3198 5.3125 14.1914L3.21875 16.4336L2.1875 17.582L3.8125 17.8555L7.09375 18.4297L10.9375 21.793L11.5938 24.6641L11.9375 26.0859L13.2188 25.1836L15.7812 23.3516C16.7773 22.6475 17.3164 21.5708 17.25 20.4531L17.1562 18.9766C17.7383 18.5903 17.7188 18.6006 18.3438 18.1836C21.418 16.1226 24.6953 13.9111 25.9062 12.8516C27.3594 11.5801 27.6836 9.48145 27.875 7.68359C28.0664 5.88574 27.9688 4.34766 27.9688 4.34766L27.9375 3.55469L27.0312 3.52734C27.0312 3.52734 26.6016 3.5 25.9062 3.5ZM25 5.25C25.3984 5.25 25.6797 5.27051 25.9688 5.27734C25.9805 5.78662 26.0039 6.31641 25.875 7.51953C25.6992 9.17725 25.1211 11.0229 24.4688 11.5938C23.5781 12.373 20.1875 14.7349 17.125 16.7891C14.418 18.604 12.5117 19.8789 11.9688 20.2344L8.90625 17.5547C9.31641 17.0728 10.7188 15.3979 12.7812 13.043C15.125 10.3701 17.832 7.39307 18.75 6.58984C19.4336 5.9917 21.5195 5.48584 23.4062 5.33203C24.0898 5.27734 24.6016 5.25 25 5.25ZM20.4375 8.33984C19.3203 8.33984 18.4375 9.13965 18.4375 10.1172C18.4375 11.0947 19.3203 11.8945 20.4375 11.8945C21.5547 11.8945 22.4688 11.0947 22.4688 10.1172C22.4688 9.13965 21.5547 8.33984 20.4375 8.33984ZM8.5 14.6562L8.875 14.6836C8.27344 15.3809 7.28906 16.4985 7.15625 16.6523L5.8125 16.4062L6.84375 15.3125C7.24609 14.8784 7.85938 14.6255 8.5 14.6562ZM6.21875 19.1953C5.36328 19.9438 4.875 20.9795 4.53125 21.8477C4.1875 22.7158 4.03125 23.4336 4.03125 23.4336L3.71875 24.7188L5.1875 24.4727C5.1875 24.4727 5.98438 24.353 6.96875 24.0625C7.95312 23.772 9.13672 23.3413 10.0312 22.5586L8.625 21.3281C8.17969 21.7178 7.29688 22.0596 6.5 22.3125C6.80469 21.5845 7.25 20.7573 7.625 20.4258L6.21875 19.1953ZM15.2188 20.2344L15.25 20.5625C15.2852 21.123 15.0312 21.6597 14.5312 22.0117L13.25 22.9141L12.9688 21.7383C13.1445 21.6255 14.4219 20.7573 15.2188 20.2344Z"/>
            </svg>
            <h4 className='lateralTooltiptext'>
              Jornadas
            </h4>
          </div>

          <div className='lateralTooltip'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className='groupImagesLeft'>
              <path d="M 9 7 C 5.699219 7 3 9.699219 3 13 C 3 14.984375 3.976563 16.75 5.46875 17.84375 C 2.832031 19.152344 1 21.863281 1 25 L 3 25 C 3 21.675781 5.675781 19 9 19 C 12.324219 19 15 21.675781 15 25 L 17 25 C 17 21.675781 19.675781 19 23 19 C 26.324219 19 29 21.675781 29 25 L 31 25 C 31 21.863281 29.167969 19.152344 26.53125 17.84375 C 28.023438 16.75 29 14.984375 29 13 C 29 9.699219 26.300781 7 23 7 C 19.699219 7 17 9.699219 17 13 C 17 14.984375 17.976563 16.75 19.46875 17.84375 C 18.011719 18.566406 16.789063 19.707031 16 21.125 C 15.210938 19.707031 13.988281 18.566406 12.53125 17.84375 C 14.023438 16.75 15 14.984375 15 13 C 15 9.699219 12.300781 7 9 7 Z M 9 9 C 11.222656 9 13 10.777344 13 13 C 13 15.222656 11.222656 17 9 17 C 6.777344 17 5 15.222656 5 13 C 5 10.777344 6.777344 9 9 9 Z M 23 9 C 25.222656 9 27 10.777344 27 13 C 27 15.222656 25.222656 17 23 17 C 20.777344 17 19 15.222656 19 13 C 19 10.777344 20.777344 9 23 9 Z"/>
            </svg>
            <h4 className='lateralTooltiptext'>
              Clientes
            </h4>
          </div>
          <div className='lateralTooltip'>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 78 78" className='groupImagesLeft'>
              <g id="CCM-Cloud" >
                <g id="Grupo_4899" data-name="Grupo 4899" transform="translate(4.229 10.32)">
                  <path id="Subtração_1" data-name="Subtração 1" d="M55.633,43.232h0v-4.82a10.019,10.019,0,0,0,4.013-1.232,9.558,9.558,0,0,0,3.609-3.493,9.553,9.553,0,0,0,0-9.689A9.553,9.553,0,0,0,59.647,20.5a10.1,10.1,0,0,0-4.693-1.273c.058,0,.059.006.06.007a7.332,7.332,0,0,1-.839.064l-2.1.075L51.613,17.5A16.314,16.314,0,0,0,48.237,11a17.7,17.7,0,0,0-27.2.338l-.931,1.2-1.553-.375a4.955,4.955,0,0,0-1.165-.15,4.9,4.9,0,0,0-3.531,1.39,4.587,4.587,0,0,0-1.436,3.417l.311,2.479-1.707.676a9.842,9.842,0,0,0-4.386,3.53,9.181,9.181,0,0,0-1.669,5.332,9.34,9.34,0,0,0,1.319,4.845A9.567,9.567,0,0,0,9.9,37.179c.175.1.356.192.536.279v5.148a14.788,14.788,0,0,1-2.981-1.3,15.024,15.024,0,0,1-5.433-5.258A13.506,13.506,0,0,1,0,28.917a12.771,12.771,0,0,1,2.1-7.061,15.941,15.941,0,0,1,5.356-5.032,8.945,8.945,0,0,1,1.358-4.807,10.362,10.362,0,0,1,3.609-3.493,9.71,9.71,0,0,1,4.967-1.314,3.411,3.411,0,0,1,.621.075l.388.076a23,23,0,0,1,7.219-5.333,21.89,21.89,0,0,1,18.239-.075A21.285,21.285,0,0,1,51.032,7.1a22.8,22.8,0,0,1,4.618,7.549,15.835,15.835,0,0,1,6.985,2.215,14.432,14.432,0,0,1,5.045,5.071,13.405,13.405,0,0,1,1.862,6.909,13.638,13.638,0,0,1-2.018,7.211,15.028,15.028,0,0,1-5.432,5.258,14.716,14.716,0,0,1-6.457,1.922Z" transform="translate(0 0)"/>
                  <path id="Caminho_349" data-name="Caminho 349" d="M1.563-7.5H29.627V27.959H1.563V-7.5ZM4.369-4.545V2.842H26.82V-4.545Zm0,10.342v8.865H26.82V5.8Zm0,11.82V25H26.82V17.617Z" transform="translate(17.561 30.096)"/>
                </g>
              </g>
            </svg>
            <h4 className='lateralTooltiptext'>
              CCM Cloud
            </h4>
          </div>

          <div className='lateralTooltip'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className='groupImagesLeft'>
              <path d="M 18 5 L 18 7 L 23.5625 7 L 11.28125 19.28125 L 12.71875 20.71875 L 25 8.4375 L 25 14 L 27 14 L 27 5 Z M 5 9 L 5 27 L 23 27 L 23 14 L 21 16 L 21 25 L 7 25 L 7 11 L 16 11 L 18 9 Z"/>
            </svg>
            <h4 className='lateralTooltiptext'>
              Versão 01
            </h4>
          </div>
        </div>
        <div className='containerImages'>
          <div className='lateralTooltip'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className='groupImagesLeft'>
              <path d="M 9.53125 6 L 4.21875 12.375 L 3.71875 12.96875 L 4.21875 13.625 L 15.21875 27.625 L 16 28.625 L 16.78125 27.625 L 27.78125 13.625 L 28.28125 12.96875 L 27.78125 12.375 L 22.46875 6 Z M 10.46875 8 L 14.125 8 L 11.4375 12 L 7.125 12 Z M 17.875 8 L 21.53125 8 L 24.875 12 L 20.5625 12 Z M 16 8.84375 L 18.125 12 L 13.875 12 Z M 7.03125 14 L 11.25 14 L 13.625 22.40625 Z M 13.3125 14 L 18.65625 14 L 16 23.3125 Z M 20.75 14 L 24.96875 14 L 18.375 22.375 Z"/>
            </svg>
            <h4 className='lateralTooltiptext'>
              Administração
            </h4>
          </div>

          <div className='lateralTooltip'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className='groupImagesLeft'>
              <path d="M 5.25 2.75 L 4.6875 3.28125 L 3.28125 4.6875 L 2.75 5.25 L 3.15625 5.90625 L 5.25 9.40625 L 5.53125 9.90625 L 8.46875 9.90625 L 12.46875 13.875 C 8.894531 17.464844 4.347656 22.027344 4.1875 22.1875 C 2.621094 23.753906 2.617188 26.320313 4.21875 27.8125 C 5.78125 29.355469 8.328125 29.394531 9.8125 27.8125 C 9.824219 27.800781 9.832031 27.792969 9.84375 27.78125 L 16 21.59375 L 22.1875 27.8125 L 22.28125 27.875 C 23.851563 29.355469 26.347656 29.375 27.8125 27.8125 L 27.8125 27.78125 L 27.84375 27.78125 C 29.375 26.214844 29.390625 23.667969 27.8125 22.1875 L 27.78125 22.15625 L 22.5625 16.96875 C 26.074219 16.640625 28.824219 13.675781 28.875 10.09375 L 28.90625 10.09375 C 28.910156 10.074219 28.90625 10.050781 28.90625 10.03125 C 28.90625 10.019531 28.90625 10.011719 28.90625 10 C 29.003906 8.84375 28.753906 7.738281 28.15625 6.78125 L 27.46875 5.71875 L 22.8125 10.375 L 21.40625 8.90625 L 26.15625 4.15625 L 24.78125 3.59375 C 23.976563 3.25 23.046875 3 22 3 C 18.15625 3 15 6.15625 15 10 C 15 10.417969 15.089844 10.78125 15.15625 11.15625 C 14.71875 11.59375 14.390625 11.953125 13.875 12.46875 L 9.90625 8.5 L 9.90625 5.53125 L 9.40625 5.25 L 5.90625 3.15625 Z M 22 5 C 22.140625 5 22.238281 5.082031 22.375 5.09375 L 18.59375 8.875 L 19.28125 9.59375 L 22.09375 12.5 L 22.78125 13.21875 L 26.75 9.25 C 26.769531 9.480469 26.933594 9.648438 26.90625 9.90625 L 26.90625 10 C 26.90625 12.753906 24.660156 15 21.90625 15 C 21.539063 15 21.09375 14.914063 20.59375 14.8125 L 20.0625 14.71875 L 19.6875 15.09375 L 8.40625 26.40625 L 8.375 26.40625 L 8.375 26.4375 C 7.664063 27.214844 6.421875 27.234375 5.59375 26.40625 L 5.59375 26.375 L 5.5625 26.375 C 4.785156 25.664063 4.765625 24.421875 5.59375 23.59375 C 5.972656 23.214844 13.3125 15.8125 16.90625 12.21875 L 17.3125 11.8125 L 17.15625 11.25 C 17.074219 10.925781 17 10.367188 17 10 C 17 7.246094 19.246094 5 22 5 Z M 5.5625 5.25 L 7.90625 6.6875 L 7.90625 7.6875 L 7.6875 7.90625 L 6.6875 7.90625 L 5.25 5.5625 Z M 20.1875 17.40625 L 26.40625 23.59375 L 26.40625 23.625 L 26.4375 23.625 C 27.214844 24.335938 27.234375 25.578125 26.40625 26.40625 L 26.375 26.40625 L 26.375 26.4375 C 25.664063 27.214844 24.421875 27.234375 23.59375 26.40625 L 17.40625 20.1875 Z"/>
            </svg>
            <h4 className='lateralTooltiptext'>
              Help Desk
            </h4>
          </div>
          
          <div className='lateralTooltip'>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className='groupImagesLeft'>
              <path d="M19.1875 0.996094L17.7812 2.25391L22.0625 6H1V7.75H22.0625L17.7812 11.4961L19.1875 12.7539L25.9062 6.875L19.1875 0.996094ZM6.8125 13.2461L0.09375 19.125L6.8125 25.0039L8.21875 23.7461L3.9375 20H25V18.25H3.9375L8.21875 14.5039L6.8125 13.2461Z"/>
            </svg>
            <h4 className='lateralTooltiptext'>
              Trocar Conta
            </h4>
          </div>
          
          <div className='lateralTooltip'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className='groupImagesLeft'>
              <path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 20.050781 28 23.640625 25.988281 25.8125 22.90625 L 24.1875 21.75 C 22.378906 24.320313 19.390625 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 C 19.390625 6 22.375 7.679688 24.1875 10.25 L 25.8125 9.09375 C 23.640625 6.011719 20.050781 4 16 4 Z M 23.34375 11.28125 L 21.90625 12.71875 L 24.1875 15 L 12 15 L 12 17 L 24.1875 17 L 21.90625 19.28125 L 23.34375 20.71875 L 27.34375 16.71875 L 28.03125 16 L 27.34375 15.28125 Z"/>
            </svg>
            <h4 className='lateralTooltiptext'>
              Sair
            </h4>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='navBar'>
          <div className='groupLogoName'>
            <div className='tooltip'>
              A
              <h2 className='tooltiptext'>Antônio da Silva</h2>
            </div>
            <div className='logoNav'>
              <img src={acmeLogo} alt='Acme Logo'/>
            </div>
          </div>
          <div className='buttonInput'>
            <div className='input'>
              <FiSearch size={16} color='#117EFF'/>
              <input placeholder='Buscar'/>
            </div>

            <button onClick={() => {setModalOpen(!modalOpen)}}>+ Nova Jornada</button>
          </div>
        </div>
        <div className='containerList'>
          <div className='listFilter'>
            <h1>Jornadas</h1>
            <ul>
            {filters.map(filter => (
              <>
                <li key={filter.id}><div className='iconName'> <img src={objectIcon[counter]} alt='tableIcon'/> <p onClick={() => listFilterById(filter.id)}> {filter.name} </p></div> <p className='contFilter'>{filter.quantity}</p></li>
                {counterFilter()}
              </>
            ))}
            </ul>
          </div>
          <div className= 'listJourneys'>
          <div className= 'titleJourneys'>
            <p className='titleJourneyName'>Nome</p>
            <p className='titleJourneyInfo'>Destinatários</p>
            <p className='titleJourneyInfo'>Sucesso</p>
            <p className='titleJourneyInfo'>Status</p>
          </div>
          {journeys.map(journey => (
            <ListJourneys key={journey.id} idJourney={journey.status} name={journey.name} destinatary={journey.recipients} success={journey.success} status={journey.status}/>
          ))}        
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;