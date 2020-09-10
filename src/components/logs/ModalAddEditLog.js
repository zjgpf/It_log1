import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setModal, addLog, setCurrent, updateLog } from '../../actions/logActions';
import TechSelectOption from '../techs/TechSelectOption';

const ModalAddEditLog = ({ current, modal, setModal, addLog, updateLog, setCurrent }) => {

  const isShow = ((modal === 'MODAL_ADD') || (modal === 'MODAL_EDIT'));
  const unShow = e=> {
    const id = e.target.id;
    if (id === 'div_modalOuter' || id === 'btn_enter') {
      setModal(null);
      setCurrent(null);
    };
  };

  const [state, setState] = useState(
    {
      id: null,
      message: '',
      tech: '',
      attention: false
    }
  );

  useEffect(() => {
    if (current) setState({id: current.id, message: current.message, tech: current.tech, attention: current.attention});
    else  setState({message:'', tech:'', attention: false});
  }, [ current ]);
  
  const { id, message, tech, attention } = state;

  const onChange = e => setState({...state, [e.target.name]: e.target.value});

  const onSubmit = () => {
    if (modal === 'MODAL_ADD') {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date()
      };
      addLog(newLog);
    }
    if (modal === 'MODAL_EDIT') { 
      const log = {
        id,
        message,
        attention,
        tech,
        date: new Date()
      };
      updateLog(log); 
    }
    setState({message:'', tech: '', attention: false });
  };
  
  return (
    <div id='div_modalOuter' onClick={unShow} className={`flex fixed top-0 right-0 bottom-0 left-0 justify-center items-center bg-gray-800 bg-opacity-25 ${isShow ? '':'hidden'}`}>
      <div className='bg-white shadow-xl p-4 w-full sm:w-4/5 flex flex-col rounded'>
        <h1 className='text-2xl my-4'>Enter System Log</h1>
        <input name='message' onChange={onChange} value={message} type='text' placeholder='Log Message' className='block w-full border-b px-2 py-1 my-2'/>
        <select name='tech' value={tech} onChange={onChange} className='block py-1 px-2 my-4 bg-gray-200 rounded w-full'>
          <option vaule='' disabled>Select Technician</option>
          <TechSelectOption />
        </select>
        <div className='my-4'>
          <input name='attention' checked={attention} value={attention} onChange={() => setState({ ...state, attention: !attention}) } type='checkbox' />
          <span className='ml-2 text-gray-600'>Need Attention</span>
        </div>
        <div className='flex justify-end my-4'>
          <button id='btn_enter' onClick={onSubmit} className='px-2 py-1 bg-blue-600 text-white rounded'>Enter</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  modal: state.log.modal,
  current: state.log.current
});

export default connect(
  mapStateToProps,
  { setModal, addLog, setCurrent, updateLog }
)(ModalAddEditLog);
