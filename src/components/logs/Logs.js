import React, { useEffect } from 'react';
import LogItem from './LogItem';
import { connect } from 'react-redux';
import { getLogs } from '../../actions/logActions';

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
  }, []);
  if ( loading || logs === null ) return <div>Loading...</div>;
  return (
    <div className='border w-2/3 m-auto'>
      <h1 className='text-center text-4xl border-b py-4'>System Logs</h1>
      {
        logs.map(logItem => <LogItem key={logItem.id} logItem={logItem} />)
      }
    </div>
  );
};

const mapStateToProps = state => ({
  log: state.log
});

export default connect(
  mapStateToProps,
  { getLogs }
)(Logs);
