import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTechs, setModal } from '../../actions/techActions';
import TechItem from './TechItem';

const ModalListTech = ({ modal, setModal, getTechs, techs }) => {

  const isShow = (modal === 'MODAL_TECH_LIST');
  const unShow = e=> {
    const id = e.target.id;
    if (id === 'div_modalOuter' || id === 'btn_enter') {
      setModal(null);
    };
  };

  useEffect(() => {
    getTechs();
  }, []);
  
  return (
    <div id='div_modalOuter' onClick={unShow} className={`flex fixed top-0 right-0 bottom-0 left-0 justify-center items-center bg-gray-800 bg-opacity-25 ${isShow ? '':'hidden'}`}>
      <div className='bg-white shadow-xl p-4 w-full sm:w-4/5 flex flex-col rounded'>
        <h1 className='text-2xl my-4'>Technician List</h1>
          {techs && techs.map( tech=> <TechItem key={tech.id} tech={tech} /> )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  modal: state.tech.modal,
  techs: state.tech.techs
});

export default connect(
  mapStateToProps,
  { setModal, getTechs }
)(ModalListTech);
