import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTech, setModal } from '../../actions/techActions';

const ModalAddTech = ({ modal, setModal, addTech }) => {

  const isShow = (modal === 'MODAL_TECH_ADD');
  const unShow = e=> {
    const id = e.target.id;
    if (id === 'div_modalOuter' || id === 'btn_enter') {
      setModal(null);
    };
  };

  const [state, setState] = useState(
    {
      firstName: '',
      lastName: ''
    }
  );

  const { firstName, lastName } = state;

  const onChange = e => setState({...state, [e.target.name]: e.target.value});

  const onSubmit = () => {
    const newTech = {
      firstName,
      lastName
    };
    addTech(newTech);
    setState({firstName:'', lastName: ''});
  };
  
  return (
    <div id='div_modalOuter' onClick={unShow} className={`flex fixed top-0 right-0 bottom-0 left-0 justify-center items-center bg-gray-800 bg-opacity-25 ${isShow ? '':'hidden'}`}>
      <div className='bg-white shadow-xl p-4 w-full sm:w-4/5 flex flex-col rounded'>
        <h1 className='text-2xl my-4'>New Technician</h1>
        <input name='firstName' onChange={onChange} value={firstName} type='text' placeholder='First Name' className='block w-full border-b px-2 py-1 my-2'/>
        <input name='lastName' onChange={onChange} value={lastName} type='text' placeholder='Last Name' className='block w-full border-b px-2 py-1 my-2'/>
        <div className='flex justify-end my-4'>
          <button id='btn_enter' onClick={onSubmit} className='px-2 py-1 bg-blue-600 text-white rounded'>Enter</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  modal: state.tech.modal
});

export default connect(
  mapStateToProps,
  { setModal, addTech }
)(ModalAddTech);
