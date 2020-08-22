import React from 'react';

import acmeLogo from '../../assets/images/acme-logo.png'

import './styles.css'
import { FiSearch } from 'react-icons/fi'

function NavBar() {
  return(
      <div className='navBar'>
        <div className='groupLogoName'>
          <h2>A</h2>
          <div className='logoNav'>
            <img src={acmeLogo} alt='Acme Logo'/>
          </div>
        </div>
        <div className='buttonInput'>
          <div className='input'>
            <FiSearch size={16} color='#117EFF'/>
            <input placeholder='Buscar'/>
          </div>

          <button>+ Nova Jornada</button>
        </div>
      </div>
  );
}

export default NavBar