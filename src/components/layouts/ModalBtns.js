import React from 'react';
import { connect } from 'react-redux';
import { setModal } from '../../actions/logActions';

const ModalBtns = ( { setModal } ) => {
  const showModalAdd = () => { 
    setModal('MODAL_ADD') 
  };
  return (
    <ul className='fixed bottom-0 right-0 m-4'>
      <li className='p-4 my-2 bg-green-600 rounded-full text-white text-center opacity-25 hover:opacity-100'><a onClick={() => setModal('MODAL_TECH_LIST')} href='#!'><i className='fas fa-user'></i></a></li>
      <li className='p-4 my-2 bg-red-600 rounded-full text-white text-center opacity-25 hover:opacity-100'><a onClick={() => setModal('MODAL_TECH_ADD')} href='#!'><i className='fas fa-user-plus'></i></a></li>
      <li className='p-4 my-2 bg-blue-600 rounded-full text-white text-center opacity-25 hover:opacity-100'><a onClick={showModalAdd} href='#!'><i className='fas fa-plus'></i></a></li>
    </ul>
  )
};

export default connect(
  null,
  { setModal }
)(ModalBtns);
