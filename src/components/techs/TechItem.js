import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techActions';

const TechItem = ({ tech, deleteTech }) => {

  const onDelete = ()=> {
    deleteTech(tech.id);
  };

  return (
        <div className='p-4 flex justify-between border'>
          <div>{tech.firstName}{' '}{tech.lastName}</div>
          <a href='#!' onClick={onDelete}><i className='fas fa-trash'/></a>
        </div>
  );
};

export default connect(
  null,
  { deleteTech }
)(TechItem);
