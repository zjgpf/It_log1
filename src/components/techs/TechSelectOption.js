import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';

const TechSelectOption = ({ getTechs, techs }) => {

  useEffect(() => {
    getTechs();
  }, []);
  
  return (
    techs && techs.map(tech => <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>{tech.firstName} {tech.lastName}</option>)
  );

};

const mapStateToProps = state => ({
  techs: state.tech.techs
});

export default connect(
  mapStateToProps,
  { getTechs }
)(TechSelectOption);
