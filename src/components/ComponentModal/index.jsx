import './styles.css';
import React from 'react';

import Modal from 'react-modal';

Modal.setAppElement('#root');
function ComponentModal({propsModalOpen, propsSetModalOpen}) {

  return(
    <>
      <Modal isOpen={propsModalOpen} className='modal' >
        <div className='containerModal'>
          <h2>Nova Jornada</h2>
          <hr/>
          <div className='components'>
            <p>De um <strong>nome</strong> para essa Jornada</p>
            <input type='text'/>
            <p>Você pode alterar essa informação depois</p>
          </div>
          <div className='buttons'>
            <button onClick={() => {propsSetModalOpen(!propsModalOpen)}}>Continuar</button>
            <button onClick={() => {propsSetModalOpen(!propsModalOpen)}}>Cancelar</button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ComponentModal;