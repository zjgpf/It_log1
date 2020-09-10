import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteLog, setModal, setCurrent } from '../../actions/logActions';

const LogItem = ({ logItem: { id, message, attention, tech, date }, deleteLog, setModal, setCurrent }) => {
  const onDelete = () => { 
    deleteLog(id); 
  };
  const onClick = () => {
    setModal('MODAL_EDIT');
    setCurrent({id, message, attention, tech});
  };
  return (
    <div className='p-4 border-b'>
      <a href='#!' onClick={onClick} className='text-blue-600 py-2'>{message}</a>
      <div className='flex justify-between'>
        <div>
          <span>ID #{id}</span>
          <span className='text-gray-500'>{' '}last updated by </span>
          <span>{' '}{tech}</span>
          <span className='text-gray-500'>{' on '}</span>
          <Moment className='text-gray-500' format='MMMM Do YYYY, h:mm:ss a'>{date}</Moment>
        </div>
        <a onClick={onDelete} href='#!'><i className='fas fa-trash text-gray-600' /></a>
      </div>
    </div>
  );
};

export default connect(
  null,
  { deleteLog, setModal, setCurrent }
)(LogItem);
