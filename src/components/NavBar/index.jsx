import './styles.css';
import React from 'react';

import { FiSearch } from 'react-icons/fi';

import acmeLogo from '../../assets/images/acme-logo.png';

function NavBar({propsModalOpen, propsSetModalOpen}) {

  return (
    <>
      <div className='navBar'>
        <div className='groupLogoName'>
          <div className='tooltip'>
            <p>A</p>
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

          <button onClick={() => {propsSetModalOpen(!propsModalOpen)}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className='iconPlus'>
            <path d="M 15 5 L 15 15 L 5 15 L 5 17 L 15 17 L 15 27 L 17 27 L 17 17 L 27 17 L 27 15 L 17 15 L 17 5 Z"/>
          </svg>
            Nova Jornada
          </button>
        </div>
      </div>
    </>
  );
}

export default NavBar;