import React, { Fragment } from 'react';
import SearchBar from './components/layouts/SearchBar';
import Logs from './components/logs/Logs';
import ModalBtns from './components/layouts/ModalBtns';
import ModalAddEditLog from './components/logs/ModalAddEditLog';
import ModalAddTech from './components/techs/ModalAddTech';
import ModalListTech from './components/techs/ModalListTech';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='p-4 m-4'>
          <Logs /> 
        </div>
        <ModalBtns />
        <ModalAddEditLog />
        <ModalAddTech />
        <ModalListTech />
      </Fragment>
    </Provider>
  );
}

export default App;
