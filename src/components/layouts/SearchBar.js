import React from 'react';
import { connect } from 'react-redux';
import { searchLogs } from '../../actions/logActions';

const SearchBar = ({ searchLogs }) => {
  const onChange = e=> {
    const text = e.target.value.trim(); 
    searchLogs(text);
  };
  return (
    <div className='p-4 flex items-center w-full bg-blue-800 text-white shadow-xl'>
      <i className='fas fa-search px-4' />
      <input onChange={onChange} type='text' placeholder='Search logs...' className='bg-blue-800 w-full py-1 px-2' />
    </div>
  );
};

export default connect(
  null,
  { searchLogs }
)(SearchBar);
